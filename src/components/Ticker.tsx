'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Pause, Play } from 'lucide-react';

export default function Ticker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full max-w-full overflow-hidden ticker-wrap py-2 border-b border-[#e5e1d8] bg-[#fbf8f0] relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Ticker Track */}
        <div className="flex-1 overflow-hidden relative">
          <div className={`ticker-track ${isPaused ? 'paused' : ''}`}>
            {/* Instance 1 */}
            <div className="flex items-center gap-10 shrink-0 pr-10">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-800 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                <strong className="text-[#1b3832] font-bold">Admissions 2027–28 Open:</strong>
                <span>Applications invited for Std 1 to 12 (Commerce Stream) — CBSE Boys Day School.</span>
                <Link
                  href="/admissions#form-section"
                  className="font-bold text-[#856124] hover:text-[#1b3832] underline underline-offset-2 ml-1 inline-flex items-center gap-0.5"
                >
                  Enquire Online <ArrowRight className="w-3 h-3" />
                </Link>
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs text-slate-700 whitespace-nowrap">
                Campus Visits: Monday to Saturday, 9:00 AM – 4:00 PM
              </span>
            </div>

            {/* Instance 2 (Duplicate for Seamless Loop) */}
            <div className="flex items-center gap-10 shrink-0 pr-10" aria-hidden="true">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-800 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                <strong className="text-[#1b3832] font-bold">Admissions 2027–28 Open:</strong>
                <span>Applications invited for Std 1 to 12 (Commerce Stream) — CBSE Boys Day School.</span>
                <Link
                  href="/admissions#form-section"
                  tabIndex={-1}
                  className="font-bold text-[#856124] hover:text-[#1b3832] underline underline-offset-2 ml-1 inline-flex items-center gap-0.5"
                >
                  Enquire Online <ArrowRight className="w-3 h-3" />
                </Link>
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs text-slate-700 whitespace-nowrap">
                Campus Visits: Monday to Saturday, 9:00 AM – 4:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Pause / Play Control */}
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Resume ticker animation' : 'Pause ticker animation'}
          className="shrink-0 p-1 rounded hover:bg-[#ede6d4] text-slate-600 transition-colors"
          title={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
