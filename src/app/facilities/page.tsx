import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Campus Infrastructure & Facilities | Tapovan Vatsalyadham School',
  description:
    'Smart interactive classrooms, composite science laboratories, high-speed IT computer coding lab, central library, athletic sports grounds, annual event arenas, and eco-friendly campus at Tapovan Vatsalyadham School, Gandhinagar.',
};

export default function FacilitiesPage() {
  const facilities = [
    {
      id: 'classrooms',
      title: 'Smart Interactive Classrooms',
      category: 'Pedagogy & Digital Learning',
      image: '/assets/images/smart_classroom.jpg',
      desc: 'Spacious, well-ventilated digital classrooms equipped with interactive flat panel displays, multimedia curriculum content, and ergonomic seating for comfortable, focused learning.',
      tag: 'Capacity: 30-35 Students Per Section',
    },
    {
      id: 'science-labs',
      title: 'Composite Science Laboratories',
      category: 'STEM Practicals',
      image: '/assets/images/science_chemistry.jpg',
      desc: 'Dedicated practical stations for Physics, Chemistry, and Biology adhering strictly to CBSE senior secondary safety standards with modern reagents, compound microscopes, and precision optical instruments.',
      tag: 'CBSE Senior Secondary Standard',
    },
    {
      id: 'it-lab',
      title: 'Advanced Computer & IT Coding Lab',
      category: 'Digital Literacy',
      image: '/assets/images/computer_lab.jpg',
      desc: 'High-speed computer lab with dedicated individual workstations, high-speed fiber internet, coding software (Python, Scratch, Web Development), and supervised digital learning.',
      tag: 'Ratio: 1 Student : 1 Workstation',
    },
    {
      id: 'library',
      title: 'Central Knowledge Library & Reading Sanctum',
      category: 'Knowledge Hub',
      image: '/assets/images/library.jpg',
      desc: 'A quiet reading haven home to thousands of books, reference encyclopedias, NCERT resources, competitive exam guides (CUET, CA Foundation, Olympiads), periodicals, and educational magazines.',
      tag: '5,000+ Printed Volumes & Journals',
    },
    {
      id: 'sports-complex',
      title: 'Playground & Athletic Sports Complex',
      category: 'Athletics & Physical Fitness',
      image: '/assets/images/sports_day_track.jpg',
      desc: 'Extensive open grounds for cricket, football, volleyball, track athletics, sprint races, along with dedicated spaces for badminton, table tennis, and guided physical coaching.',
      tag: 'Daily Supervised Sports Coaching',
    },
    {
      id: 'sports-day-arena',
      title: 'Annual Sports Day & Track Events Arena',
      category: 'Athletic Competitions',
      image: '/assets/images/sports_day_action.jpg',
      desc: 'Specialized 200m running tracks, hurdle lanes, high jump pits, and victory podium stations hosting grand inter-house athletic tournaments and annual sports meets.',
      tag: 'Inter-House Sports Tournaments',
    },
    {
      id: 'yoga-grounds',
      title: 'Mass Yoga & Physical Well-Being Grounds',
      category: 'Mindfulness & Character',
      image: '/assets/images/yoga_aerial.jpg',
      desc: 'Dedicated open-air morning assembly arenas where students practice daily yoga, pranayama, and mindful Surya Namaskar for mental clarity and physical vitality.',
      tag: 'Daily Morning Yogic Sessions',
    },
    {
      id: 'auditorium',
      title: 'Cultural Activity & Performing Arts Hall',
      category: 'Co-Curricular & Stage Arts',
      image: '/assets/images/annual_hall_wide.jpg',
      desc: 'Multi-purpose auditorium and stage hall dedicated to music, drama, public speaking, art, classical dance, and student cultural performances with modern audio-visual setup.',
      tag: 'Grand Auditorium & Stage Hall',
    },
    {
      id: 'annual-function',
      title: 'Annual Day Celebrations & Festival Stage',
      category: 'School Events & Festivals',
      image: '/assets/images/annual_day_celebration.jpg',
      desc: 'Grand illuminated stage setup accommodating multi-tier student choir performances, traditional drama, folk dances, and annual prize distribution ceremonies before large audiences.',
      tag: 'Grand Annual Cultural Showcase',
    },
    {
      id: 'science-exhibition',
      title: 'Science, Maths & Social Studies Exhibition Halls',
      category: 'Academic Showcases',
      image: '/assets/images/science_exhibition.jpg',
      desc: 'Exhibition pavilions where students demonstrate working science models, robotics experiments, environmental dioramas, and mathematical concepts to visiting parents and educators.',
      tag: 'Annual Student Innovations Fair',
    },
    {
      id: 'campus',
      title: 'Serene 20+ Acre Eco-Friendly Green Campus',
      category: 'Campus Environment',
      image: '/assets/images/campus_aerial.jpg',
      desc: 'A peaceful, pollution-free 20+ acre green sanctuary surrounded by mature trees and landscaped gardens, providing a clean, calm, and distraction-free atmosphere for education.',
      tag: '20+ Acres of Clean Green Campus',
    },
    {
      id: 'courtyard',
      title: 'Paved Courtyards & Assembly Concourse',
      category: 'Campus Architecture',
      image: '/assets/images/campus_courtyard.jpg',
      desc: 'Expansive inter-connected open courtyards connecting academic wings, flag mast area, and shaded tree-lined avenues for student transition and outdoor gatherings.',
      tag: 'Safe, Monitored Open Spaces',
    },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2.5 flex items-center gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            &gt; <span>Campus Infrastructure &amp; Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
            Infrastructure &amp; Campus Facilities
          </h1>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-2xl leading-relaxed">
            State-of-the-art smart classrooms, CBSE-certified science and computer laboratories,
            spacious athletic grounds, annual festival venues, and reading sanctums designed for holistic student excellence.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-20 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                id={fac.id}
                className="bg-white rounded-xl border border-[#e5e1d8] overflow-hidden shadow-sm hover:shadow-md hover:border-[#071326] transition-all group flex flex-col scroll-mt-24"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#071326]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {fac.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#071326] font-serif mb-2">
                      {fac.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">{fac.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e5e1d8] text-[11px] text-[#8b6508] font-mono font-medium flex items-center justify-between">
                    <span>{fac.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
