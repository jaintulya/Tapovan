'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'admissions',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
            source: 'Contact Page Message'
          })
        });
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      }).catch(() => {});

      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', department: 'admissions', message: '' });
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Contact Administration</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Whether you have questions regarding admissions 2027-28, bus transport, or wish to schedule a campus tour, our administrative team is at your service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="badge-editorial">Institutional Directory</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif leading-tight">
                Tapovan Vatsalyadham School (English Medium)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Conveniently situated along the Sabarmati-Gandhinagar Highway in Amiyapur, with swift connectivity from both Gandhinagar and Ahmedabad.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#faf9f5] rounded border border-[#e5e1d8] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#fcf8ee] text-[#8b6508] border border-[#ebdcb8] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-[#0b1d3a] text-sm mb-1">Campus Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Tapovan Sanskar Pith, Amiyapur, Post - Sughad,<br />
                      Sabarmati-Gandhinagar Highway, Taluka Chandkheda,<br />
                      District Gandhinagar, Gujarat - 382424, India
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded border border-[#e5e1d8] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#edf2f9] text-[#0b1d3a] border border-[#d0dceb] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-[#0b1d3a] text-sm mb-0.5">Admissions Helpline</h4>
                    <p className="text-slate-600">
                      Direct: <a href="tel:+919737691800" className="text-[#0b1d3a] font-bold hover:underline">+91 9737691800</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#f0fdf4] rounded border border-emerald-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-emerald-950 text-sm mb-0.5">Official WhatsApp</h4>
                    <p className="text-emerald-800">
                      Chat: <a href="https://wa.me/919737691800?text=Hello%20Tapovan%20Vatsalyadham%20School,%20I%20would%20like%20to%20enquire%20about%20Admissions%20for%20Session%202027-28." target="_blank" rel="noopener noreferrer" className="text-emerald-900 font-bold hover:underline">+91 9737691800</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded border border-[#e5e1d8] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#edf2f9] text-[#0b1d3a] border border-[#d0dceb] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-[#0b1d3a] text-sm mb-0.5">Principal Office</h4>
                    <p className="text-slate-600">
                      Direct: <a href="tel:+919574523601" className="text-[#0b1d3a] font-bold hover:underline">+91 9574523601</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded border border-[#e5e1d8] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#edf2f9] text-[#0b1d3a] border border-[#d0dceb] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-[#0b1d3a] text-sm mb-0.5">Official Email</h4>
                    <p className="text-slate-600">
                      <a href="mailto:vatsalyadham@gmail.com" className="text-[#0b1d3a] font-bold hover:underline">vatsalyadham@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded border border-[#e5e1d8] text-xs text-slate-600">
                  <div className="font-bold text-[#0b1d3a] flex items-center gap-1.5 mb-1">
                    <Clock className="w-4 h-4 text-[#8b6508]" /> Office Visiting Hours
                  </div>
                  <div>Monday to Saturday: 9:00 AM – 4:00 PM (Prior appointment recommended)</div>
                </div>
              </div>
            </div>

            {/* Form and Map */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-[#faf9f5] rounded border border-[#e5e1d8] p-6 sm:p-8 shadow-sm">
                <h3 className="font-bold text-[#0b1d3a] text-lg font-serif mb-1">Send A Direct Communication</h3>
                <p className="text-xs text-slate-500 mb-6">Our administrative desk will reply via phone or email promptly.</p>

                {submitted && (
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded border border-emerald-200 text-xs font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Thank you! Your message has been received by the Tapovan Vatsalyadham administration.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a]" 
                        placeholder="e.g. Aniket Sharma" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a]" 
                        placeholder="name@example.com" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a]" 
                        placeholder="10-digit mobile number" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject Department</label>
                      <select 
                        value={form.department}
                        onChange={(e) => setForm({...form, department: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a]"
                      >
                        <option value="admissions">Admission Inquiries (2027-28)</option>
                        <option value="academics">Curriculum &amp; CBSE Query</option>
                        <option value="transport">Bus Transportation</option>
                        <option value="admin">General Administration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Inquiry *</label>
                    <textarea 
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      placeholder="Please specify your query..." 
                      className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a]"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full btn-primary justify-center text-xs py-3 font-semibold uppercase tracking-wider disabled:opacity-50 whitespace-nowrap flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Send Official Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Embedded Map */}
              <div className="rounded border border-[#e5e1d8] overflow-hidden shadow-sm h-72 bg-slate-200">
                <iframe 
                  title="Campus Map Location"
                  src="https://maps.google.com/maps?q=Tapovan%20Sanskar%20Pith%20Amiyapur%20Gandhinagar&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
