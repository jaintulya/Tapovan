import React from 'react';
import Link from 'next/link';
import { Calendar, BookMarked, Users, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Academics & CBSE Curriculum | Tapovan Vatsalyadham School',
  description: 'CBSE curriculum, blended learning methodology, 2027-28 academic calendar, prescribed book list, and staff details at Tapovan Vatsalyadham School.',
};

export default function AcademicsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Academics &amp; Pedagogy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Academic Excellence &amp; CBSE Pedagogy</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Fostering critical thinkers, innovators, and disciplined learners through experiential practicals, digital smart classes, and deep moral foundations.
          </p>
        </div>
      </section>

      {/* Blended Learning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-editorial">Pedagogical Framework</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif leading-tight">
                Modern Learning Tailored to Every Student&apos;s Pace
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                At Tapovan Vatsalyadham School, we recognize that every student is distinct. We offer diverse learning approaches across subject areas and integrate interactive digital opportunities:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#b8860b] mt-0.5 shrink-0" />
                  <span><strong>Interactive Classroom Discussions:</strong> Enriched smart classrooms with dedicated mentors engaging students through collaborative peer discussions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#b8860b] mt-0.5 shrink-0" />
                  <span><strong>Digital Learning Tools:</strong> Allowing students to master complex concepts through audio-visual flat panels and hands-on computer laboratories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#b8860b] mt-0.5 shrink-0" />
                  <span><strong>Remedial Support:</strong> Timely academic reinforcement for students requiring extra guidance, coupled with advanced challenges for accelerated learners.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded overflow-hidden shadow-md border border-[#e5e1d8] bg-slate-100">
                <img 
                  src="/assets/images/classroom_learning.jpg" 
                  alt="Classroom Discussions" 
                  loading="lazy"
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum Stages Grid */}
      <section id="stages" className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Curriculum Stages</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
              From Foundational Roots to Senior Mastery
            </h2>
            <p className="text-slate-600 text-sm">
              Progression pathways conforming with National Curriculum Framework and CBSE standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Stage 1</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Pre-Primary (Nursery, LKG, UKG)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Play-based and sensory learning. Introduction to language sounds, numerical concepts, nature observation, and joyful social interaction.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">Focus: Cognitive &amp; Motor Development</div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Stage 2</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Primary School (Grades 1 to 5)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Building strong foundations in English, Mathematics, Environmental Studies (EVS), Hindi, Gujarati, Basic Computer Skills, and Art.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">Focus: Language, Logic &amp; Reading</div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Stage 3</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Middle School (Grades 6 to 8)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Differentiated Science (Physics, Chemistry, Biology), Social Sciences, Sanskrit, Computer Applications, and Vedic mathematics principles.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">Focus: Conceptual Depth &amp; Analysis</div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Stage 4</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Secondary (Grades 9 &amp; 10)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Rigorous CBSE Board syllabus preparation. Comprehensive laboratory practicals, continuous formative assessments, and regular mock exams.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">Focus: CBSE Board Excellence</div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between border-t-2 border-t-[#0b1d3a]">
              <div>
                <span className="text-[10px] font-bold text-[#0b1d3a] uppercase tracking-wider">Stage 5A</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Senior Secondary - Science (XI &amp; XII)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  English Core, Physics, Chemistry, Mathematics / Biology, Physical Education, and Computer Science. Direct guidance for JEE, NEET, and CUET.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-[#0b1d3a] font-bold">Streams: PCM &amp; PCB</div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between border-t-2 border-t-[#b8860b]">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Stage 5B</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Senior Secondary - Commerce (XI &amp; XII)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  English Core, Accountancy, Business Studies, Economics, Applied Mathematics / Informatics Practices, and Physical Education. CA Foundation prep.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-[#8b6508] font-bold">Stream: Commerce with / without Maths</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Documents Download */}
      <section id="documents" className="py-20 bg-white border-t border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1d3a] rounded border border-slate-700 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-3 mb-8">
              <span className="badge-editorial bg-[#fdfaf2] text-[#8b6508]">
                Session 2027-28 Documents
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
                Academic Calendars, Book Lists &amp; Faculty Matrix
              </h2>
              <p className="text-slate-300 text-sm">
                Download official approved CBSE academic schedules, textbook lists, and teacher qualifications directly:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/assets/docs/academic-calendar-2025-26.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded border border-white/15 transition-all text-left group">
                <Calendar className="w-7 h-7 text-[#d4af37] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Academic Calendar</div>
                <div className="text-[11px] text-slate-300">Session 2027-28 PDF</div>
              </a>

              <a href="/assets/docs/annual-holiday-list-2025-26.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded border border-white/15 transition-all text-left group">
                <Calendar className="w-7 h-7 text-[#d4af37] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Annual Holiday List</div>
                <div className="text-[11px] text-slate-300">Vacations &amp; Festivals 2027-28</div>
              </a>

              <a href="/assets/docs/book-list-2025-26.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded border border-white/15 transition-all text-left group">
                <BookMarked className="w-7 h-7 text-[#d4af37] mb-2 group-hover:scale-105 transition-transform" />
                <div className="font-bold text-sm text-white">Prescribed Book List</div>
                <div className="text-[11px] text-slate-300">Session 2027-28 Textbooks</div>
              </a>

              <a href="/assets/docs/staff-details.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 p-4 rounded border border-white/15 transition-all text-left group">
                <Users className="w-7 h-7 text-[#d4af37] mb-2 group-hover:scale-105 transition-transform" />
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
