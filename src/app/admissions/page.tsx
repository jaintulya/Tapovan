'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, Download, Send, CheckCircle, GraduationCap, Bus, ShieldCheck, Loader2 } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function AdmissionsPage() {
  // Fee Estimator State
  const [calcGrade, setCalcGrade] = useState('primary');
  const [calcType, setCalcType] = useState('standard');

  const feeData: Record<string, { standard: string; composite: string }> = {
    primary: {
      standard: '₹38,000 / annum',
      composite: '₹46,000 / annum (Tuition + Sports & Computer Lab)',
    },
    middle: {
      standard: '₹44,000 / annum',
      composite: '₹52,000 / annum (Tuition + Science & IT Labs)',
    },
    secondary: {
      standard: '₹48,000 / annum',
      composite: '₹58,000 / annum (Tuition + Board Practical Stations)',
    },
    sr_science: {
      standard: '₹56,000 / annum',
      composite: '₹68,000 / annum (Tuition + Advanced Physics/Chem/Bio/CS Labs)',
    },
    sr_commerce: {
      standard: '₹52,000 / annum',
      composite: '₹62,000 / annum (Tuition + Computer & Applied Labs)',
    },
  };

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

  const selectedFee = feeData[calcGrade]?.[calcType as 'standard' | 'composite'] || 'Contact Office';

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
            Welcome to Tapovan Vatsalyadham School (English Medium). We are accepting applications for Nursery up to Class 12 (Science &amp; Commerce) for the upcoming academic session.
          </p>
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="py-20 bg-white border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-editorial mb-3">Admission Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
              Simple 3-Step Enrollment Procedure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8]">
              <div className="w-10 h-10 rounded bg-[#d4af37] text-[#071326] font-bold flex items-center justify-center text-base mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Submit Online Enquiry</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fill out the quick online admission form below with basic student and contact details.
              </p>
              <a href="#form-section" className="text-xs font-bold text-[#966b0a] hover:underline">
                Go to Form &darr;
              </a>
            </div>

            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8]">
              <div className="w-10 h-10 rounded bg-[#071326] text-white font-bold flex items-center justify-center text-base mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Campus Tour &amp; Counseling</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Visit our Amiyapur campus, explore smart classrooms, laboratories, sports grounds, and meet the faculty.
              </p>
              <Link href="/contact" className="text-xs font-bold text-[#0b1d3a] hover:underline">
                Campus Location &amp; Hours &rarr;
              </Link>
            </div>

            <div className="bg-[#fbfbf9] rounded p-6 border border-[#e5e1d8]">
              <div className="w-10 h-10 rounded bg-emerald-700 text-white font-bold flex items-center justify-center text-base mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-[#0b1d3a] mb-2 font-serif">Verification &amp; Admission</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Submit basic documents (Birth Certificate, LC/TC, marksheet, Aadhar Card) and confirm your admission.
              </p>
              <a href="/assets/docs/fee-structure-2025-26.pdf" target="_blank" className="text-xs font-bold text-emerald-800 hover:underline">
                Download Official Fee Schedule &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fee Estimator Tool */}
      <section id="fee-structure" className="py-20 bg-[#fbfbf9] border-b border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded p-8 sm:p-12 border border-[#e5e1d8] shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="badge-editorial">
                <Calculator className="w-3.5 h-3.5 mr-1" /> Transparent Calculator
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
                Day School Fee Estimator (<span className="whitespace-nowrap">2027-28</span>)
              </h2>
              <p className="text-xs text-slate-500">
                Transparent fee structure approved by the School Management Committee.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#fbfbf9] p-6 rounded border border-[#e5e1d8]">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Student Grade:</label>
                <select 
                  value={calcGrade}
                  onChange={(e) => setCalcGrade(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326]"
                >
                  <option value="primary">Primary School (Grades 1 to 5)</option>
                  <option value="middle">Middle School (Grades 6 to 8)</option>
                  <option value="secondary">Secondary School (Grades 9 &amp; 10)</option>
                  <option value="sr_science">Senior Secondary - Science (XI &amp; XII)</option>
                  <option value="sr_commerce">Senior Secondary - Commerce (XI &amp; XII)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Fee Component:</label>
                <select 
                  value={calcType}
                  onChange={(e) => setCalcType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326]"
                >
                  <option value="standard">Standard Tuition &amp; Academic Fee</option>
                  <option value="composite">Composite Fee (Tuition + Science &amp; IT Labs + Sports)</option>
                </select>
              </div>
            </div>

            {/* Output Card */}
            <div className="mt-6 p-6 rounded bg-[#fcf8ee] border border-[#ebdcb8] text-center space-y-2">
              <div className="text-xs font-bold text-[#7a5907] uppercase tracking-wider">Estimated Annual Fee</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
                {selectedFee}
              </div>
              <p className="text-xs text-slate-600 max-w-xl mx-auto pt-1 leading-relaxed">
                Includes CBSE curriculum instruction, smart classroom sessions, library, physical education periods, and examinations.
              </p>
              <div className="pt-4">
                <a href="/assets/docs/fee-structure-2025-26.pdf" target="_blank" className="btn-accent text-xs py-2 px-5 font-bold inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Download className="w-3.5 h-3.5" /> Download Official Fee Structure PDF
                </a>
              </div>
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.studentName}
                    onChange={(e) => setForm({...form, studentName: e.target.value})}
                    placeholder="e.g. Manav Joshi"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name *</label>
                  <input 
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                  <input 
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Grade Seeking Admission *</label>
                  <select 
                    required
                    value={form.grade}
                    onChange={(e) => setForm({...form, grade: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white"
                  >
                    <option value="">Select Grade</option>
                    <option value="Pre-Primary (Nursery, LKG, UKG)">Pre-Primary (Nursery, LKG, UKG)</option>
                    <option value="Primary (Class 1 to 5)">Primary (Class 1 to 5)</option>
                    <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                    <option value="Secondary (Class 9 to 10)">Secondary (Class 9 to 10)</option>
                    <option value="Senior Secondary - Science (Class 11-12)">Senior Secondary - Science (Class 11-12)</option>
                    <option value="Senior Secondary - Commerce (Class 11-12)">Senior Secondary - Commerce (Class 11-12)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Residential Locality / Area</label>
                  <input 
                    type="text" 
                    value={form.area}
                    onChange={(e) => setForm({...form, area: e.target.value})}
                    placeholder="e.g. Chandkheda, Gandhinagar, Motera"
                    className="w-full px-3.5 py-2.5 rounded border border-[#d6d0c2] text-sm focus:outline-none focus:ring-1 focus:ring-[#071326] focus:border-[#071326] bg-white" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Any Specific Questions or Transportation Needs</label>
                <textarea 
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
