import React from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Clock, 
  Music, 
  GraduationCap, 
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'School Life & Daily Routine | Tapovan Vatsalyadham School',
  description: 'Explore daily life at Tapovan Vatsalyadham: structured schedule, morning assembly, smart classes, sports coaching, and safe transportation.',
};

export default function SchoolLifePage() {
  const dailySchedule = [
    { time: '07:30 AM', title: 'Campus Arrival & Reporting', desc: 'Students report to campus with organized arrival and faculty gate supervision.' },
    { time: '07:40 AM', title: 'Morning Assembly & Vedic Chanting', desc: 'Morning assembly starts promptly at 7:40 AM with prayer, Vedic shlokas, news briefing, and national anthem.' },
    { time: '07:55 AM – 08:20 AM', title: 'Period 1 (Opening Academic Session)', desc: 'Focused morning instruction establishing core concepts in interactive smart classrooms.' },
    { time: '08:20 AM – 08:35 AM', title: 'Short Recess (Morning Refreshment)', desc: 'A healthy 15-minute recess to energize students for active academic immersion.' },
    { time: '08:35 AM – 11:15 AM', title: 'Intensive Academic & Practical Blocks', desc: 'Core subject modules across Mathematics, Languages, Sciences, Social Studies, and Commerce specialization.' },
    { time: '11:15 AM – 11:45 AM', title: 'Lunch Break & Peer Camaraderie', desc: 'Wholesome dining break fostering friendship, healthy eating habits, and mindful relaxation.' },
    { time: '11:45 AM – 01:00 PM', title: 'Applied Learning, Labs & Commerce Periods', desc: 'Advanced problem solving, computer labs, library research, and sports. Std 12 disperses at 1:00 PM.' },
    { time: '01:00 PM – 01:40 PM', title: 'Co-Curriculars & Dispersal (Std 1 to 11)', desc: 'Character-building clubs, student enrichment, and organized departure at 1:40 PM.' },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>School Life &amp; Routine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Daily School Life at Tapovan</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A balanced daily rhythm designed to foster academic rigor, physical health, and moral discipline.
          </p>
        </div>
      </section>

      {/* Routine Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="badge-editorial">Structured Day</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] font-serif">
                A Productive, Energizing Timetable
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our day school timetable balances intense academic learning with physical movement, creative arts, and moral reflection. This ensures that students remain energetic and engaged without fatigue.
              </p>
              
              <div className="p-5 bg-[#fbfbf9] rounded-xl border border-[#e5e1d8] space-y-3">
                <h4 className="font-bold text-[#071326] text-sm flex items-center gap-2 font-serif">
                  <Clock className="w-4 h-4 text-[#b8860b]" /> School Timings &amp; Routine
                </h4>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span>Morning Reporting:</span>
                    <strong className="text-[#071326]">7:30 AM (Assembly at 7:40 AM)</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span>Std 1 to 11:</span>
                    <strong className="text-[#071326]">7:40 AM – 1:40 PM</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span>Std 12:</span>
                    <strong className="text-[#071326]">7:40 AM – 1:00 PM</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span>Working Days:</span>
                    <strong className="text-[#071326]">Monday – Saturday</strong>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span>Administrative Office:</span>
                    <strong className="text-[#071326]">9:00 AM – 4:00 PM</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/admissions" className="btn-primary text-xs py-3 px-6 font-semibold inline-flex items-center gap-2 whitespace-nowrap">
                  <GraduationCap className="w-4 h-4" /> Apply for Admission <span className="whitespace-nowrap">2027-28</span> &rarr;
                </Link>
              </div>
            </div>

            {/* Timeline Column */}
            <div className="lg:col-span-7">
              <div className="space-y-3.5">
                {dailySchedule.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-[#e5e1d8] bg-white hover:border-[#071326] transition-all shadow-sm"
                  >
                    <div className="shrink-0">
                      <span className="inline-flex items-center text-xs font-mono font-bold text-[#071326] bg-[#f2efe9] border border-[#dcd7cb] px-3 py-1.5 rounded whitespace-nowrap shadow-xs">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-[#071326] text-sm sm:text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of Student Life */}
      <section className="py-16 bg-[#fbfbf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="badge-editorial">Beyond Textbooks</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] font-serif">
              Sports, Arts &amp; Student Well-being
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Education at Tapovan extends beyond classrooms into sports arenas, creative studios, and character-building activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Sports */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e5e1d8]">
              <div className="w-12 h-12 rounded bg-[#fdfaf2] text-[#8b6508] border border-[#ebdcb8] flex items-center justify-center text-xl mb-4 font-bold">
                <Trophy className="w-6 h-6 text-[#b8860b]" />
              </div>
              <h3 className="text-base font-bold text-[#071326] mb-2 font-serif">Sports &amp; Physical Fitness</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Structured physical training in cricket, volleyball, football, badminton, athletics, and yoga to build stamina, sportsmanship, and mental resilience.
              </p>
              <div className="text-[11px] font-bold text-[#8b6508] bg-[#fdfaf2] p-2 rounded border border-[#ebdcb8]">
                Daily Supervised Physical Education
              </div>
            </div>

            {/* 2. Co-Curricular */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e5e1d8]">
              <div className="w-12 h-12 rounded bg-[#f2efe9] text-[#071326] border border-[#dcd7cb] flex items-center justify-center text-xl mb-4 font-bold">
                <Music className="w-6 h-6 text-[#071326]" />
              </div>
              <h3 className="text-base font-bold text-[#071326] mb-2 font-serif">Music, Arts &amp; Culture</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Encouraging creative expression through Indian and Western music, drama, drawing, debating, elocution, and patriotic cultural festivals.
              </p>
              <div className="text-[11px] font-bold text-[#071326] bg-[#f2efe9] p-2 rounded border border-[#dcd7cb]">
                Weekly Activity &amp; Club Sessions
              </div>
            </div>

            {/* 3. Mindful Living & Yoga */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e5e1d8]">
              <div className="w-12 h-12 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center text-xl mb-4 font-bold">
                <Sparkles className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-base font-bold text-[#071326] mb-2 font-serif">Yoga, Values &amp; Mindfulness</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Daily yogic asanas, pranayama, Vedic shlokas, and moral assemblies inculcating selfless service, honesty, dynamic patriotism, and mental clarity.
              </p>
              <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                Daily Morning Yogic Meditation
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
