const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';

const VIEWPORTS = [
  { name: 'desktop-1440x900', width: 1440, height: 900, isMobile: false },
  { name: 'desktop-1280x800', width: 1280, height: 800, isMobile: false },
  { name: 'tablet-landscape-1024x768', width: 1024, height: 768, isMobile: false },
  { name: 'tablet-portrait-768x1024', width: 768, height: 1024, isMobile: true },
  { name: 'mobile-iphone-pro-max-430x932', width: 430, height: 932, isMobile: true },
  { name: 'mobile-iphone-14-390x844', width: 390, height: 844, isMobile: true },
  { name: 'mobile-iphone-x-375x812', width: 375, height: 812, isMobile: true },
  { name: 'mobile-android-360x800', width: 360, height: 800, isMobile: true },
];

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/academics', name: 'academics' },
  { path: '/facilities', name: 'facilities' },
  { path: '/school-life', name: 'school-life' },
  { path: '/gallery', name: 'gallery' },
  { path: '/mandatory-disclosure', name: 'mandatory-disclosure' },
  { path: '/contact', name: 'contact' },
  { path: '/privacy-policy', name: 'privacy-policy' },
];

const SCREENSHOT_DIR = path.join(__dirname, 'test-results', 'screenshots');

async function runAudit() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  console.log('Launching headless Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const report = {
    testedAt: new Date().toISOString(),
    viewports: VIEWPORTS.length,
    routes: ROUTES.length,
    overflowIssues: [],
    consoleErrors: [],
    interactions: {},
    screenshots: [],
  };

  const page = await browser.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      report.consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('pageerror', (err) => {
    report.consoleErrors.push({ text: err.toString() });
  });

  // 1. Test All Routes across Viewports for Layout & Overflow
  console.log('\n--- 1. Testing Viewports & Overflow Across All Routes ---');
  for (const vp of VIEWPORTS) {
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
    });

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route.path}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Check for horizontal overflow
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const windowWidth = window.innerWidth;
        return {
          hasOverflow: docWidth > windowWidth || bodyWidth > windowWidth,
          docWidth,
          bodyWidth,
          windowWidth,
        };
      });

      if (overflow.hasOverflow) {
        report.overflowIssues.push({
          viewport: vp.name,
          route: route.path,
          ...overflow,
        });
        console.warn(`[OVERFLOW] ${vp.name} on ${route.path}: scrollWidth ${overflow.docWidth} > innerWidth ${overflow.windowWidth}`);
      }

      // Capture representative desktop (1440x900) and mobile (390x844) screenshots
      if (vp.name === 'desktop-1440x900') {
        const filename = `desktop-1440x900_${route.name}.png`;
        const filepath = path.join(SCREENSHOT_DIR, filename);
        await page.screenshot({ path: filepath, fullPage: false });
        report.screenshots.push({ viewport: vp.name, route: route.path, filename });
      } else if (vp.name === 'mobile-iphone-14-390x844') {
        const filename = `mobile-390x844_${route.name}.png`;
        const filepath = path.join(SCREENSHOT_DIR, filename);
        await page.screenshot({ path: filepath, fullPage: false });
        report.screenshots.push({ viewport: vp.name, route: route.path, filename });
      }
    }
    console.log(`✓ Tested all routes at ${vp.name} (${vp.width}x${vp.height})`);
  }

  // 2. Test Mobile Menu Interaction (Open, Accordion, Overflow Lock, Close)
  console.log('\n--- 2. Testing Mobile Menu Interaction ---');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

  // Check initial state
  const initialLock = await page.evaluate(() => document.body.style.overflow);

  // Click hamburger button
  const hamburgerBtn = await page.$('button[aria-label="Open Navigation Menu"]');
  if (hamburgerBtn) {
    await hamburgerBtn.click();
    await page.waitForTimeout ? page.waitForTimeout(400) : new Promise(r => setTimeout(r, 400));

    const drawerOpenState = await page.evaluate(() => {
      const drawer = document.getElementById('mobile-drawer');
      const bodyOverflow = document.body.style.overflow;
      return {
        drawerVisible: !!drawer,
        bodyOverflow,
      };
    });

    report.interactions.mobileDrawerOpen = drawerOpenState;

    // Screenshot open mobile menu
    const menuOpenScreenshot = path.join(SCREENSHOT_DIR, 'mobile-390x844_menu-open.png');
    await page.screenshot({ path: menuOpenScreenshot });
    report.screenshots.push({ name: 'mobile-drawer-open', filename: 'mobile-390x844_menu-open.png' });
    console.log('✓ Captured mobile drawer open screenshot');

    // Click "Campus Life" accordion in drawer
    const clickedAccordion = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#mobile-drawer button'));
      const b = btns.find(btn => btn.textContent && btn.textContent.includes('Campus Life'));
      if (b) {
        b.click();
        return true;
      }
      return false;
    });

    if (clickedAccordion) {
      await new Promise(r => setTimeout(r, 400));
      const accordionExpanded = await page.evaluate(() => {
        return document.querySelectorAll('#mobile-drawer a[href="/facilities"]').length > 0;
      });
      report.interactions.mobileAccordionExpanded = accordionExpanded;
      console.log('✓ Mobile Campus Life accordion toggles sub-links:', accordionExpanded);

      const accordionOpenScreenshot = path.join(SCREENSHOT_DIR, 'mobile-390x844_menu-accordion-open.png');
      await page.screenshot({ path: accordionOpenScreenshot });
      report.screenshots.push({ name: 'mobile-drawer-accordion-open', filename: 'mobile-390x844_menu-accordion-open.png' });
    }

    // Close mobile drawer via Escape key
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));

    const drawerClosedState = await page.evaluate(() => {
      const drawer = document.getElementById('mobile-drawer');
      const bodyOverflow = document.body.style.overflow;
      return {
        drawerClosed: !drawer,
        bodyOverflowRestored: bodyOverflow === '' || bodyOverflow === 'unset',
      };
    });
    report.interactions.mobileDrawerEscapeClose = drawerClosedState;
    console.log('✓ Mobile drawer closed via Escape & body scroll restored:', drawerClosedState);
  }

  // 3. Test Desktop Navigation Dropdown
  console.log('\n--- 3. Testing Desktop Dropdown Interaction ---');
  await page.setViewport({ width: 1440, height: 900, isMobile: false });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

  // Hover over "Campus Life"
  const campusLifeBtn = await page.$('button[aria-haspopup="true"]');
  if (campusLifeBtn) {
    await campusLifeBtn.hover();
    await new Promise(r => setTimeout(r, 300));

    const dropdownVisible = await page.evaluate(() => {
      return document.querySelectorAll('div[role="menu"]').length > 0;
    });
    report.interactions.desktopDropdownHover = dropdownVisible;

    const dropdownScreenshot = path.join(SCREENSHOT_DIR, 'desktop-1440x900_dropdown-open.png');
    await page.screenshot({ path: dropdownScreenshot });
    report.screenshots.push({ name: 'desktop-dropdown-open', filename: 'desktop-1440x900_dropdown-open.png' });
    console.log('✓ Desktop Campus Life dropdown opened & captured:', dropdownVisible);
  }

  // 4. Test Gallery Lightbox
  console.log('\n--- 4. Testing Gallery Lightbox ---');
  await page.goto(`${BASE_URL}/gallery`, { waitUntil: 'networkidle0' });
  const firstPhoto = await page.$('.grid .cursor-pointer');
  if (firstPhoto) {
    await firstPhoto.click();
    await new Promise(r => setTimeout(r, 500));

    const lightboxState = await page.evaluate(() => {
      const dialog = document.querySelector('div[role="dialog"]');
      return {
        open: !!dialog,
        hasImg: dialog ? !!dialog.querySelector('img') : false,
      };
    });
    report.interactions.galleryLightbox = lightboxState;

    const lightboxScreenshot = path.join(SCREENSHOT_DIR, 'desktop-1440x900_gallery-lightbox.png');
    await page.screenshot({ path: lightboxScreenshot });
    report.screenshots.push({ name: 'gallery-lightbox', filename: 'desktop-1440x900_gallery-lightbox.png' });
    console.log('✓ Gallery lightbox opened & captured:', lightboxState);

    // Close via Escape
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 300));
  }

  // 5. Test Mandatory Disclosure Mobile Card Layout
  console.log('\n--- 5. Testing Mandatory Disclosure Mobile Cards ---');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(`${BASE_URL}/mandatory-disclosure`, { waitUntil: 'networkidle0' });

  const mobileDisclosureScreenshot = path.join(SCREENSHOT_DIR, 'mobile-390x844_mandatory-disclosure.png');
  await page.screenshot({ path: mobileDisclosureScreenshot });
  report.screenshots.push({ name: 'mandatory-disclosure-mobile-cards', filename: 'mobile-390x844_mandatory-disclosure.png' });
  console.log('✓ Captured mobile cards layout on /mandatory-disclosure');

  await browser.close();

  // Save JSON report
  fs.writeFileSync(path.join(__dirname, 'test-results', 'audit-report.json'), JSON.stringify(report, null, 2));
  console.log('\n=======================================');
  console.log('✓ Test Suite Completed Successfully!');
  console.log(`Total Viewports Tested: ${report.viewports}`);
  console.log(`Total Routes Tested: ${report.routes}`);
  console.log(`Horizontal Overflow Issues: ${report.overflowIssues.length}`);
  console.log(`Console Errors: ${report.consoleErrors.length}`);
  console.log(`Screenshots Saved: ${report.screenshots.length}`);
  console.log('=======================================\n');
}

runAudit().catch((err) => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
