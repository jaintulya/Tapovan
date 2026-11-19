'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, ArrowUp, X, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);

  const fabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setShowBackToTop(scrollPos > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside (safe for both mouse and touch devices)
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setFabOpen(false);
      }
    };
    if (fabOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [fabOpen]);

  // Robust, Cross-Browser Scroll to Top
  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Tapovan Vatsalyadham School, I would like to enquire about Admissions for Session 2027-28.'
  );

  return (
    <>
      {/* 1. Back to Top Button Directly Above WhatsApp Button (Bottom-RIGHT) */}
      <div
        className={`fixed bottom-[84px] right-4 sm:right-6 z-[60] w-[54px] flex items-center justify-center transition-all duration-300 ${
          showBackToTop && !fabOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-2 pointer-events-none scale-75'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-11 h-11 rounded-full bg-white text-[#0b1d3a] border border-[#dcd7cb] shadow-lg flex items-center justify-center hover:bg-[#0b1d3a] hover:text-[#d4af37] hover:border-[#0b1d3a] transition-all duration-200 active:scale-90 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* 2. Single Floating Contact Trigger Button on Bottom-RIGHT */}
      <div
        ref={fabRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-none"
      >
        {/* 3 Action Buttons Stack */}
        <div
          className={`flex flex-col items-end gap-2.5 mb-3 transition-all duration-200 origin-bottom ${
            fabOpen
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
          }`}
        >
          {/* 1. Direct WhatsApp */}
          <a
            href={`https://wa.me/919737691800?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setFabOpen(false)}
            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fb858] text-white py-2.5 px-4 rounded-full shadow-lg border border-emerald-700/20 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <span className="text-xs font-semibold whitespace-nowrap">Chat on WhatsApp</span>
            <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
          </a>

          {/* 2. Direct Link to Official Admission Enquiry Form Page (No Popup) */}
          <Link
            href="/admissions#form-section"
            onClick={() => setFabOpen(false)}
            className="flex items-center gap-2.5 bg-[#b8860b] hover:bg-[#9e7309] text-white py-2.5 px-4 rounded-full shadow-lg border border-amber-900/20 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <span className="text-xs font-semibold whitespace-nowrap">Enquiry Form</span>
            <FileText className="w-4 h-4 shrink-0" />
          </Link>

          {/* 3. Direct Phone Call (Mobile Only) */}
          <a
            href="tel:+919737691800"
            onClick={() => setFabOpen(false)}
            className="md:hidden flex items-center gap-2.5 bg-[#0b1d3a] hover:bg-[#153262] text-white py-2.5 px-4 rounded-full shadow-lg border border-slate-700/60 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <span className="text-xs font-semibold whitespace-nowrap">Call Helpline</span>
            <Phone className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Main Floating Trigger Button */}
        <button
          type="button"
          onClick={() => setFabOpen(!fabOpen)}
          aria-label={fabOpen ? 'Close quick actions' : 'Open WhatsApp and enquiry options'}
          className={`pointer-events-auto w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 border-2 active:scale-95 ${
            fabOpen
              ? 'bg-[#071326] border-[#d4af37]/60 text-white rotate-90'
              : 'bg-[#0b1d3a] border-[#d4af37] text-white hover:bg-[#153262]'
          }`}
          style={{ width: '54px', height: '54px' }}
        >
          {fabOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <div className="relative flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 fill-current text-[#25D366]" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#d4af37] border-2 border-[#0b1d3a]" />
            </div>
          )}
        </button>
      </div>
    </>
  );
}
