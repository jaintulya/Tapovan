import React from 'react';
import Link from 'next/link';
import { Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#faf9f5]">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-block p-3 rounded-full bg-[#f2efe9] text-[#b8860b]">
          <span className="font-serif font-bold text-4xl sm:text-6xl text-[#0b1d3a]">404</span>
        </div>
        
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
          Page Not Found
        </h1>
        
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Please explore our main sections below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link href="/" className="btn-primary text-xs font-semibold py-2.5 px-6">
            <Home className="w-4 h-4 mr-1.5" /> Return to Homepage
          </Link>
          <Link href="/admissions" className="btn-accent text-xs font-semibold py-2.5 px-6">
            Admissions 2027-28
          </Link>
          <Link href="/contact" className="btn-outline text-xs font-semibold py-2.5 px-6">
            <Phone className="w-4 h-4 mr-1.5" /> Contact School Office
          </Link>
        </div>

        <div className="pt-8 border-t border-[#e5e1d8] text-xs text-slate-500">
          Tapovan Vatsalyadham School (English Medium) • Amiyapur, Gandhinagar
        </div>
      </div>
    </div>
  );
}
