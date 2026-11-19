# Tapovan Vatsalyadham School (English Medium) - Institutional Web Platform

A modern, institutional, high-performance web platform built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons** for **Tapovan Vatsalyadham School (English Medium)**, Amiyapur, Gandhinagar, Gujarat. Managed by the **Jivan Jagruti Trust** and affiliated with the **Central Board of Secondary Education (CBSE)**, New Delhi.

---

## 🏛️ Design & Architecture Highlights

- **Bespoke Institutional Identity:** Designed with an editorial aesthetic using deep Oxford Navy (`#071326`), architectural warm ivory (`#faf9f5`), and muted burnished gold (`#d4af37`). Free of generic AI tropes, aggressive gradients, and repetitive card patterns.
- **Pure Day School Focus:** Tailored for a modern Day School environment (smart classrooms, STEM & IT laboratories, athletic fields, safe GPS bus fleet, on-campus health room) without residential or dining/hostel references.
- **Zero-Backend Google Sheet Form Integration:** Admissions and contact inquiries submit directly to the school's Google Sheet in real time via an Apps Script webhook with zero server maintenance, along with instant parent WhatsApp confirmation.
- **Verified CBSE Compliance:** Houses all 19 official CBSE mandatory disclosure documents, certificates, and affiliation records locally under `public/assets/docs/`.
- **Production Ready for Vercel:** Fully static/serverless-optimized with dynamic XML sitemap (`/sitemap.xml`), `robots.txt`, custom 404 page, and clean responsive layouts.

---

## 🚀 How to Run Locally

```bash
# Navigate to project directory
cd Tapovan

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production Build & Start
npm run build
npm run start
```

---

## 📊 Google Sheets Setup (Zero-Backend Form Submissions)

To have admission inquiries and contact messages flow directly into your client's Google Sheet automatically:

1. **Create a Google Sheet:**
   - Go to [Google Sheets](https://sheets.new) and create a new spreadsheet named `Tapovan School Admissions`.
   - In Row 1, add headers: `Timestamp`, `Student Name`, `Parent Name`, `Phone`, `Email`, `Grade`, `Area`, `Notes`, `Source`.

2. **Add Google Apps Script:**
   - Click **Extensions** > **Apps Script**.
   - Replace any existing code with the following snippet:
   ```javascript
   function doPost(e) {
     try {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       var data = JSON.parse(e.postData.contents);
       sheet.appendRow([
         data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
         data.studentName || data.name || "",
         data.parentName || "",
         data.phone || "",
         data.email || "",
         data.grade || "",
         data.area || "",
         data.notes || data.message || "",
         data.source || "Website Form"
       ]);
       return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (err) {
       return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

3. **Deploy Web App:**
   - Click **Deploy** > **New Deployment**.
   - Select type: **Web App**.
   - Description: `Tapovan Form Webhook`.
   - Execute as: **Me**.
   - Who has access: **Anyone** (allows client browser forms to append rows).
   - Click **Deploy** and copy the **Web app URL**.

4. **Connect to Next.js / Vercel:**
   - Add the URL to your `.env.local` file (or Vercel Environment Variables):
     ```bash
     NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycbxDG4fwav-ln39lp6gMZIk4WkEYxr-nGWFFPqqPbojAFUO8SzhwIyAs1JtdsTF8lwoXpw/exec
     ```
   - Forms will immediately send data to the Google Sheet with zero server costs!

---

## 🚢 Deploying to GitHub & Vercel

1. **Commit and Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Transform school website to premium institutional design"
   git remote add origin https://github.com/YOUR_USERNAME/tapovan-school.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
   - Import your GitHub repository `tapovan-school`.
   - In **Environment Variables**, add:
     - Key: `NEXT_PUBLIC_GOOGLE_SHEET_URL`
     - Value: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
   - Click **Deploy**. Vercel will build and launch the site globally with automatic SSL and fast CDN routing!

---

## 🏛️ Website Routes & Structure

- `/` — Institutional Editorial Homepage (Hero, Stats, Narrative, Interactive 2D Campus Explorer, Announcements, Gallery Lightbox, Smart FAQ, Admission Form, Map)
- `/about` — School Foundation, Philosophy, Trust Governance, and Leadership
- `/academics` — CBSE Curriculum Stages, Pedagogy, Holistic Co-Curriculars, Document Downloads
- `/admissions` — Admission Criteria, 3-Step Procedure, Interactive Day School Fee Estimator, Online Form (Session 2026-27)
- `/facilities` — Academic & STEM Labs, Library, Sports Arena, Smart Classrooms, Safe Transport, Medical First-Aid
- `/school-life` — Daily Schedule (7:30 AM – 2:30 PM), Sports, Creative Arts, House System, Clubs
- `/mandatory-disclosure` — General School Details (Section A), Real-time Filter, All 19 Official CBSE PDFs
- `/gallery` — Filterable Campus & Activity Gallery with Fullscreen Lightbox & Custom Image Uploader
- `/contact` — Office Directory, Direct Phone Numbers, Google Maps directions, Inquiry Form
- `/sitemap.xml` & `/robots.txt` — Search Engine Indexing configuration
- `/_not-found` — Custom Branded 404 Error Page

---

## 📋 Technology Stack

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom Institutional CSS Design System
- **Fonts:** Playfair Display (Serif) & Plus Jakarta Sans (Sans-serif)
- **Icons:** Lucide React
- **Forms:** Client-side zero-backend Google Sheet Webhook + WhatsApp API
