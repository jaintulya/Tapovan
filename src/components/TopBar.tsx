import React from 'react';
import Link from 'next/link';
import { Award, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#132824] text-slate-300 text-xs py-1.5 px-4 border-b border-[#233d38] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Essential Institutional Identifiers */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1.5 text-[#dfc488] font-medium">
            <Award className="w-3.5 h-3.5 shrink-0 text-[#c29b38]" /> CBSE Affiliated Boys Day School • Affiliation #430592 • Code: 11722
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-[#dfc488] shrink-0" /> Amiyapur, Gandhinagar
          </span>
        </div>

        {/* Right: Direct Admissions Helpline & Statutory Link */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
          <a
            href="tel:+919737691800"
            className="hover:text-[#dfc488] transition-colors inline-flex items-center gap-1 text-slate-200 font-medium whitespace-nowrap"
            aria-label="Call Admissions Helpline at +91 9737691800"
          >
            <Phone className="w-3 h-3 text-[#c29b38] shrink-0" />
            <span className="hidden sm:inline">Admissions: </span>+91 9737691800
          </a>
          <Link
            href="/mandatory-disclosure"
            className="hidden sm:inline-flex items-center gap-1 text-[#dfc488] hover:text-white transition-colors border-l border-[#2f514b] pl-3 font-semibold text-[10px] uppercase tracking-wider whitespace-nowrap"
          >
            <span>CBSE Disclosures</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
