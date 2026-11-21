'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, ArrowRight, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function ContactPage() {
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    area: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      setLoading(false);
      return;
    }

    const sheetWebhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbxDG4fwav-ln39lp6gMZIk4WkEYxr-nGWFFPqqPbojAFUO8SzhwIyAs1JtdsTF8lwoXpw/exec';

    try {
      if (sheetWebhookUrl) {
        await fetch(sheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            ...form,
            source: 'Contact Page Form'
          })
        });
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      }).catch(() => {});

      setSubmitted(true);
      setForm({
        studentName: '',
        parentName: '',
        phone: '',
        email: '',
        grade: '',
        area: '',
        message: ''
      });
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-14 sm:py-18 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Contact School Office</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Reach out regarding admissions for Session 2027–28, curriculum details, or to schedule a campus visit with our admissions team.
          </p>
        </div>
      </section>

      {/* Main Content: Perfectly Aligned 2-Column Layout */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Introduction */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="badge-editorial">Institutional Helpdesk</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif leading-tight mt-2">
              Tapovan Vatsalyadham School (English Medium)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
              Located near Tapovan Circle in Amiyapur, Gandhinagar. Easily accessible from both Gandhinagar and Ahmedabad via SP Ring Road and SG Highway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Direct Institutional Helpdesk Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Campus Address Card */}
              <div className="p-4 sm:p-5 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs flex-1">
                  <h3 className="font-bold text-[#1b3832] text-sm mb-1 font-serif">Campus Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tapovan Sanskar Pith, Near Tapovan Circle,<br />
                    Amiyapur, Gandhinagar, Gujarat 382424
                  </p>
                  <a
                    href="https://maps.app.goo.gl/rvkxjZTvtcjEL9YS8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#856124] font-bold hover:underline inline-flex items-center gap-1 mt-2 text-xs"
                  >
                    Open in Google Maps <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Admissions Helpline */}
              <div className="p-4 sm:p-5 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#f0f5f3] text-[#1b3832] border border-[#c4dbd5] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs flex-1">
                  <h3 className="font-bold text-[#1b3832] text-sm mb-0.5 font-serif">Admissions Helpline</h3>
                  <p className="text-slate-500 text-[11px] mb-1">Direct inquiries &amp; campus visit scheduling</p>
                  <a href="tel:+919737691800" className="text-[#1b3832] font-bold hover:underline text-sm">
                    +91 9737691800
                  </a>
                </div>
              </div>

              {/* Official WhatsApp */}
              <div className="p-4 sm:p-5 bg-[#f0fdf4] rounded-xl border border-emerald-200 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </div>
                <div className="text-xs flex-1">
                  <h3 className="font-bold text-emerald-950 text-sm mb-0.5 font-serif">Official WhatsApp</h3>
                  <p className="text-emerald-700 text-[11px] mb-1">Fast answers regarding criteria &amp; admission details</p>
                  <a
                    href="https://wa.me/919737691800?text=Hello%20Tapovan%20Vatsalyadham%20School,%20I%20would%20like%20to%20enquire%20about%20Admissions%20for%20Session%202027-28."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-900 font-bold hover:underline text-sm inline-flex items-center gap-1"
                  >
                    Chat on WhatsApp (+91 9737691800) <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Principal Office */}
              <div className="p-4 sm:p-5 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f8] text-[#553f56] border border-[#e3dae4] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs flex-1">
                  <h3 className="font-bold text-[#1b3832] text-sm mb-0.5 font-serif">Principal&apos;s Office</h3>
                  <p className="text-slate-500 text-[11px] mb-1">Mrs. Rupa Chirag Shah (M.Sc., M.Ed.)</p>
                  <a href="tel:+919574523601" className="text-[#1b3832] font-bold hover:underline text-sm">
                    +91 9574523601
                  </a>
                </div>
              </div>

              {/* Visiting Hours & Email */}
              <div className="p-4 sm:p-5 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] space-y-2.5 text-xs text-slate-700 shadow-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c29b38] shrink-0" />
                  <span><strong>Office Hours:</strong> Monday – Saturday, 9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c29b38] shrink-0" />
                  <span><strong>Official Email:</strong> <a href="mailto:vatsalyadham@gmail.com" className="text-[#1b3832] font-semibold hover:underline">vatsalyadham@gmail.com</a></span>
                </div>
              </div>
            </div>

            {/* Right: Clean Form Aligned with Enquiry Tabs */}
            <div className="lg:col-span-7">
              <div className="bg-[#faf9f5] rounded-2xl border border-[#e5e1d8] p-6 sm:p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-[#1b3832] text-xl sm:text-2xl font-serif">
                    Send a Message to School Office
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your contact details and message. Our admissions counselor will respond within working hours.
                  </p>
                </div>

                {submitted && (
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold mb-5 flex items-center gap-2 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Thank you! Your communication has been received. Our office will reach out to you shortly.</span>
                  </div>
                )}

                {error && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-xs font-semibold mb-4 text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Student Name & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-student" className="block text-xs font-bold text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        id="ct-student"
                        type="text"
                        required
                        value={form.studentName}
                        onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                        placeholder="e.g. Aarav Patel"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-parent" className="block text-xs font-bold text-slate-700 mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        id="ct-parent"
                        type="text"
                        required
                        value={form.parentName}
                        onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                        placeholder="e.g. Ramesh Patel"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="ct-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        id="ct-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                        placeholder="parent@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 3: Class Seeking Admission & Locality (Exact Enquiry Tabs) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-grade" className="block text-xs font-bold text-slate-700 mb-1">
                        Class Seeking Admission *
                      </label>
                      <select
                        id="ct-grade"
                        required
                        value={form.grade}
                        onChange={(e) => setForm({ ...form, grade: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                      >
                        <option value="">Select Class</option>
                        <option value="Primary (Class 1 to 5) — Min Age 6+">Primary (Class 1 to 5) — Min Age 6+</option>
                        <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                        <option value="Secondary (Class 9 & 10)">Secondary (Class 9 &amp; 10)</option>
                        <option value="Senior Secondary - Commerce (XI & XII)">Senior Secondary - Commerce (XI &amp; XII)</option>
                        <option value="General Office / Campus Visit Inquiry">General Office / Campus Visit Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="ct-area" className="block text-xs font-bold text-slate-700 mb-1">
                        Residential Locality / City
                      </label>
                      <input
                        id="ct-area"
                        type="text"
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        placeholder="e.g. Gandhinagar, Chandkheda, Motera"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message or Inquiry */}
                  <div>
                    <label htmlFor="ct-message" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Inquiry *
                    </label>
                    <textarea
                      id="ct-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please mention your question, admission query, or preferred date for a campus visit..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-accent justify-center text-xs py-3.5 font-bold uppercase tracking-wider disabled:opacity-50 whitespace-nowrap flex items-center gap-2 shadow-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Send Message to School Office</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Campus Location Map & Visiting Hours Section (Full Width, Perfectly Balanced) */}
      <section className="py-16 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#e5e1d8] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            
            {/* Map Info Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#faf9f5] border-b lg:border-b-0 lg:border-r border-[#e5e1d8] space-y-6">
              <div>
                <span className="badge-editorial">Campus Location</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1b3832] mt-2">
                  Campus Location &amp; Visiting Hours
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                  Located near Tapovan Circle, Amiyapur. Parents and guardians are welcome to visit for guided admissions walkthroughs.
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 bg-white rounded-lg border border-[#e5e1d8]">
                  <strong>Visiting Hours:</strong> Monday to Saturday, 9:00 AM – 4:00 PM
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#e5e1d8]">
                  <strong>Landmark:</strong> Near Tapovan Circle, Amiyapur, Gandhinagar
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/rvkxjZTvtcjEL9YS8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 justify-center inline-flex items-center gap-2"
              >
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7 h-80 sm:h-96 lg:h-auto min-h-[340px] bg-slate-200">
              <iframe
                title="Tapovan Vatsalyadham Campus Map"
                src="https://maps.google.com/maps?q=Tapovan%20Sanskar%20Pith%20Amiyapur%20Gandhinagar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
