'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function AdmissionsPage() {
  // Form State
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    area: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setSubmitError('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    const sheetWebhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbxDG4fwav-ln39lp6gMZIk4WkEYxr-nGWFFPqqPbojAFUO8SzhwIyAs1JtdsTF8lwoXpw/exec';

    try {
      // 1. Direct submit to Google Sheet Webhook if configured by client
      if (sheetWebhookUrl) {
        await fetch(sheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            ...form,
            source: 'Admissions Page Form'
          })
        });
      }

      // 2. Also log to local API if available
      fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      }).catch(() => {});

      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Admissions <span className="whitespace-nowrap">2027-28</span></span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
            Admissions &amp; Fee Guidelines (<span className="whitespace-nowrap">2027-28</span>)
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Welcome to Tapovan Vatsalyadham School (English Medium). We are accepting admission applications for Class 1 up to Class 12 (Commerce Stream) — CBSE Boys Day School — for Academic Session 2027–28.
          </p>
        </div>
      </section>

      {/* 4 Step Process */}
      <section className="py-20 bg-white border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-editorial mb-3">Admission Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
              Simple 4-Step Enrollment Procedure
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Class 1 Age Eligibility: Minimum 6+ years on or before 31st March of the admission year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#d4af37] text-[#071326] font-bold flex items-center justify-center text-base mb-4">
                  1
                </div>
                <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Online Enquiry</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Fill out the quick online enquiry form below with student and parent details.
                </p>
              </div>
              <a href="#form-section" className="text-xs font-bold text-[#966b0a] hover:underline">
                Go to Form &darr;
              </a>
            </div>

            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#071326] text-white font-bold flex items-center justify-center text-base mb-4">
                  2
                </div>
                <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Campus Visit</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Visit our campus at Tapovan Sanskar Pith, Amiyapur to inspect smart classrooms and sports facilities.
                </p>
              </div>
              <Link href="/contact" className="text-xs font-bold text-[#0b1d3a] hover:underline">
                Location &amp; Hours &rarr;
              </Link>
            </div>

            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#b8860b] text-white font-bold flex items-center justify-center text-base mb-4">
                  3
                </div>
                <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Counsellor Interaction</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  One-on-one interaction with the admission counsellor to understand student goals, strengths, and curriculum fit.
                </p>
              </div>
              <span className="text-[11px] text-[#8b6508] font-bold">Academic Orientation</span>
            </div>

            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-emerald-700 text-white font-bold flex items-center justify-center text-base mb-4">
                  4
                </div>
                <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Document Submission</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Submit Birth Certificate, Student &amp; Parents&apos; Aadhaar, School Leaving Certificate / TC, previous report card, and photographs.
                </p>
              </div>
              <span className="text-[11px] text-emerald-800 font-bold">Office Fee Enquiry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form */}
      <section id="form-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fbfbf9] rounded p-8 sm:p-12 border border-[#e5e1d8] shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="badge-editorial">Online Registration</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
                Admission Enquiry Form
              </h2>
              <p className="text-xs text-slate-500">
                Academic Session <span className="whitespace-nowrap font-bold text-[#0b1d3a]">2027-28</span> • CBSE Affiliated Senior Secondary School
              </p>
            </div>

            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-xs text-red-700 font-medium mb-4">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adm-studentName" className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                  <input 
                    id="adm-studentName"
                    type="text" 
                    required 
                    value={form.studentName}
                    onChange={(e) => setForm({...form, studentName: e.target.value})}
                    placeholder="e.g. Manav Joshi"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
                <div>
                  <label htmlFor="adm-parentName" className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name *</label>
                  <input 
                    id="adm-parentName"
                    type="text" 
                    required 
                    value={form.parentName}
                    onChange={(e) => setForm({...form, parentName: e.target.value})}
                    placeholder="e.g. Prakash Joshi"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adm-phone" className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input 
                    id="adm-phone"
                    type="tel" 
                    required 
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
                <div>
                  <label htmlFor="adm-email" className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                  <input 
                    id="adm-email"
                    type="email" 
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="parent@example.com"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adm-grade" className="block text-xs font-bold text-slate-700 mb-1">Grade Seeking Admission *</label>
                  <select 
                    id="adm-grade"
                    required
                    value={form.grade}
                    onChange={(e) => setForm({...form, grade: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white"
                  >
                    <option value="">Select Grade</option>
                    <option value="Primary (Class 1 to 5) — Min Age 6+">Primary (Class 1 to 5) — Min Age 6+</option>
                    <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                    <option value="Secondary (Class 9 & 10)">Secondary (Class 9 &amp; 10)</option>
                    <option value="Senior Secondary - Commerce (XI & XII)">Senior Secondary - Commerce (XI &amp; XII)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="adm-area" className="block text-xs font-bold text-slate-700 mb-1">Residential Locality / Area</label>
                  <input 
                    id="adm-area"
                    type="text" 
                    value={form.area}
                    onChange={(e) => setForm({...form, area: e.target.value})}
                    placeholder="e.g. Chandkheda, Gandhinagar, Motera"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="adm-notes" className="block text-xs font-bold text-slate-700 mb-1">Any Specific Questions or Transportation Needs</label>
                <textarea 
                  id="adm-notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({...form, notes: e.target.value})}
                  placeholder="Mention any queries regarding bus routes, curriculum, or previous schooling..."
                  className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-accent justify-center text-sm py-3.5 font-bold uppercase tracking-wider disabled:opacity-50 whitespace-nowrap inline-flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Submit Admission Enquiry (<span className="whitespace-nowrap">2027-28</span>)</span>
                  </>
                )}
              </button>
            </form>

            {/* Clean Confirmation Modal (No unique code) */}
            {isSubmitted && (
              <div className="fixed inset-0 z-50 bg-[#071326]/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded max-w-md w-full p-6 sm:p-8 shadow-2xl text-center space-y-4 border border-[#e5e1d8]">
                  <div className="w-14 h-14 rounded-full bg-[#fcf8ee] text-[#d4af37] border border-[#ebdcb8] flex items-center justify-center mx-auto text-3xl">
                    <CheckCircle className="w-8 h-8 text-[#071326]" />
                  </div>
                  <h3 className="font-bold text-[#0b1d3a] text-xl font-serif">Enquiry Submitted Successfully</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong>{form.parentName || 'Parent'}</strong>! We have received your admission enquiry for <strong>{form.studentName || 'your child'}</strong> for Session 2027-28. Our admissions team will reach out to you at <strong>{form.phone}</strong> shortly.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a 
                      href={`https://wa.me/919737691800?text=${encodeURIComponent(`Hello Tapovan School, I have submitted an admission enquiry for ${form.studentName || 'my child'} for class ${form.grade || '2027-28'}.`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-4 rounded text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" /> Message on WhatsApp
                    </a>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setForm({ studentName: '', parentName: '', phone: '', email: '', grade: '', area: '', notes: '' });
                      }} 
                      className="btn-primary flex-1 justify-center text-xs py-2.5 whitespace-nowrap"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
