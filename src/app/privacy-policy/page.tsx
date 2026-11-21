import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Tapovan Vatsalyadham School (English Medium)',
  description: 'Privacy Policy and parent data protection guidelines for Tapovan Vatsalyadham School, Gandhinagar.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Privacy Policy</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            How Tapovan Vatsalyadham School collects, handles, and protects information submitted by prospective parents and visitors.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#faf9f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded border border-[#e5e1d8] p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
            
            <div>
              <span className="badge-editorial mb-2">Institutional Commitment</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1d3a] font-serif mt-1 mb-3">
                1. Overview &amp; Commitment to Parent Privacy
              </h2>
              <p>
                <strong>Tapovan Vatsalyadham School (English Medium)</strong>, managed by <strong>Jivan Jagruti Trust</strong>, is committed to respecting the privacy of students, parents, guardians, and website visitors. This Privacy Policy details how we collect, store, and utilize information provided via our online admission enquiry forms and website channels.
              </p>
            </div>

            <div className="border-t border-[#e5e1d8] pt-6">
              <h2 className="text-lg font-bold text-[#0b1d3a] font-serif mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#b8860b]" /> 2. Information We Collect
              </h2>
              <p className="mb-3">
                When you submit an admission enquiry form or reach out via our contact channels, we may collect the following necessary preliminary details:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Student&apos;s full name and grade seeking admission (Std 1 to 12 Commerce)</li>
                <li>Parent or legal guardian&apos;s full name</li>
                <li>Primary contact phone / WhatsApp number and email address</li>
                <li>Residential locality or city for assessing transportation and bus routes</li>
                <li>Voluntary queries or specific academic requirements noted in enquiry forms</li>
              </ul>
            </div>

            <div className="border-t border-[#e5e1d8] pt-6">
              <h2 className="text-lg font-bold text-[#0b1d3a] font-serif mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b8860b]" /> 3. How We Use Your Information
              </h2>
              <p className="mb-3">
                Information submitted on this website is strictly utilized for educational and institutional administrative purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>To contact prospective parents regarding admission procedures, age eligibility, and campus visit scheduling</li>
                <li>To provide accurate information regarding fee structure, bus routes, and academic documentation</li>
                <li>To maintain institutional enquiry records for the relevant academic session</li>
              </ul>
              <div className="mt-4 p-4 bg-[#fcf8ee] border border-[#ebdcb8] rounded text-[#8b6508] font-semibold">
                Strict Non-Disclosure Policy: We do not sell, rent, monetize, or disclose parent contact information to third-party marketing agencies, commercial coaching centers, or unauthorized entities.
              </div>
            </div>

            <div className="border-t border-[#e5e1d8] pt-6">
              <h2 className="text-lg font-bold text-[#0b1d3a] font-serif mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#b8860b]" /> 4. Data Security &amp; Retention
              </h2>
              <p>
                All enquiry form submissions are transmitted securely and accessed only by authorized school admissions staff and administrative personnel. Records of preliminary admission inquiries are retained solely for the active admission session cycle and are safely archived or purged thereafter.
              </p>
            </div>

            <div className="border-t border-[#e5e1d8] pt-6">
              <h2 className="text-lg font-bold text-[#0b1d3a] font-serif mb-3">
                5. Third-Party Links &amp; External Services
              </h2>
              <p>
                Our website provides links to external services including Google Maps for campus navigation, WhatsApp for direct messaging, and CBSE statutory portals. Once you navigate to these external services, their respective privacy policies govern your interactions.
              </p>
            </div>

            <div className="border-t border-[#e5e1d8] pt-6">
              <h2 className="text-lg font-bold text-[#0b1d3a] font-serif mb-3">
                6. Contact the School Office
              </h2>
              <p className="mb-4">
                If you have questions regarding this Privacy Policy or wish to modify or withdraw an submitted enquiry, please contact the administrative office:
              </p>
              <div className="p-4 bg-[#faf9f5] rounded border border-[#e5e1d8] space-y-2 text-xs">
                <p className="font-bold text-[#0b1d3a]">Tapovan Vatsalyadham School (English Medium)</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#b8860b] shrink-0" /> Tapovan Sanskar Pith, Near Tapovan Circle, Amiyapur, Gandhinagar, Gujarat 382424</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#0b1d3a] shrink-0" /> Admissions Helpline: +91 9737691800 | Office: +91 9574523601</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#0b1d3a] shrink-0" /> Email: vatsalyadham@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
