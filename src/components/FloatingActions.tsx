'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ArrowUp, MessageCircle, X, GraduationCap } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setShowBackToTop(scrollPos > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

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
    const scrollingEl = document.scrollingElement || document.documentElement || document.body;
    if (scrollingEl) {
      try {
        scrollingEl.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {
        scrollingEl.scrollTop = 0;
      }
    }
  };

  const handleEnquiryClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (pathname === '/') {
      const el = document.getElementById('admission-form');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Tapovan Vatsalyadham School, I would like to enquire about Admissions for Academic Session 2027-28.'
  );

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none"
    >
      {/* 1. Floating Back to Top Button:
             Directly above the main button when closed;
             Horizontally centered with the 52px main button via mr-1.5 (6px);
             Pushes up smoothly above the speed dial when open */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`w-10 h-10 rounded-full bg-white text-[#1b3832] border border-[#dcd7cb] shadow-lg flex items-center justify-center hover:bg-[#1b3832] hover:text-[#dfc488] hover:border-[#1b3832] transition-all duration-300 active:scale-90 cursor-pointer mr-1.5 ${
          showBackToTop
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto mb-2.5'
            : 'opacity-0 scale-75 translate-y-2 pointer-events-none h-0 w-0 p-0 m-0 border-0 overflow-hidden'
        }`}
        title="Back to Top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* 2. Speed Dial Menu Options (Pop up between Back-to-Top and Main Button) */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? 'max-h-72 opacity-100 scale-100 pointer-events-auto mb-2.5 py-0.5'
            : 'max-h-0 opacity-0 scale-95 pointer-events-none mb-0 py-0 overflow-hidden'
        }`}
      >
        {/* Admission Enquiry Button */}
        <Link
          href="/#admission-form"
          onClick={handleEnquiryClick}
          className="group flex items-center gap-2.5 bg-white border border-[#dfc488] text-[#1b3832] hover:bg-[#1b3832] hover:text-white px-3.5 py-2 rounded-full shadow-lg transition-all duration-150 active:scale-95 cursor-pointer"
          aria-label="Admission Enquiry"
        >
          <span className="text-xs font-semibold whitespace-nowrap">Admission Enquiry</span>
          <span className="w-8 h-8 rounded-full bg-[#dfc488] text-[#1b3832] flex items-center justify-center shrink-0 shadow-xs">
            <GraduationCap className="w-4 h-4" />
          </span>
        </Link>

        {/* Call Helpline Button (Mobile ONLY) */}
        <a
          href="tel:+919737691800"
          onClick={() => setIsOpen(false)}
          className="md:hidden group flex items-center gap-2.5 bg-white border border-[#1b3832]/20 text-[#1b3832] hover:bg-[#1b3832] hover:text-white px-3.5 py-2 rounded-full shadow-lg transition-all duration-150 active:scale-95"
          aria-label="Call School Helpline"
        >
          <span className="text-xs font-semibold whitespace-nowrap">Call Helpline</span>
          <span className="w-8 h-8 rounded-full bg-[#1b3832] text-[#dfc488] flex items-center justify-center shrink-0 shadow-xs">
            <Phone className="w-4 h-4" />
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919737691800?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2.5 bg-white border border-[#25D366]/40 text-[#1b3832] hover:bg-[#25D366] hover:text-white px-3.5 py-2 rounded-full shadow-lg transition-all duration-150 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="text-xs font-semibold whitespace-nowrap">WhatsApp</span>
          <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
            <WhatsAppIcon className="w-4 h-4 fill-current" />
          </span>
        </a>
      </div>

      {/* 3. Main Single Floating Contact Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Contact Menu' : 'Open Contact Options'}
        className={`rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95 border-2 border-white cursor-pointer ${
          isOpen
            ? 'bg-[#1b3832] text-[#dfc488] shadow-2xl'
            : 'bg-[#1b3832] text-white hover:bg-[#244c44] hover:shadow-2xl'
        }`}
        style={{ width: '52px', height: '52px' }}
        title="Contact & Admissions"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <MessageCircle className="w-6 h-6 stroke-[2.2]" />
        )}
      </button>
    </div>
  );
}
