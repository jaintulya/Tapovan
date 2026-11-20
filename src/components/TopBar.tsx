import React from 'react';
import Link from 'next/link';
import { Award, MapPin, Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#071326] text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2">
        {/* Left Information */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-center md:text-left text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1.5 text-[#d4af37] font-medium">
            <Award className="w-3.5 h-3.5 shrink-0" /> CBSE Boys Day School (Affiliation #430592 • Code: 11722)
          </span>
          <span className="hidden lg:inline text-slate-600">•</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> Amiyapur, Gandhinagar 382424
          </span>
          <span className="hidden xl:inline text-slate-600">•</span>
          <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-400">
            Managed by Jivan Jagruti Trust
          </span>
        </div>

        {/* Right Contacts & CBSE Disclosures Link */}
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center text-[10px] sm:text-[11px]">
          <a
            href="tel:+919737691800"
            className="hover:text-[#d4af37] transition-colors inline-flex items-center gap-1 text-slate-300 font-medium whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> +91 9737691800
          </a>
          <a
            href="mailto:vatsalyadham@gmail.com"
            className="hidden md:inline-flex hover:text-[#d4af37] transition-colors items-center gap-1 text-slate-300 font-medium whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> vatsalyadham@gmail.com
          </a>
          <Link
            href="/mandatory-disclosure"
            className="hidden sm:inline-block text-[#d4af37] hover:text-white transition-colors border-l border-slate-700 pl-3 font-semibold uppercase tracking-wider text-[10px] whitespace-nowrap"
          >
            CBSE Disclosures &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
