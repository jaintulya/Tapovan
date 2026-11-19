'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ZoomIn, Video, Trees, GraduationCap, Trophy, Sparkles } from 'lucide-react';

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
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  // Keyboard shortcut (Escape key to dismiss lightbox)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };
    if (lightboxImg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImg]);

  // 4 Simple, Normal Categories (Campus, Academics, Sports, Events)
  const categoryGroups: CategoryGroup[] = [
    {
      id: 'campus',
      badge: 'Campus & Architecture',
      title: 'Campus & 20+ Acre Green Environment',
      subtitle:
        'Peaceful educational sanctuary along Sabarmati-Gandhinagar corridor with academic blocks, courtyards, and tree-lined walkways.',
      photos: [
        {
          id: 'c1',
          title: '20+ Acre Green Campus Aerial Horizon View',
          category: 'campus',
          src: '/assets/images/campus_aerial.jpg',
        },
        {
          id: 'c2',
          title: 'Main Academic Block & Administrative Building',
          category: 'campus',
          src: '/assets/images/school_building.jpg',
        },
        {
          id: 'c3',
          title: 'Paved School Courtyard & Interconnected Wings',
          category: 'campus',
          src: '/assets/images/campus_courtyard.jpg',
        },
        {
          id: 'c4',
          title: 'Peaceful Tree-Lined Campus Walkways & Gardens',
          category: 'campus',
          src: '/assets/images/campus_walk.jpg',
        },
      ],
    },
    {
      id: 'academics',
      badge: 'Academics & Labs',
      title: 'Smart Classrooms & STEM Laboratories',
      subtitle:
        'Interactive digital smart classes, faculty mentorship, composite science practicals, and IT coding lab.',
      photos: [
        {
          id: 'a1',
          title: 'Interactive Smart Digital Classroom Session',
          category: 'academics',
          src: '/assets/images/smart_classroom.jpg',
        },
        {
          id: 'a2',
          title: 'Dedicated Faculty Mentorship at Student Workbenches',
          category: 'academics',
          src: '/assets/images/classroom_teacher.jpg',
        },
        {
          id: 'a3',
          title: 'Active Classroom Peer Discussions & Q&A Learning',
          category: 'academics',
          src: '/assets/images/classroom_learning.jpg',
        },
        {
          id: 'a4',
          title: 'Student Teamwork & Collaborative Group Studies',
          category: 'academics',
          src: '/assets/images/classroom_girls.jpg',
        },
        {
          id: 'a5',
          title: 'Chemistry Laboratory Reagents & Titration Stations',
          category: 'academics',
          src: '/assets/images/science_chemistry.jpg',
        },
        {
          id: 'a6',
          title: 'Physics Laboratory Experiments & Optical Apparatus',
          category: 'academics',
          src: '/assets/images/science_physics.jpg',
        },
        {
          id: 'a7',
          title: 'Biology Specimen Slides & Compound Microscopes',
          category: 'academics',
          src: '/assets/images/science_biology.jpg',
        },
        {
          id: 'a8',
          title: 'High-Speed Gigabit Computer & IT Coding Lab',
          category: 'academics',
          src: '/assets/images/computer_lab.jpg',
        },
        {
          id: 'a9',
          title: 'Central Knowledge Library & Peaceful Reading Sanctum',
          category: 'academics',
          src: '/assets/images/library.jpg',
        },
      ],
    },
    {
      id: 'sports',
      badge: 'Sports & Athletics',
      title: 'Sports Day, Track Athletics & Mass Yoga',
      subtitle:
        'Annual athletic meets, 200m sprint races, baton relays, podium medal distributions, and daily morning yoga asanas.',
      photos: [
        {
          id: 's1',
          title: 'Annual Sports Day 200m Sprint & Hurdle Tracks',
          category: 'sports',
          src: '/assets/images/sports_day_track.jpg',
        },
        {
          id: 's2',
          title: 'Energetic Inter-House Track Athletics & Field Action',
          category: 'sports',
          src: '/assets/images/sports_day_action.jpg',
        },
        {
          id: 's3',
          title: 'Baton Relay Race & Spirit of Sportsmanship',
          category: 'sports',
          src: '/assets/images/sports_day_relay.jpg',
        },
        {
          id: 's4',
          title: 'Victory Stand & Sports Day Medal Distribution Ceremony',
          category: 'sports',
          src: '/assets/images/sports_day_podium.jpg',
        },
        {
          id: 's5',
          title: 'Mass Campus Morning Yoga & Surya Namaskar Gathering',
          category: 'sports',
          src: '/assets/images/yoga_aerial.jpg',
        },
        {
          id: 's6',
          title: 'Athletic Sports Complex & Playing Fields',
          category: 'sports',
          src: '/assets/images/sports_ground.jpg',
        },
      ],
    },
    {
      id: 'events',
      badge: 'Events & Culture',
      title: 'Annual Cultural Festival, Auditorium Hall & Exhibitions',
      subtitle:
        'Auditorium stage hall showcases, annual day dramas, classical dances, prayer assemblies, and science exhibitions.',
      photos: [
        {
          id: 'e1',
          title: 'Grand Auditorium Stage Hall & Performing Arts Showcase',
          category: 'events',
          src: '/assets/images/annual_hall_wide.jpg',
        },
        {
          id: 'e2',
          title: 'Annual Day Celebrations & Festival Stage Illumination',
          category: 'events',
          src: '/assets/images/annual_day_celebration.jpg',
        },
        {
          id: 'e3',
          title: 'Classical & Folk Dance Cultural Performance',
          category: 'events',
          src: '/assets/images/annual_day_dance.jpg',
        },
        {
          id: 'e4',
          title: 'Annual Day Dramatic Skit & Value Theater Stage',
          category: 'events',
          src: '/assets/images/annual_day_drama.jpg',
        },
        {
          id: 'e5',
          title: 'Students Morning Assembly & Prayer Gathering',
          category: 'events',
          src: '/assets/images/campus_assembly.jpg',
        },
        {
          id: 'e6',
          title: 'Annual Science & Social Studies Working Model Fair',
          category: 'events',
          src: '/assets/images/science_exhibition.jpg',
        },
      ],
    },
  ];

  // If "all", show all 4 normal category sections. Otherwise, show only the selected category.
  const activeGroups =
    filter === 'all'
      ? categoryGroups
      : categoryGroups.filter((g) => g.id === filter);

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2.5 flex items-center gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            &gt; <span>Visual Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
            Tapovan Visual Gallery
          </h1>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-2xl leading-relaxed">
            Authentic photo and video records of daily school life, smart classes, science practicals,
            athletic sports day meets, and cultural festivals across our peaceful 20+ acre green campus.
          </p>
        </div>
      </section>

      {/* Top Filter Buttons Bar (NO horizontal scroll on laptop - clean flex-wrap) */}
      <section className="py-4 bg-white border-b border-[#e5e1d8] sticky top-16 sm:top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0b1d3a] text-white shadow-sm'
                  : 'bg-[#faf9f5] text-slate-700 border border-[#e5e1d8] hover:border-slate-400'
              }`}
            >
              All Photos
            </button>
            <button
              type="button"
              onClick={() => setFilter('campus')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === 'campus'
                  ? 'bg-[#0b1d3a] text-white shadow-sm'
                  : 'bg-[#faf9f5] text-slate-700 border border-[#e5e1d8] hover:border-slate-400'
              }`}
            >
              Campus &amp; Architecture
            </button>
            <button
              type="button"
              onClick={() => setFilter('academics')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === 'academics'
                  ? 'bg-[#0b1d3a] text-white shadow-sm'
                  : 'bg-[#faf9f5] text-slate-700 border border-[#e5e1d8] hover:border-slate-400'
              }`}
            >
              Academics &amp; Labs
            </button>
            <button
              type="button"
              onClick={() => setFilter('sports')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === 'sports'
                  ? 'bg-[#0b1d3a] text-white shadow-sm'
                  : 'bg-[#faf9f5] text-slate-700 border border-[#e5e1d8] hover:border-slate-400'
              }`}
            >
              Sports &amp; Athletics
            </button>
            <button
              type="button"
              onClick={() => setFilter('events')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === 'events'
                  ? 'bg-[#0b1d3a] text-white shadow-sm'
                  : 'bg-[#faf9f5] text-slate-700 border border-[#e5e1d8] hover:border-slate-400'
              }`}
            >
              Events &amp; Celebrations
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-[#faf9f5] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">

          {/* Featured Campus Drone Video Showcase (Always Available at Top) */}
          <section id="campus-video" className="scroll-mt-28">
            <div className="bg-[#071326] text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="p-4 sm:p-6 md:p-8 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[#d4af37] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">
                    <Video className="w-4 h-4" /> Official Campus Drone Video
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">
                    Campus Aerial Drone Video Showcase
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                    High-definition aerial drone footage showcasing our 20+ acre green environment,
                    academic block, central courtyard, and playing fields in Amiyapur, Gandhinagar.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="bg-white/10 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/15">
                    HD 720p Drone Tour
                  </span>
                </div>
              </div>

              {/* Video Player Card */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  poster="/assets/images/campus_aerial.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/hero-campus.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Divided Categories with Normal Headings & Photos Underneath */}
          {activeGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-28 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-[#e5e1d8] shadow-sm"
            >
              {/* Section Header */}
              <div className="mb-5 sm:mb-6 pb-4 border-b border-[#e5e1d8]">
                <span className="badge-editorial bg-[#fdfaf2] text-[#8b6508] border border-[#ebdcb8] mb-2">
                  {group.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0b1d3a] tracking-tight">
                  {group.title}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-3xl">
                  {group.subtitle}
                </p>
              </div>

              {/* Clean Uniform Photo Grid (2 cols on phone, 3 or 4 cols on laptop) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
                {group.photos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxImg({ src: photo.src, title: photo.title })}
                    className="group relative overflow-hidden rounded-xl bg-white border border-[#e5e1d8] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-white/90 text-[#0b1d3a] flex items-center justify-center shadow">
                          <ZoomIn className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="p-2 sm:p-3 bg-white">
                      <h3 className="font-semibold text-xs text-[#0b1d3a] group-hover:text-[#b8860b] transition-colors line-clamp-2 leading-snug">
                        {photo.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

        </div>
      </div>

      {/* Full-Screen Lightbox Modal with Explicit Top-Right Close Button */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImg(null)}
        >
          {/* Prominent Always-Visible Top-Right Close Button */}
          <button
            type="button"
            onClick={() => setLightboxImg(null)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[70] w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30 transition-all active:scale-95 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full mx-auto p-2 sm:p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-h-[82vh] w-auto max-w-full rounded-lg shadow-2xl border border-white/20 object-contain bg-black"
            />
            <p className="text-white text-xs sm:text-sm mt-3 font-medium font-serif text-center px-4">
              {lightboxImg.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
