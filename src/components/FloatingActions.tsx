'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowUp, X, FileText, Send, CheckCircle2, Loader2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // Compact Quick Enquiry Form State
  const [form, setForm] = useState({
    studentName: '',
    phone: '',
    grade: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // Robust, Cross-Browser Scroll to Top (Works on Android Chrome, iOS Safari & Desktop)
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
    try {
      if (document.documentElement && document.documentElement.scrollTop > 0) {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      // fallback
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Tapovan Vatsalyadham School, I would like to enquire about Admissions for Session 2027-28.'
  );

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const sheetWebhookUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
      'https://script.google.com/macros/s/AKfycbxDG4fwav-ln39lp6gMZIk4WkEYxr-nGWFFPqqPbojAFUO8SzhwIyAs1JtdsTF8lwoXpw/exec';

    try {
      await fetch(sheetWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          studentName: form.studentName,
          parentName: 'Quick Popup Enquiry',
          phone: form.phone,
          grade: form.grade,
          notes: form.notes,
          source: 'Floating Quick Enquiry Popup',
        }),
      });

      fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: form.studentName,
          parentName: 'Quick Popup Enquiry',
          phone: form.phone,
          grade: form.grade,
          notes: form.notes,
        }),
      }).catch(() => {});

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const closeEnquiryPopup = () => {
    setEnquiryOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ studentName: '', phone: '', grade: '', notes: '' });
    }, 200);
  };

  return (
    <>
      {/* 1. Back to Top Button Directly Above WhatsApp Button (Bottom-RIGHT) */}
      <div
        className={`fixed bottom-[84px] right-4 sm:right-6 z-50 w-[54px] flex items-center justify-center transition-all duration-300 ${
          showBackToTop && !fabOpen && !enquiryOpen
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

      {/* 2. Floating Quick Enquiry Card Popup (Same Page Modal) */}
      {enquiryOpen && (
        <div
          className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[360px] z-50 bg-white rounded-xl border border-[#dcd7cb] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#071326] text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                Session 2027-28
              </div>
              <h3 className="font-serif font-bold text-sm leading-tight">
                Quick Admission Enquiry
              </h3>
            </div>
            <button
              type="button"
              onClick={closeEnquiryPopup}
              aria-label="Close Quick Enquiry"
              className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {submitted ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="font-serif font-bold text-[#0b1d3a] text-base">
                  Enquiry Received!
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you! Our admissions desk will call you on{' '}
                  <strong className="text-[#0b1d3a]">{form.phone}</strong> shortly.
                </p>
                <div className="pt-1 flex gap-2">
                  <a
                    href={`https://wa.me/919737691800?text=${encodeURIComponent(
                      `Hello Tapovan Vatsalyadham School, I just submitted an enquiry for ${form.studentName} (${form.grade || '2027-28'}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-2 px-3 rounded-md text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={closeEnquiryPopup}
                    className="flex-1 bg-[#0b1d3a] hover:bg-[#153262] text-white font-semibold py-2 px-3 rounded-md text-xs transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Student / Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.studentName}
                    onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#dcd7cb] bg-[#faf9f5] focus:bg-white focus:outline-none focus:border-[#0b1d3a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#dcd7cb] bg-[#faf9f5] focus:bg-white focus:outline-none focus:border-[#0b1d3a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Class Applying For *
                  </label>
                  <select
                    required
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#dcd7cb] bg-[#faf9f5] focus:bg-white focus:outline-none focus:border-[#0b1d3a]"
                  >
                    <option value="">Select Class / Wing</option>
                    <option value="Pre-Primary (Nursery, LKG, UKG)">Pre-Primary (Nursery, LKG, UKG)</option>
                    <option value="Primary (Class 1 to 5)">Primary (Class 1 to 5)</option>
                    <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                    <option value="Secondary (Class 9 & 10)">Secondary (Class 9 &amp; 10)</option>
                    <option value="Senior Secondary - Science (XI & XII)">Sr. Secondary - Science (XI &amp; XII)</option>
                    <option value="Senior Secondary - Commerce (XI & XII)">Sr. Secondary - Commerce (XI &amp; XII)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Message (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Fee query, campus visit, transport..."
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#dcd7cb] bg-[#faf9f5] focus:bg-white focus:outline-none focus:border-[#0b1d3a]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-accent justify-center py-2.5 text-xs font-bold uppercase tracking-wider disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. Single Floating Contact Trigger Button on Bottom-RIGHT */}
      <div
        ref={fabRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end"
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

          {/* 2. Quick Enquiry Popup */}
          <button
            type="button"
            onClick={() => {
              setFabOpen(false);
              setEnquiryOpen(true);
            }}
            className="flex items-center gap-2.5 bg-[#b8860b] hover:bg-[#9e7309] text-white py-2.5 px-4 rounded-full shadow-lg border border-amber-900/20 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <span className="text-xs font-semibold whitespace-nowrap">Enquiry Form</span>
            <FileText className="w-4 h-4 shrink-0" />
          </button>

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
          onClick={() => {
            if (enquiryOpen) {
              closeEnquiryPopup();
            } else {
              setFabOpen(!fabOpen);
            }
          }}
          aria-label={fabOpen || enquiryOpen ? 'Close quick actions' : 'Open WhatsApp and enquiry options'}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 border-2 active:scale-95 ${
            fabOpen || enquiryOpen
              ? 'bg-[#071326] border-[#d4af37]/60 text-white rotate-90'
              : 'bg-[#0b1d3a] border-[#d4af37] text-white hover:bg-[#153262]'
          }`}
          style={{ width: '54px', height: '54px' }}
        >
          {fabOpen || enquiryOpen ? (
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
