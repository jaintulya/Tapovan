import React from 'react';
import { Megaphone, CalendarCheck, Award, FileText } from 'lucide-react';

export default function Ticker() {
  const items = [
    {
      icon: Megaphone,
      title: 'Admissions Open 2027-28:',
      text: 'Registrations invited for Nursery to Class 12 (Science & Commerce streams).',
    },
    {
      icon: CalendarCheck,
      title: 'Academic Calendar:',
      text: 'Annual Session 2027-28 & Holiday Schedule available online.',
    },
    {
      icon: Award,
      title: 'Academic Excellence:',
      text: '100% CBSE Board Pass Rate with disciplined STEM & Physical Education.',
    },
    {
      icon: FileText,
      title: 'CBSE Disclosures:',
      text: 'Updated Mandatory Public Disclosures available in the official portal.',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden ticker-wrap py-2 relative z-10 select-none">
      <div className="ticker-track">
        {/* First Instance */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={`t1-${idx}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-950 whitespace-nowrap">
                <Icon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <strong>{item.title}</strong> {item.text}
              </span>
            );
          })}
        </div>

        {/* Second Duplicate Instance Immediately Following (Seamless Loop, Zero Gap) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={`t2-${idx}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-950 whitespace-nowrap">
                <Icon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <strong>{item.title}</strong> {item.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
