import React from 'react';
import Link from 'next/link';
import { Calendar, BookMarked, Users, CheckCircle, GraduationCap, ArrowRight, BookOpen, Layers } from 'lucide-react';

export const metadata = {
  title: 'Academics & CBSE Curriculum | Tapovan Vatsalyadham School',
  description: 'Four-stage CBSE academic progression from Class 1 to Class 12 (Commerce Stream), Session 2026-27 documents, and teaching methodology.',
};

export default function AcademicsPage() {
  const stages = [
    {
      stage: 'Stage 1',
      classes: 'Primary Wing (Classes 1 to 5)',
      age: 'Min. Age 6+ on or before 31st March',
      focus: 'Foundational Literacy, Numeracy & Discovery',
      desc: 'Focuses on core communicative English, foundational mathematics, Environmental Studies (EVS), Hindi, Gujarati, basic computer skills, art, and values. Interactive smart classroom teaching keeps young minds engaged.',
      subjects: ['English Language & Reading', 'Mathematics & Mental Math', 'Environmental Studies (EVS)', 'Hindi & Gujarati', 'Computer Fundamentals', 'Moral Education & Physical Training'],
      border: 'border-[#ebdbb4]',
      badge: 'bg-[#fbf8f0] text-[#856124]',
    },
    {
      stage: 'Stage 2',
      classes: 'Middle Wing (Classes 6 to 8)',
      age: 'Classes 6 to 8',
      focus: 'Subject Specialization & Scientific Inquiry',
      desc: 'Transitions boys into integrated sciences (Physics, Chemistry, Biology concepts), Mathematics, Social Sciences (History, Civics, Geography), Sanskrit, computer applications, and regular sports coaching.',
      subjects: ['English & Advanced Grammar', 'Mathematics & Geometry', 'Integrated General Science', 'Social Sciences', 'Hindi, Gujarati & Sanskrit', 'IT & Computer Science'],
      border: 'border-[#c4dbd5]',
      badge: 'bg-[#f0f5f3] text-[#233d38]',
    },
    {
      stage: 'Stage 3',
      classes: 'Secondary Wing (Classes 9 & 10)',
      age: 'Classes 9 & 10',
      focus: 'CBSE Board Examination Rigor',
      desc: 'Full alignment with CBSE secondary coursework. Includes hands-on science experiments in composite laboratories, digital computer practicals, continuous assessments, and targeted board exam preparation.',
      subjects: ['English Language & Literature', 'Mathematics (Standard / Basic)', 'Science (Physics, Chem, Bio)', 'Social Science', 'Hindi Course-A / Second Language', 'Information Technology'],
      border: 'border-[#e3dae4]',
      badge: 'bg-[#f8f6f8] text-[#553f56]',
    },
    {
      stage: 'Stage 4',
      classes: 'Senior Secondary (Classes 11 & 12)',
      age: 'Commerce Stream Only',
      focus: 'Commerce, Accountancy & Future Fluency',
      desc: 'Exclusive, high-focus CBSE Commerce Stream. Prepares young men for CUET, CA Foundation, IPMAT, B.Com, BBA, and finance careers. Mentored by experienced faculty with real-world case analysis.',
      subjects: ['English Core (Mandatory)', 'Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics / IP / PE', 'Corporate & Financial Literacy'],
      border: 'border-[#c29b38]',
      badge: 'bg-[#fbf8f0] text-[#856124] font-bold',
    },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-16 sm:py-20 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Academics &amp; Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Academic Programs &amp; CBSE Curriculum</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Structured four-stage CBSE academic progression from Class 1 through Class 12 (Commerce Stream), blending rigorous scholarship with practical understanding.
          </p>
        </div>
      </section>

      {/* Teaching & Learning Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-editorial">Pedagogical Approach</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif leading-tight">
                Deep Conceptual Clarity &amp; Continuous Teacher Mentorship
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                At Tapovan Vatsalyadham School, our educators combine traditional academic discipline with active classroom participation. Every student receives the individual attention required to master foundational concepts:
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#c29b38] mt-0.5 shrink-0" />
                  <span><strong>Smart Classroom Teaching:</strong> High-definition interactive panels allow teachers to illustrate complex mathematics and science concepts visually.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#c29b38] mt-0.5 shrink-0" />
                  <span><strong>Supervised Science &amp; IT Practicals:</strong> Students conduct laboratory experiments under teacher guidance, connecting textbooks to tangible reality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#c29b38] mt-0.5 shrink-0" />
                  <span><strong>Assessments &amp; Remedial Guidance:</strong> Periodic unit evaluations, diagnostic feedback, and structured revision ensure no student falls behind.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#e5e1d8] bg-slate-100">
                <img 
                  src="/assets/images/classroom_learning.jpg" 
                  alt="Students engaged in teacher-led interactive learning" 
                  loading="lazy"
                  className="w-full h-auto object-cover" 
                />
                <div className="p-4 bg-[#faf9f5] border-t border-[#e5e1d8] text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-[#1b3832]">Smart Interactive Classrooms</span>
                  <span className="text-[11px] text-slate-500">Student-Teacher Ratio 1:25</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Stage Academic Progression */}
      <section id="stages" className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Four-Stage Progression</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              Class 1 to Class 12 Curriculum Structure
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Aligned with the Central Board of Secondary Education (CBSE) and National Education Policy norms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((stg, idx) => (
              <div key={idx} className={`bg-white rounded-xl border ${stg.border} p-6 sm:p-8 shadow-sm flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${stg.badge}`}>
                      {stg.stage} • {stg.age}
                    </span>
                    <span className="text-xs font-mono text-slate-600 font-semibold">Stage 0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1b3832] mb-1">{stg.classes}</h3>
                  <div className="text-xs font-semibold text-[#856124] mb-3">{stg.focus}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">{stg.desc}</p>
                  
                  <div className="space-y-1.5 pt-4 border-t border-[#e5e1d8]">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Key Subject Areas:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600">
                      {stg.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c29b38] shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e5e1d8] flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Monday – Saturday</span>
                  <Link href="/admissions#form-section" className="font-bold text-[#856124] hover:underline inline-flex items-center gap-1">
                    Enquire for {stg.stage} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Commerce Stream Highlight */}
          <div className="mt-8 bg-[#fbf8f0] border border-[#ebdbb4] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Senior Secondary Note</span>
              <h4 className="font-serif font-bold text-lg text-[#1b3832]">Commerce Stream Focus in Classes 11 &amp; 12</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Please note that Tapovan Vatsalyadham offers exclusively the recognized <strong>CBSE Commerce Stream</strong> for Classes 11 &amp; 12. Science (PCM/PCB) and Humanities/Arts are not offered.
              </p>
            </div>
            <Link href="/admissions#form-section" className="btn-accent shrink-0 text-xs py-3 px-6 whitespace-nowrap">
              Enquire for Class 11 Commerce
            </Link>
          </div>
        </div>
      </section>

      {/* Official Academic Documents (Session 2026-27) */}
      <section id="documents" className="py-20 bg-white border-t border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1b3832] rounded-2xl border border-[#2f514b] p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-3 mb-8">
              <span className="badge-editorial bg-[#fbf8f0] text-[#856124] border-none">
                Session 2026–27 Academic Compliance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
                Calendars, Book Lists &amp; Faculty Matrix
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Download verified institutional copies for Academic Session 2026–27 directly:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/assets/docs/academic-calendar-2025-26.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/15 transition-all text-left group">
                <Calendar className="w-6 h-6 text-[#dfc488] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Academic Calendar</div>
                <div className="text-[11px] text-slate-300">Session 2026–27 PDF</div>
              </a>

              <a href="/assets/docs/annual-holiday-list-2025-26.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/15 transition-all text-left group">
                <Calendar className="w-6 h-6 text-[#dfc488] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Annual Holiday List</div>
                <div className="text-[11px] text-slate-300">Vacations &amp; Festivals 2026–27</div>
              </a>

              <a href="/assets/docs/book-list-2025-26.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/15 transition-all text-left group">
                <BookMarked className="w-6 h-6 text-[#dfc488] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Prescribed Book List</div>
                <div className="text-[11px] text-slate-300">Session 2026–27 NCERT</div>
              </a>

              <a href="/assets/docs/staff-details.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/15 transition-all text-left group">
                <Users className="w-6 h-6 text-[#dfc488] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Faculty &amp; Staff Matrix</div>
                <div className="text-[11px] text-slate-300">Qualifications &amp; Scale</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
