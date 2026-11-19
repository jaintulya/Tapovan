import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071326] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <img 
                src="/assets/images/cropped_logo.png" 
                alt="Tapovan Crest" 
                className="h-12 w-auto bg-white p-1 rounded-sm shadow-sm" 
              />
              <div>
                <div className="text-white font-serif font-bold text-lg tracking-tight">TAPOVAN VATSALYADHAM</div>
                <div className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider">English Medium Day School</div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A premier senior secondary English medium institution affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Dedicated to cultivating intellectual depth, moral integrity, and social responsibility under the aegis of Jivan Jagruti Trust.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Tapovan Sanskar Pith, Amiyapur, Post - Sughad, Sabarmati-Gandhinagar Highway, Gandhinagar - 382424</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>CBSE Affiliated Senior Secondary (English Medium)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans border-b border-slate-800 pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" prefetch={true} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" prefetch={true} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#vision" prefetch={true} className="hover:text-white transition-colors">Our Vision &amp; Mission</Link></li>
              <li><Link href="/facilities" prefetch={true} className="hover:text-white transition-colors">Infrastructure &amp; Facilities</Link></li>
              <li><Link href="/academics" prefetch={true} className="hover:text-white transition-colors">Academics &amp; Curriculum</Link></li>
              <li><Link href="/school-life" prefetch={true} className="hover:text-white transition-colors">Campus Life &amp; Routine</Link></li>
              <li><Link href="/gallery" prefetch={true} className="hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" prefetch={true} className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: CBSE Statutory Compliance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans border-b border-slate-800 pb-2">
              CBSE Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/assets/docs/cbse-affiliation-certificate.pdf" target="_blank" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> CBSE Affiliation Certificate
                </a>
              </li>
              <li>
                <a href="/assets/docs/grant-letter.pdf" target="_blank" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> CBSE Grant Letter
                </a>
              </li>
              <li>
                <a href="/assets/docs/mandatory-disclosure-2025-26.pdf" target="_blank" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> Mandatory Public Disclosure
                </a>
              </li>
              <li>
                <a href="/assets/docs/fee-structure-2025-26.pdf" target="_blank" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> Approved Fee Structure (2027-28)
                </a>
              </li>
              <li>
                <a href="/assets/docs/academic-calendar-2025-26.pdf" target="_blank" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> Academic Calendar (2027-28)
                </a>
              </li>
              <li className="pt-1">
                <Link href="/mandatory-disclosure" className="text-[#d4af37] hover:underline font-semibold inline-flex items-center gap-1 whitespace-nowrap">
                  View All 19 Public Documents <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions & Office Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans border-b border-slate-800 pb-2">
              Admissions Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Admissions open for Nursery to Class 12 (Science &amp; Commerce) for Academic Session 2027-28.
            </p>
            <div className="text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Office: <a href="tel:+919737691800" className="text-white font-semibold hover:underline">+91 9737691800</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Principal: <a href="tel:+919574523601" className="text-white font-semibold hover:underline">+91 9574523601</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="mailto:vatsalyadham@gmail.com" className="text-slate-300 hover:text-white">vatsalyadham@gmail.com</a>
              </div>
            </div>
            <div className="pt-2">
              <Link 
                href="/admissions" 
                className="btn-accent w-full justify-center text-xs uppercase tracking-wider font-bold py-2.5 text-center whitespace-nowrap block"
              >
                Apply Online 2027-28
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tapovan Vatsalyadham School (English Medium). Managed by Jivan Jagruti Trust. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/mandatory-disclosure" className="hover:text-slate-300 transition-colors">CBSE Disclosures</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Campus Hours</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">Governance &amp; Trust</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
