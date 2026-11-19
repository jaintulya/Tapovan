'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  ArrowRight,
  GraduationCap,
  MapPin,
  Mail,
  X,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Clean, focused direct top-level navigation — NO DROPDOWNS anywhere
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Infrastructure & Facilities', href: '/facilities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'CBSE Corner', href: '/mandatory-disclosure' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-[#e2ded4]'
            : 'bg-[#faf9f5] border-b border-[#e5e1d8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            {/* School Crest & Clean Branding (No messy subtitle) */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              <img
                src="/assets/images/cropped_logo.png"
                alt="Tapovan Vatsalyadham School Crest"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/logo.png';
                }}
              />
              <div className="border-l border-[#dcd7cb] pl-2.5 sm:pl-3">
                <div className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#0b1d3a] tracking-tight leading-tight whitespace-nowrap">
                  TAPOVAN VATSALYADHAM
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#8b6508] uppercase tracking-wider leading-none mt-0.5 whitespace-nowrap">
                  English Medium School
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links — Pure Direct Links, Zero Dropdowns */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={true}
                    className={`relative text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 transition-colors duration-150 whitespace-nowrap ${
                      active
                        ? 'text-[#0b1d3a] font-bold'
                        : 'text-slate-700 hover:text-[#0b1d3a]'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#b8860b]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Hamburger (Right Side) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden lg:block shrink-0">
                <Link
                  href="/admissions"
                  prefetch={true}
                  className="btn-accent text-xs font-semibold uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>
                    Apply <span className="whitespace-nowrap">2027-28</span>
                  </span>
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="flex lg:hidden items-center justify-center w-10 h-10 rounded-lg bg-[#071326] text-white hover:bg-[#0b1d3a] transition-all shadow-sm active:scale-95 border border-slate-700/80"
              >
                {/* 3 Staggered Bars */}
                <div className="w-5 h-4 flex flex-col justify-between py-0.5">
                  <span className="h-[2px] w-5 bg-white rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="h-[2px] w-3 bg-[#d4af37] rounded-full" />
                    <span className="h-[2px] w-1.5 bg-white/70 rounded-full" />
                  </div>
                  <span className="h-[2px] w-4 bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer: Full Height Overlay, Slides from Right with Solid Header & Close Button */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Dimmed Blurred Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right Drawer Panel: 78vw width, full viewport height */}
          <aside className="fixed inset-y-0 right-0 w-[78vw] max-w-[340px] bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#e5e1d8]">
            {/* Solid Drawer Header with TVS Logo and Close (X) */}
            <div className="flex items-center justify-between p-4 border-b border-[#e5e1d8] bg-[#faf9f5] shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src="/assets/images/cropped_logo.png"
                  alt="TVS Crest"
                  className="h-9 w-auto shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-serif font-bold text-[#0b1d3a] text-xs sm:text-sm leading-tight truncate">
                    TAPOVAN VATSALYADHAM
                  </div>
                  <div className="text-[9px] text-[#8b6508] font-bold uppercase tracking-widest truncate">
                    Navigation Menu
                  </div>
                </div>
              </div>

              {/* Close Button X */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation"
                className="w-8 h-8 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Items — Direct Links, Zero Dropdowns */}
            <div className="flex-1 overflow-y-auto px-3.5 py-3">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                        active
                          ? 'bg-[#0b1d3a] text-white'
                          : 'text-slate-700 hover:bg-[#faf9f5]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${
                          active ? 'text-[#d4af37]' : 'opacity-30'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Admissions CTA inside Mobile Drawer */}
              <div className="mt-4 pt-3.5 border-t border-[#e5e1d8]">
                <Link
                  href="/admissions"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-accent w-full justify-center text-xs uppercase tracking-wider font-bold py-2.5 text-center whitespace-nowrap"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>
                    Apply For Admission <span className="whitespace-nowrap">2027-28</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Drawer Footer with Quick Helplines */}
            <div className="shrink-0 p-3.5 border-t border-[#e5e1d8] bg-[#faf9f5] space-y-1">
              <a
                href="tel:+919737691800"
                className="flex items-center gap-2 text-xs text-slate-700 hover:text-[#0b1d3a]"
              >
                <Phone className="w-3.5 h-3.5 text-[#b8860b] shrink-0" />
                <span className="font-bold text-[#0b1d3a]">+91 9737691800</span>
              </a>
              <a
                href="mailto:vatsalyadham@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-600 hover:text-[#0b1d3a]"
              >
                <Mail className="w-3.5 h-3.5 text-[#b8860b] shrink-0" />
                <span className="truncate">vatsalyadham@gmail.com</span>
              </a>
              <div className="flex items-start gap-1.5 text-[10px] text-slate-400 pt-0.5">
                <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                <span className="truncate">Amiyapur, Gandhinagar - 382424</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
