'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ZoomIn, Video, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: 'campus' | 'academics' | 'sports' | 'events';
  src: string;
}

interface CategoryGroup {
  id: 'campus' | 'academics' | 'sports' | 'events';
  title: string;
  badge: string;
  subtitle: string;
  photos: PhotoItem[];
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'campus' | 'academics' | 'sports' | 'events'>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // 4 Core Verified Categories
  const categoryGroups: CategoryGroup[] = [
    {
      id: 'campus',
      badge: 'Campus & Architecture',
      title: 'School Campus & Infrastructure',
      subtitle: 'Peaceful learning environment in Amiyapur, Gandhinagar with academic building, courtyards, and green grounds.',
      photos: [
        {
          id: 'c1',
          title: 'Campus Aerial View & Surrounding Grounds',
          category: 'campus',
          src: '/assets/images/campus_aerial.jpg',
        },
        {
          id: 'c2',
          title: 'Main Academic Building & Administrative Wing',
          category: 'campus',
          src: '/assets/images/school_building.jpg',
        },
        {
          id: 'c3',
          title: 'Paved Central Courtyard & School Assembly Concourse',
          category: 'campus',
          src: '/assets/images/campus_courtyard.jpg',
        },
        {
          id: 'c4',
          title: 'Tree-Lined Campus Walkways & Landscaped Pathways',
          category: 'campus',
          src: '/assets/images/campus_walk.jpg',
        },
        {
          id: 'c5',
          title: 'Open Sports Playfield & School Campus Surroundings',
          category: 'campus',
          src: '/assets/images/sports_ground.jpg',
        },
        {
          id: 'c6',
          title: 'Morning Assembly Grounds & Student Gathering',
          category: 'campus',
          src: '/assets/images/campus_assembly.jpg',
        },
      ],
    },
    {
      id: 'academics',
      badge: 'Academics & Labs',
      title: 'Classrooms & Practical Laboratories',
      subtitle: 'Smart digital interactive classrooms, faculty guidance, composite science labs, and computer practicals.',
      photos: [
        {
          id: 'a1',
          title: 'Interactive Smart Digital Classroom Session',
          category: 'academics',
          src: '/assets/images/smart_classroom.jpg',
        },
        {
          id: 'a2',
          title: 'Teacher Mentorship & Small-Group Instruction',
          category: 'academics',
          src: '/assets/images/classroom_teacher.jpg',
        },
        {
          id: 'a3',
          title: 'Active Classroom Study & Textbook Learning',
          category: 'academics',
          src: '/assets/images/classroom_learning.jpg',
        },
        {
          id: 'a4',
          title: 'Chemistry Laboratory Reagents & Practical Workstations',
          category: 'academics',
          src: '/assets/images/science_chemistry.jpg',
        },
        {
          id: 'a5',
          title: 'Physics Laboratory Experiments & Precision Optics',
          category: 'academics',
          src: '/assets/images/science_physics.jpg',
        },
        {
          id: 'a6',
          title: 'Biology Specimen Slides & Compound Microscopes',
          category: 'academics',
          src: '/assets/images/science_biology.jpg',
        },
        {
          id: 'a7',
          title: 'Senior Secondary Composite Science Laboratory',
          category: 'academics',
          src: '/assets/images/science_lab.jpg',
        },
        {
          id: 'a8',
          title: 'Computer & Information Technology Laboratory',
          category: 'academics',
          src: '/assets/images/computer_lab.jpg',
        },
        {
          id: 'a9',
          title: 'Science & Innovation Student Project Exhibition',
          category: 'academics',
          src: '/assets/images/science_exhibition.jpg',
        },
      ],
    },
    {
      id: 'sports',
      badge: 'Sports & Athletics',
      title: 'Sports Meets, Athletics & Morning Yoga',
      subtitle: 'Annual sports day competitions, track sprints, baton relays, podium ceremonies, and morning yoga sessions.',
      photos: [
        {
          id: 's1',
          title: 'Annual Sports Day Track Sprint & Hurdle Races',
          category: 'sports',
          src: '/assets/images/sports_day_track.jpg',
        },
        {
          id: 's2',
          title: 'Inter-House Athletic Competitions on the Track',
          category: 'sports',
          src: '/assets/images/sports_day_action.jpg',
        },
        {
          id: 's3',
          title: 'Baton Relay Team Races & Athletic Determination',
          category: 'sports',
          src: '/assets/images/sports_day_relay.jpg',
        },
        {
          id: 's4',
          title: 'Annual Sports Day Medal Ceremony & Victory Podium',
          category: 'sports',
          src: '/assets/images/sports_day_podium.jpg',
        },
        {
          id: 's5',
          title: 'Open Playgrounds & Sports Field with School Building',
          category: 'sports',
          src: '/assets/images/sports_ground.jpg',
        },
        {
          id: 's6',
          title: 'Morning Yoga Assembly & Pranayama on the Green Lawns',
          category: 'sports',
          src: '/assets/images/yoga_aerial.jpg',
        },
      ],
    },
    {
      id: 'events',
      badge: 'Events & Celebrations',
      title: 'Cultural Events, Assemblies & Annual Functions',
      subtitle: 'Disciplined morning assembly prayers, annual day stage performances, theatrical skits, and traditional music.',
      photos: [
        {
          id: 'e1',
          title: 'Annual Day Celebrations & Cultural Stage Presentations',
          category: 'events',
          src: '/assets/images/annual_day_celebration.jpg',
        },
        {
          id: 'e2',
          title: 'Traditional Folk Music & Manjira Cultural Presentation',
          category: 'events',
          src: '/assets/images/school_activity.jpg',
        },
        {
          id: 'e3',
          title: 'Traditional Folk Dance & Group Cultural Performance',
          category: 'events',
          src: '/assets/images/annual_day_dance.jpg',
        },
        {
          id: 'e4',
          title: 'Student Theatrical Skit on Value-Based Themes',
          category: 'events',
          src: '/assets/images/annual_day_drama.jpg',
        },
        {
          id: 'e5',
          title: 'Morning Assembly, Prayers & Value Reflections',
          category: 'events',
          src: '/assets/images/campus_assembly.jpg',
        },
        {
          id: 'e6',
          title: 'Multi-Purpose Cultural Auditorium & Student Audience',
          category: 'events',
          src: '/assets/images/annual_hall_wide.jpg',
        },
      ],
    },
  ];

  // Flattened photo list for modal navigation
  const allPhotos = categoryGroups.flatMap((g) => g.photos);
  const displayedPhotos = filter === 'all'
    ? allPhotos
    : allPhotos.filter((p) => p.category === filter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null && prev < displayedPhotos.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : displayedPhotos.length - 1));
      }
    };
    if (activePhotoIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePhotoIndex, displayedPhotos.length]);

  const activePhoto = activePhotoIndex !== null ? displayedPhotos[activePhotoIndex] : null;

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-16 sm:py-20 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Photo &amp; Video Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Campus Photo &amp; Video Gallery</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Authentic photo and video records of daily school life, smart classes, science practicals, athletic tournaments, and cultural celebrations.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="py-4 bg-white border-b border-[#e5e1d8] sticky top-16 sm:top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {[
              { id: 'all', label: `All Photos (${allPhotos.length})` },
              { id: 'campus', label: 'Campus & Grounds' },
              { id: 'academics', label: 'Academics & Labs' },
              { id: 'sports', label: 'Sports & Athletics' },
              { id: 'events', label: 'Events & Celebrations' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setFilter(tab.id as typeof filter);
                  setActivePhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#1b3832] text-white shadow-sm'
                    : 'bg-[#faf9f5] text-slate-700 border border-[#e5e1d8] hover:border-[#1b3832]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-[#faf9f5] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Official Campus Drone Video Section */}
          <section id="campus-video" className="scroll-mt-28">
            <div className="bg-[#132824] text-white rounded-2xl border border-[#233d38] shadow-xl overflow-hidden">
              <div className="p-5 sm:p-7 border-b border-[#233d38] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[#dfc488] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">
                    <Video className="w-4 h-4 text-[#c29b38]" /> Official Campus Video Tour
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold">
                    Campus Drone Video Tour &amp; Aerial Showcase
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                    High-definition aerial drone footage showcasing our campus building, sports grounds, and peaceful surroundings in Amiyapur, Gandhinagar.
                  </p>
                </div>
                <span className="self-start md:self-auto bg-white/10 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/15 whitespace-nowrap">
                  Campus Walkthrough Video
                </span>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/images/campus_aerial.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/hero-campus.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
            </div>
          </section>

          {/* Photo Gallery Grid */}
          <section>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayedPhotos.map((photo, pIdx) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhotoIndex(pIdx)}
                  className="group relative overflow-hidden rounded-xl bg-white border border-[#e5e1d8] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="w-9 h-9 rounded-full bg-white/95 text-[#1b3832] flex items-center justify-center shadow-lg">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-xs text-[#1b3832] group-hover:text-[#c29b38] transition-colors line-clamp-2 leading-snug">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Accessible Full-Screen Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActivePhotoIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[70] w-11 h-11 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30 transition-all active:scale-95 cursor-pointer"
            aria-label="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : displayedPhotos.length - 1));
            }}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[70] w-11 h-11 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30 transition-all active:scale-95 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null && prev < displayedPhotos.length - 1 ? prev + 1 : 0));
            }}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[70] w-11 h-11 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30 transition-all active:scale-95 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full mx-auto p-2 sm:p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl border border-white/20 object-contain bg-black"
            />
            <div className="mt-3 text-center px-4">
              <p className="text-white text-sm font-medium font-serif">
                {activePhoto.title}
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                Photo {(activePhotoIndex ?? 0) + 1} of {displayedPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
