'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

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
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    const scrollingEl = document.scrollingElement || document.documentElement || document.body;
    if (scrollingEl) {
      try {
        scrollingEl.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {
        scrollingEl.scrollTop = 0;
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Tapovan Vatsalyadham School, I would like to enquire about Admissions for Academic Session 2027-28.'
  );

  return (
    <>
      {/* 1. Desktop Floating WhatsApp Button & Back-To-Top (Visible on md and above) */}
      <div className="hidden md:flex flex-col items-end gap-3 fixed bottom-6 right-6 z-50 select-none">
        {/* Desktop Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className={`w-11 h-11 rounded-full bg-white text-[#1b3832] border border-[#dcd7cb] shadow-lg flex items-center justify-center hover:bg-[#1b3832] hover:text-[#dfc488] hover:border-[#1b3832] transition-all duration-200 active:scale-95 cursor-pointer ${
            showBackToTop
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Desktop WhatsApp Circular FAB */}
        <a
          href={`https://wa.me/919737691800?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Admissions Office on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all duration-200 active:scale-95 border-2 border-white"
          style={{ width: '52px', height: '52px' }}
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 fill-current" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1b3832] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap">
            Chat with Admissions
          </span>
        </a>
      </div>

      {/* 2. Mobile Floating Back to Top Button (Sits above the mobile bar) */}
      <div
        className={`md:hidden fixed bottom-[72px] right-4 z-40 transition-all duration-200 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-2 pointer-events-none scale-75'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-10 h-10 rounded-full bg-white text-[#1b3832] border border-[#dcd7cb] shadow-md flex items-center justify-center active:scale-90"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* 3. Mobile Fixed Bottom Action Bar (Call + WhatsApp) */}
      <aside
        aria-label="Quick Contact Actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e5e1d8] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center gap-2"
      >
        <a
          href="tel:+919737691800"
          className="flex-1 bg-[#1b3832] hover:bg-[#285149] text-white font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
          aria-label="Call Helpline"
        >
          <Phone className="w-4 h-4 shrink-0 text-[#dfc488]" />
          <span>Call Helpline</span>
        </a>

        <a
          href={`https://wa.me/919737691800?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
