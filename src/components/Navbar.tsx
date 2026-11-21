'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  ChevronDown,
  Building2,
  Clock,
  Images,
  Phone,
  MapPin,
  X,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Track scroll position for sticky border/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key to close open menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDesktopDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-close drawers on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
  }, [pathname]);

  const campusLifeSubmenu = [
    { label: 'Campus Facilities', href: '/facilities', icon: Building2, desc: 'Smart classrooms, labs & sports grounds' },
    { label: 'Daily Routine & Timings', href: '/school-life', icon: Clock, desc: 'Assembly, schedule & student life' },
    { label: 'Photo Gallery', href: '/gallery', icon: Images, desc: 'Authentic moments from campus life' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isCampusLifeActive = () => {
    return pathname.startsWith('/facilities') || pathname.startsWith('/school-life') || pathname.startsWith('/gallery');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-[#e2ded4]'
            : 'bg-[#faf9f5] border-b border-[#e5e1d8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            {/* School Crest & Institutional Identity */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              aria-label="Tapovan Vatsalyadham School Home"
            >
              <img
                src="/assets/images/cropped_logo.png"
                alt="Tapovan Vatsalyadham School Crest"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/logo.png';
                }}
              />
              <div className="border-l border-[#dcd7cb] pl-2.5 sm:pl-3">
                <div className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#1b3832] tracking-tight leading-tight whitespace-nowrap">
                  TAPOVAN VATSALYADHAM
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#856124] uppercase tracking-wider leading-none mt-0.5 whitespace-nowrap">
                  English Medium Boys School
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <Link
                href="/"
                className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 transition-colors whitespace-nowrap ${
                  isActive('/')
                    ? 'text-[#1b3832] font-bold'
                    : 'text-slate-700 hover:text-[#1b3832]'
                }`}
              >
                Home
                {isActive('/') && <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#c29b38]" />}
              </Link>

              <Link
                href="/about"
                className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 transition-colors whitespace-nowrap ${
                  isActive('/about')
                    ? 'text-[#1b3832] font-bold'
                    : 'text-slate-700 hover:text-[#1b3832]'
                }`}
              >
                About Us
                {isActive('/about') && <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#c29b38]" />}
              </Link>

              <Link
                href="/academics"
                className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 transition-colors whitespace-nowrap ${
                  isActive('/academics')
                    ? 'text-[#1b3832] font-bold'
                    : 'text-slate-700 hover:text-[#1b3832]'
                }`}
              >
                Academics
                {isActive('/academics') && <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#c29b38]" />}
              </Link>

              {/* Campus Life Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="true"
                  className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 inline-flex items-center gap-1 transition-colors whitespace-nowrap ${
                    isCampusLifeActive() || desktopDropdownOpen
                      ? 'text-[#1b3832] font-bold'
                      : 'text-slate-700 hover:text-[#1b3832]'
                  }`}
                >
                  <span>Campus Life</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      desktopDropdownOpen ? 'rotate-180 text-[#c29b38]' : 'text-slate-400'
                    }`}
                  />
                  {isCampusLifeActive() && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#c29b38]" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {desktopDropdownOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white border border-[#e5e1d8] rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    role="menu"
                  >
                    {campusLifeSubmenu.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const active = pathname.startsWith(subItem.href);
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          role="menuitem"
                          onClick={() => setDesktopDropdownOpen(false)}
                          className={`flex items-start gap-3 px-3.5 py-2.5 hover:bg-[#faf9f5] transition-colors ${
                            active ? 'bg-[#f4f1ea] border-l-2 border-[#1b3832]' : ''
                          }`}
                        >
                          <SubIcon className={`w-4 h-4 mt-0.5 shrink-0 ${active ? 'text-[#1b3832]' : 'text-[#c29b38]'}`} />
                          <div>
                            <div className={`text-xs font-semibold ${active ? 'text-[#1b3832]' : 'text-slate-800'}`}>
                              {subItem.label}
                            </div>
                            <div className="text-[10px] text-slate-500 leading-tight">
                              {subItem.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/mandatory-disclosure"
                className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 transition-colors whitespace-nowrap ${
                  isActive('/mandatory-disclosure')
                    ? 'text-[#1b3832] font-bold'
                    : 'text-slate-700 hover:text-[#1b3832]'
                }`}
              >
                CBSE Corner
                {isActive('/mandatory-disclosure') && <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#c29b38]" />}
              </Link>

              <Link
                href="/contact"
                className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 transition-colors whitespace-nowrap ${
                  isActive('/contact')
                    ? 'text-[#1b3832] font-bold'
                    : 'text-slate-700 hover:text-[#1b3832]'
                }`}
              >
                Contact
                {isActive('/contact') && <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#c29b38]" />}
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Hamburger Trigger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden xl:block shrink-0">
                <Link
                  href="/admissions"
                  className="btn-accent text-xs font-semibold uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>Enquire for Admission</span>
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-drawer"
                className="flex xl:hidden items-center justify-center w-10 h-10 rounded-lg bg-[#1b3832] text-white hover:bg-[#285149] transition-all shadow-sm active:scale-95 border border-[#233d38]"
              >
                <div className="w-5 h-4 flex flex-col justify-between py-0.5">
                  <span className="h-[2px] w-5 bg-white rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="h-[2px] w-3 bg-[#dfc488] rounded-full" />
                    <span className="h-[2px] w-1.5 bg-white/80 rounded-full" />
                  </div>
                  <span className="h-[2px] w-4 bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <aside
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-y-0 right-0 w-[80vw] max-w-[340px] bg-white shadow-2xl flex flex-col z-10 border-l border-[#e5e1d8]"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#e5e1d8] bg-[#faf9f5] shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <img
                  src="/assets/images/cropped_logo.png"
                  alt="TVS Crest"
                  className="h-9 w-auto shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-serif font-bold text-[#1b3832] text-xs sm:text-sm leading-tight truncate">
                    TAPOVAN VATSALYADHAM
                  </div>
                  <div className="text-[9px] text-[#856124] font-bold uppercase tracking-widest truncate">
                    Menu &amp; Navigation
                  </div>
                </div>
              </div>

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-8 h-8 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto px-3.5 py-3">
              <nav className="flex flex-col space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                    isActive('/') ? 'bg-[#1b3832] text-white' : 'text-slate-700 hover:bg-[#faf9f5]'
                  }`}
                >
                  <span>Home</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive('/') ? 'text-[#dfc488]' : 'opacity-30'}`} />
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                    isActive('/about') ? 'bg-[#1b3832] text-white' : 'text-slate-700 hover:bg-[#faf9f5]'
                  }`}
                >
                  <span>About Us</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive('/about') ? 'text-[#dfc488]' : 'opacity-30'}`} />
                </Link>

                <Link
                  href="/academics"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                    isActive('/academics') ? 'bg-[#1b3832] text-white' : 'text-slate-700 hover:bg-[#faf9f5]'
                  }`}
                >
                  <span>Academics</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive('/academics') ? 'text-[#dfc488]' : 'opacity-30'}`} />
                </Link>

                {/* Campus Life Expandable Accordion */}
                <div className="rounded-lg border border-[#e5e1d8] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    aria-expanded={mobileDropdownOpen}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-between text-slate-800 bg-[#faf9f5] hover:bg-[#f4f1ea] transition-colors"
                  >
                    <span>Campus Life</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        mobileDropdownOpen ? 'rotate-180 text-[#856124]' : 'text-slate-500'
                      }`}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div className="p-1 space-y-0.5 bg-white border-t border-[#e5e1d8]">
                      {campusLifeSubmenu.map((subItem) => {
                        const SubIcon = subItem.icon;
                        const active = pathname.startsWith(subItem.href);
                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded text-xs font-semibold transition-colors ${
                              active ? 'bg-[#1b3832] text-white' : 'text-slate-700 hover:bg-[#faf9f5]'
                            }`}
                          >
                            <SubIcon className={`w-3.5 h-3.5 ${active ? 'text-[#dfc488]' : 'text-[#c29b38]'}`} />
                            <span>{subItem.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link
                  href="/mandatory-disclosure"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                    isActive('/mandatory-disclosure') ? 'bg-[#1b3832] text-white' : 'text-slate-700 hover:bg-[#faf9f5]'
                  }`}
                >
                  <span>CBSE Corner</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive('/mandatory-disclosure') ? 'text-[#dfc488]' : 'opacity-30'}`} />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                    isActive('/contact') ? 'bg-[#1b3832] text-white' : 'text-slate-700 hover:bg-[#faf9f5]'
                  }`}
                >
                  <span>Contact</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive('/contact') ? 'text-[#dfc488]' : 'opacity-30'}`} />
                </Link>
              </nav>

              {/* Admissions CTA in Drawer */}
              <div className="mt-4 pt-3.5 border-t border-[#e5e1d8]">
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-accent w-full justify-center text-xs uppercase tracking-wider font-bold py-2.5 text-center whitespace-nowrap"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Enquire for Admission (2027–28)</span>
                </Link>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="shrink-0 p-3.5 border-t border-[#e5e1d8] bg-[#faf9f5] space-y-1.5 text-xs text-slate-600">
              <a
                href="tel:+919737691800"
                className="flex items-center gap-2 font-semibold text-[#1b3832] hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-[#c29b38]" />
                <span>+91 9737691800</span>
              </a>
              <div className="flex items-start gap-2 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#c29b38] shrink-0 mt-0.5" />
                <span>Amiyapur, Near Tapovan Circle, Gandhinagar</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
