import React from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Clock, 
  Music, 
  GraduationCap, 
  Sparkles,
  CheckCircle,
  Calendar,
  Shield,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'School Life & Daily Timetable | Tapovan Vatsalyadham School',
  description: 'Daily routine, Monday to Saturday timetable, morning assembly, sports training, and four houses system at Tapovan Vatsalyadham School.',
};

export default function SchoolLifePage() {
  const dailySchedule = [
    { 
      time: '07:30 AM', 
      title: 'Campus Arrival & Student Reporting', 
      desc: 'Students report to campus with organized entry and faculty gate supervision.',
      tag: 'Morning Reporting'
    },
    { 
      time: '07:40 AM – 08:00 AM', 
      title: 'Morning Assembly, Prayers & Value Reflections', 
      desc: 'Disciplined morning assembly starting promptly at 7:40 AM: prayer, shlokas, news briefing, thought of the day, and national anthem.',
      tag: 'Morning Assembly'
    },
    { 
      time: '08:00 AM – 08:20 AM', 
      title: 'Period 1 (Opening Academic Session)', 
      desc: 'First core academic module in smart interactive classrooms while minds are fresh and alert.',
      tag: 'Academic Block 1'
    },
    { 
      time: '08:20 AM – 08:35 AM', 
      title: 'Short Recess (Healthy Refreshment Break)', 
      desc: '15-minute healthy snack and water break to recharge boys for intensive study.',
      tag: 'Short Recess'
    },
    { 
      time: '08:35 AM – 11:15 AM', 
      title: 'Academic & Laboratory Blocks (Periods 2 to 5)', 
      desc: 'Continuous core subject learning across English, Mathematics, Sciences, Social Sciences, Hindi, and Commerce coursework.',
      tag: 'Core Academics'
    },
    { 
      time: '11:15 AM – 11:45 AM', 
      title: 'Lunch Break & Peer Fellowship', 
      desc: 'Wholesome 30-minute lunch break encouraging healthy dietary habits, table etiquette, and camaraderie.',
      tag: 'Lunch Break'
    },
    { 
      time: '11:45 AM – 01:00 PM', 
      title: 'Applied Practicals & Advanced Modules (Periods 6 & 7)', 
      desc: 'Composite science practicals, computer lab sessions, library reference, and commerce problem-solving. Class 12 departs at 1:00 PM.',
      tag: 'Std 12 Dismissal 1:00 PM'
    },
    { 
      time: '01:00 PM – 01:40 PM', 
      title: 'Co-Curriculars, Sports Coaching & Dispersal', 
      desc: 'Period 8 dedicated to physical training, sports, clubs, and co-curricular activities. Classes 1 to 11 depart at 1:40 PM.',
      tag: 'Std 1–11 Dismissal 1:40 PM'
    },
  ];

  const fourHouses = [
    { name: 'Bhakti House', virtue: 'Devotion & Service', color: 'bg-[#fbf8f0] border-[#ebdbb4] text-[#856124]' },
    { name: 'Maitri House', virtue: 'Brotherhood & Fellowship', color: 'bg-[#f0f5f3] border-[#c4dbd5] text-[#233d38]' },
    { name: 'Shuddhi House', virtue: 'Purity & Moral Integrity', color: 'bg-[#f8f6f8] border-[#e3dae4] text-[#553f56]' },
    { name: 'Shaurya House', virtue: 'Courage & Athletic Fortitude', color: 'bg-[#fbf8f0] border-[#ebdbb4] text-[#856124]' },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-16 sm:py-20 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>School Life &amp; Routine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Daily School Life at Tapovan</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A balanced daily timetable combining disciplined morning assembly, smart classroom instruction, practical labs, physical sports, and cultural enrichment.
          </p>
        </div>
      </section>

      {/* Routine & Timetable */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Summary Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="badge-editorial">Daily Timetable</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif leading-tight">
                A Productive, Well-Structured Day (Monday – Saturday)
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our school schedule is designed to maximize morning focus, balancing intensive academic blocks with refreshing physical training, mindful assembly, and healthy breaks.
              </p>
              
              {/* Verified School Hours Summary Card */}
              <div className="p-6 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] space-y-3.5 shadow-sm">
                <h4 className="font-bold text-[#1b3832] text-sm flex items-center gap-2 font-serif">
                  <Clock className="w-4 h-4 text-[#c29b38]" /> Official School &amp; Office Hours
                </h4>
                <div className="text-xs text-slate-700 space-y-2">
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span className="text-slate-500">Morning Reporting:</span>
                    <strong className="text-[#1b3832]">7:30 AM (Assembly at 7:40 AM)</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span className="text-slate-500">Short Recess:</span>
                    <strong className="text-[#1b3832]">8:20 AM – 8:35 AM</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span className="text-slate-500">Lunch Break:</span>
                    <strong className="text-[#1b3832]">11:15 AM – 11:45 AM</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span className="text-slate-500">Std 1 to 11 Hours:</span>
                    <strong className="text-[#1b3832]">7:40 AM – 1:40 PM</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span className="text-slate-500">Std 12 Hours:</span>
                    <strong className="text-[#1b3832]">7:40 AM – 1:00 PM</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e1d8] pb-1.5">
                    <span className="text-slate-500">Working Days:</span>
                    <strong className="text-[#1b3832]">Monday to Saturday</strong>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-slate-500">Administrative Office:</span>
                    <strong className="text-[#856124]">9:00 AM – 4:00 PM</strong>
                  </div>
                </div>
              </div>

              {/* Photo Card */}
              <div className="rounded-xl overflow-hidden border border-[#e5e1d8] shadow-sm bg-slate-100">
                <img 
                  src="/assets/images/yoga_aerial.jpg" 
                  alt="Students practicing morning yoga assembly" 
                  loading="lazy"
                  className="w-full h-auto object-cover" 
                />
                <div className="p-3.5 bg-[#faf9f5] border-t border-[#e5e1d8] text-xs text-slate-600">
                  Daily Morning Assembly &amp; Yoga on the Green Grounds
                </div>
              </div>

              <div>
                <Link href="/admissions#form-section" className="btn-accent text-xs py-3 px-6 font-bold inline-flex items-center gap-2 whitespace-nowrap">
                  <GraduationCap className="w-4 h-4" /> Enquire for Admission (2027–28) &rarr;
                </Link>
              </div>
            </div>

            {/* Right Timetable Column */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                {dailySchedule.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-[#e5e1d8] bg-white hover:border-[#1b3832] transition-all shadow-sm"
                  >
                    <div className="shrink-0">
                      <span className="inline-flex items-center text-xs font-mono font-bold text-[#1b3832] bg-[#f0f5f3] border border-[#c4dbd5] px-3 py-1.5 rounded whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-serif font-bold text-[#1b3832] text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <span className="text-[10px] uppercase font-bold text-[#856124] bg-[#fbf8f0] px-2 py-0.5 rounded border border-[#ebdbb4] shrink-0">
                          {item.tag}
                        </span>
                      </div>
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

      {/* House System & Pillars of Student Life */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">House System &amp; Culture</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              Co-Curriculars, Houses &amp; Student Life
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Cultivating leadership, healthy competition, camaraderie, and team spirit through our four houses.
            </p>
          </div>

          {/* 4 Houses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {fourHouses.map((house, hIdx) => (
              <div key={hIdx} className={`p-6 rounded-xl border ${house.color} shadow-sm text-center flex flex-col justify-between`}>
                <div>
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-serif font-bold text-lg mb-1">{house.name}</h3>
                  <p className="text-xs font-semibold opacity-90">{house.virtue}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 text-[11px] font-medium">
                  Inter-House Sports &amp; Cultural Debates
                </div>
              </div>
            ))}
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e1d8]">
              <div className="w-12 h-12 rounded-lg bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] flex items-center justify-center text-xl mb-4 font-bold">
                <Trophy className="w-6 h-6 text-[#c29b38]" />
              </div>
              <h3 className="text-base font-bold text-[#1b3832] mb-2 font-serif">Sports &amp; Athletics</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Structured physical training in cricket, volleyball, football, badminton, track sprint races, and athletics to foster stamina and sportsmanship.
              </p>
              <div className="text-[11px] font-bold text-[#856124] bg-[#fbf8f0] p-2 rounded border border-[#ebdbb4]">
                Daily Guided Physical Education
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e1d8]">
              <div className="w-12 h-12 rounded-lg bg-[#f0f5f3] text-[#1b3832] border border-[#c4dbd5] flex items-center justify-center text-xl mb-4 font-bold">
                <Music className="w-6 h-6 text-[#1b3832]" />
              </div>
              <h3 className="text-base font-bold text-[#1b3832] mb-2 font-serif">Cultural Arts &amp; Debating</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Encouraging creative expression through Indian music, drama, public speaking, drawing, debating, elocution, and patriotic annual showcases.
              </p>
              <div className="text-[11px] font-bold text-[#1b3832] bg-[#f0f5f3] p-2 rounded border border-[#c4dbd5]">
                Weekly Activity &amp; Club Periods
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e1d8]">
              <div className="w-12 h-12 rounded-lg bg-[#f8f6f8] text-[#553f56] border border-[#e3dae4] flex items-center justify-center text-xl mb-4 font-bold">
                <Sparkles className="w-6 h-6 text-[#553f56]" />
              </div>
              <h3 className="text-base font-bold text-[#1b3832] mb-2 font-serif">Yoga &amp; Value-Based Living</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Daily yogic asanas, pranayama, Surya Namaskar, and value reflections instilling honesty, respect for elders, discipline, and emotional balance.
              </p>
              <div className="text-[11px] font-bold text-[#553f56] bg-[#f8f6f8] p-2 rounded border border-[#e3dae4]">
                Daily Morning Yogic Meditation
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
