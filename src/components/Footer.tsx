import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  FileText,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#132824] text-slate-300 text-xs border-t border-[#233d38] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#233d38]">
          
          {/* Column 1: School Identity (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/images/cropped_logo.png"
                alt="Tapovan Vatsalyadham Crest"
                className="h-12 w-auto object-contain brightness-105"
              />
              <div>
                <h3 className="font-serif font-bold text-base text-white tracking-tight leading-tight">
                  TAPOVAN VATSALYADHAM
                </h3>
                <p className="text-[11px] font-medium text-[#dfc488] uppercase tracking-wider">
                  English Medium Boys Day School
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dedicated to academic excellence and ethical leadership under the philanthropic stewardship of <strong>Jivan Jagruti Trust</strong>. Fostering Bhakti, Maitri, Shuddhi, and Shaurya.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c29b38] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Tapovan Sanskar Pith, Near Tapovan Circle, Amiyapur, Gandhinagar, Gujarat 382424
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#c29b38] shrink-0" />
                <span>CBSE Affiliation No. <strong>430592</strong> • School Code: <strong>11722</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-[#dfc488] font-serif italic text-[11px]">
                <span>धर्मो रक्षति रक्षितः</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans border-b border-[#233d38] pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  About Our School
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  Academic Curriculum
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link href="/school-life" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  Daily Routine &amp; Timetable
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  Campus Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans border-b border-[#233d38] pb-2">
              Admissions Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Admissions open for Std 1 to 12 (Commerce Stream) for Academic Session 2027–28.
            </p>
            <div className="text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                <span>Helpline: <a href="tel:+919737691800" className="text-white font-semibold hover:underline">+91 9737691800</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                <span>Principal: <a href="tel:+919574523601" className="text-white font-semibold hover:underline">+91 9574523601</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                <span>Office: Mon–Sat 9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                <a href="mailto:vatsalyadham@gmail.com" className="text-slate-300 hover:text-white">vatsalyadham@gmail.com</a>
              </div>
            </div>
            <div className="pt-1">
              <Link
                href="/admissions#form-section"
                className="btn-accent w-full justify-center text-xs uppercase tracking-wider font-bold py-2 text-center whitespace-nowrap block"
              >
                Enquire Online 2027–28
              </Link>
            </div>
          </div>

          {/* Column 4: Important Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans border-b border-[#233d38] pb-2">
              Important Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/mandatory-disclosure" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c29b38] shrink-0" /> CBSE Mandatory Disclosure
                </Link>
              </li>
              <li>
                <a href="/assets/docs/fee-structure-2025-26.pdf" target="_blank" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#c29b38] shrink-0" /> Approved Fee Structure (2026–27)
                </a>
              </li>
              <li>
                <a href="/assets/docs/academic-calendar-2025-26.pdf" target="_blank" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#c29b38] shrink-0" /> Academic Calendar (2026–27)
                </a>
              </li>
              <li>
                <a href="/assets/docs/annual-holiday-list-2025-26.pdf" target="_blank" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#c29b38] shrink-0" /> Annual Holiday List (2026–27)
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#dfc488] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c29b38] shrink-0" /> Privacy Policy &amp; Data Protection
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/mandatory-disclosure" className="text-[#dfc488] hover:underline font-semibold inline-flex items-center gap-1 whitespace-nowrap">
                  View All 19 Public Documents <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tapovan Vatsalyadham School (English Medium). Managed by Jivan Jagruti Trust. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-slate-400">
            <Link href="/mandatory-disclosure" className="hover:text-white transition-colors">CBSE Disclosures</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Campus Hours</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">Governance &amp; Trust</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
