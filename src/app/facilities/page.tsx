import React from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Campus Facilities & Infrastructure | Tapovan Vatsalyadham School',
  description:
    'Six key learning facilities at Tapovan Vatsalyadham School: Smart Classrooms, Science Labs, Computer Lab, Library, Sports Grounds, and Assembly Hall.',
};

export default function FacilitiesPage() {
  const facilities = [
    {
      id: 'classrooms',
      title: 'Smart Digital Classrooms',
      category: 'Interactive Learning',
      image: '/assets/images/smart_classroom.jpg',
      desc: 'Spacious, well-ventilated digital classrooms fitted with interactive flat panel displays, ergonomic dual desks, and multimedia curriculum tools to make lessons engaging and visual.',
      specs: ['Interactive Digital Display Panels', 'Comfortable Dual Seating', 'CCTV Monitored Corridors'],
    },
    {
      id: 'science-labs',
      title: 'Composite Science Laboratories',
      category: 'Science Practicals',
      image: '/assets/images/science_lab.jpg',
      desc: 'Practical experiment workstations equipped for Physics, Chemistry, and Biology. Students perform curriculum-aligned experiments under continuous teacher supervision with proper safety gear.',
      specs: ['Physics, Chemistry & Biology Stations', 'Modern Science Apparatus', 'Faculty Guided Practicals'],
    },
    {
      id: 'it-lab',
      title: 'Computer & IT Laboratory',
      category: 'Digital Literacy',
      image: '/assets/images/computer_lab.jpg',
      desc: 'Dedicated computer workstations providing students hands-on digital education, foundational computing skills, and structured computer science instruction with power backup.',
      specs: ['Individual Student Workstations', 'High-Speed Internet Connectivity', 'Supervised Educational Computing'],
    },
    {
      id: 'library',
      title: 'Classroom Reading & Academic Study Room',
      category: 'Books & Reference',
      image: '/assets/images/library.jpg',
      desc: 'A quiet reading and reference environment with NCERT textbooks, curriculum reference volumes, educational periodicals, newspapers, and designated weekly reading periods for all grades.',
      specs: ['Curriculum Reference Collection', 'Quiet Reading Spaces', 'Weekly Supervised Reading Periods'],
    },
    {
      id: 'sports-ground',
      title: 'Playgrounds & Sports Ground',
      category: 'Athletics & Games',
      image: '/assets/images/sports_ground.jpg',
      desc: 'Spacious open grounds for cricket, football, volleyball, track athletics, sprint races, and daily physical fitness drills under the direction of physical education teachers.',
      specs: ['Cricket & Football Field', 'Volleyball & Badminton Area', 'Daily Guided Sports Coaching'],
    },
    {
      id: 'activity-hall',
      title: 'Assembly & Multi-Purpose Activity Hall',
      category: 'Events & Culture',
      image: '/assets/images/annual_day_celebration.jpg',
      desc: 'Spacious multi-purpose hall for daily morning assembly and prayers, inter-house debates, cultural performances, yoga sessions, and annual student celebrations.',
      specs: ['Public Address Sound System', 'Stage for Student Presentations', 'Indoor Events & Gatherings'],
    },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-16 sm:py-20 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Campus Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Campus Infrastructure &amp; Facilities</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Six purpose-built learning spaces on our ~4.82-acre campus in Amiyapur, Gandhinagar, designed for academic excellence, physical health, and holistic student development.
          </p>
        </div>
      </section>

      {/* Facilities Grid (6 Genuine Categories) */}
      <section className="py-20 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Campus Spaces</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              Six Core Learning Environments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Every facility is maintained to support daily learning, physical vigor, and student safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={fac.id}
                id={fac.id}
                className="bg-white rounded-xl border border-[#e5e1d8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group scroll-mt-24"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1b3832]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {fac.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white/90 text-[10px] font-mono px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-[#1b3832] mb-2 group-hover:text-[#c29b38] transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{fac.desc}</p>
                    
                    <ul className="space-y-1.5 pt-3 border-t border-[#e5e1d8] text-xs text-slate-600">
                      {fac.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] border-t border-[#e5e1d8] flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Campus Infrastructure</span>
                  <Link href="/contact" className="font-bold text-[#856124] hover:underline inline-flex items-center gap-1">
                    Visit Campus <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Campus Visit Banner */}
          <div className="mt-14 bg-[#fbf8f0] border border-[#ebdbb4] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Guided Walkthrough</span>
              <h3 className="font-serif font-bold text-2xl text-[#1b3832]">Schedule a Campus Walkthrough</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Parents are warmly invited to inspect our digital smart classrooms, composite labs, and sports grounds in person. Admissions desk is open Monday to Saturday, 9:00 AM – 4:00 PM.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/admissions#form-section" className="btn-accent text-xs font-bold py-3 px-6 whitespace-nowrap">
                Enquire for Admission
              </Link>
              <a href="tel:+919737691800" className="btn-outline text-xs font-bold py-3 px-6 whitespace-nowrap">
                Call +91 9737691800
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
