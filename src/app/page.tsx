'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Ticker from '@/components/Ticker';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  GraduationCap,
  Compass,
  Download,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Send,
  Check,
  Phone,
  MapPin,
  Clock,
  Loader2,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight,
  Award,
  BookOpen,
  Video
} from 'lucide-react';

export default function HomePage() {
  // 1. Admission Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    area: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    // Basic phone validation
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      setLoading(false);
      return;
    }

    const sheetWebhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbxDG4fwav-ln39lp6gMZIk4WkEYxr-nGWFFPqqPbojAFUO8SzhwIyAs1JtdsTF8lwoXpw/exec';

    try {
      if (sheetWebhookUrl) {
        await fetch(sheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            ...formData,
            source: 'Homepage Admission Form'
          })
        });
      }

      fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => { });

      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  // 2. Interactive Campus Explorer State (Authentic Photos Only, No Stock Bookshelf or Empty Hall)
  const campusLocations = [
    {
      id: 'academic-block',
      name: 'Main Academic Building',
      category: 'Smart Classrooms',
      image: '/assets/images/school_building.jpg',
      description: 'A 3-storey building with bright, well-ventilated digital smart classrooms, administrative offices, staff rooms, and monitored corridors.',
      specs: ['Interactive Digital Panels', 'Comfortable Student Seating', 'CCTV Monitored Campus']
    },
    {
      id: 'science-lab',
      name: 'Composite Science Laboratories',
      category: 'Science Practicals',
      image: '/assets/images/science_lab.jpg',
      description: 'Fully equipped practical stations for Physics, Chemistry, and Biology where students conduct hands-on experiments under teacher supervision.',
      specs: ['Individual Student Workbenches', 'Modern Science Apparatus', 'Fire-Safe Laboratory Design']
    },
    {
      id: 'computer-lab',
      name: 'Computer & IT Laboratory',
      category: 'Computer Education',
      image: '/assets/images/computer_lab.jpg',
      description: 'Modern computer lab with individual systems, high-speed fiber internet, and supervised foundational coding instruction.',
      specs: ['1:1 Student Computer Access', 'High-Speed Internet', 'Digital Literacy Curriculum']
    },
    {
      id: 'library',
      name: 'Classroom Reading & Academic Study',
      category: 'Books & Reference',
      image: '/assets/images/library.jpg',
      description: 'Supervised reading and curriculum reference study with NCERT textbooks, curriculum reference volumes, educational periodicals, and designated study periods.',
      specs: ['NCERT Curriculum Reference Books', 'Quiet Reading Spaces', 'Weekly Reading & Study Periods']
    },
    {
      id: 'sports-arena',
      name: 'Playgrounds & Sports Ground',
      category: 'Sports & Games',
      image: '/assets/images/sports_ground.jpg',
      description: 'Spacious open grounds for cricket, football, and volleyball, plus dedicated areas for daily physical training, athletics, and yoga.',
      specs: ['Cricket & Football Play Area', 'Volleyball & Badminton', 'Daily Supervised Sports Coaching']
    },
    {
      id: 'activity-hall',
      name: 'Assembly & Activity Hall',
      category: 'Events & Functions',
      image: '/assets/images/annual_day_celebration.jpg',
      description: 'Spacious multi-purpose hall for daily morning prayers, inter-house debates, cultural functions, celebrations, and student gatherings.',
      specs: ['Public Address Sound Setup', 'Stage & Presentation Area', 'Indoor Student Events']
    }
  ];

  // 3. Essential Parent FAQs (8 questions in clean accordions)
  const faqData = [
    {
      q: 'Which classes are accepting admissions for Session 2027-28?',
      a: 'Admissions for Academic Session 2027-28 are open for Class 1 up to Class 12 (Commerce stream) for boys. Please note that the school begins at Class 1 (there are no pre-primary sections).',
      category: 'Admissions'
    },
    {
      q: 'What is the admission procedure?',
      a: 'The admission process consists of 4 simple steps: 1) Submit an Online Enquiry, 2) Visit our Campus, 3) One-on-one Interaction with the Admission Counsellor, and 4) Document Submission & Verification.',
      category: 'Admissions'
    },
    {
      q: 'What is the minimum age requirement for Class 1 admission?',
      a: 'As per CBSE and National Education Policy norms, the child must be 6+ years of age on or before 31st March of the admission year.',
      category: 'Eligibility'
    },
    {
      q: 'Which stream and subject combinations are available in Classes 11 and 12?',
      a: 'We offer exclusively the recognized CBSE Commerce Stream. Core subjects include English Core, Accountancy, Business Studies, and Economics. Optional/elective subjects include Physical Education, Informatics Practices, and Applied Mathematics (confirmed during admission counselling). Science and Arts streams are not offered.',
      category: 'Academics'
    },
    {
      q: 'What are the daily school timings?',
      a: 'Morning reporting is at 7:30 AM with assembly at 7:40 AM. Classes for Std 1 to 11 run from 7:40 AM to 1:40 PM, and for Std 12 from 7:40 AM to 1:00 PM (Monday to Saturday). Short recess is 8:20–8:35 AM and lunch break is 11:15–11:45 AM. School administrative office is open from 9:00 AM to 4:00 PM.',
      category: 'Timings'
    },
    {
      q: 'Which documents are required for admission?',
      a: 'Mandatory documents required are: 1) Birth Certificate, 2) Student Aadhaar Card, 3) Parents Aadhaar Cards, 4) Previous School Leaving Certificate (TC), 5) Previous Year Report Card, and 6) Recent Passport-size Photographs.',
      category: 'Documents'
    },
    {
      q: 'Is school bus transportation available?',
      a: 'Yes, safe and GPS-monitored school bus transportation is available across Gandhinagar Sectors, Chandkheda, Motera, Sabarmati, and surrounding areas.',
      category: 'Transport'
    },
    {
      q: 'How can parents arrange a campus visit?',
      a: 'Parents are welcome to visit the school campus Monday to Saturday between 9:00 AM and 4:00 PM. You can also submit the online enquiry form below or call our admissions helpline at +91 9737691800 to schedule a guided walkthrough.',
      category: 'Campus Visit'
    }
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 4. Photo Gallery Preview & Lightbox (Curated authentic school photographs)
  const galleryPreview = [
    { src: '/assets/images/school_building.jpg', title: 'Main Academic Building', cat: 'Campus' },
    { src: '/assets/images/smart_classroom.jpg', title: 'Classroom Activities & Teaching', cat: 'Academics' },
    { src: '/assets/images/science_chemistry.jpg', title: 'Science Laboratory Practicals', cat: 'Academics' },
    { src: '/assets/images/computer_lab.jpg', title: 'Computer Laboratory', cat: 'Academics' },
    { src: '/assets/images/sports_day_track.jpg', title: 'Annual Sports Day Events', cat: 'Sports' },
    { src: '/assets/images/yoga_aerial.jpg', title: 'Morning Yoga & Assembly', cat: 'Wellness' },
    { src: '/assets/images/annual_day_celebration.jpg', title: 'Annual Day Cultural Performances', cat: 'Events' },
    { src: '/assets/images/campus_assembly.jpg', title: 'Disciplined Morning Assembly', cat: 'Campus' },
  ];
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <>
      {/* Announcement Strip */}
      <Ticker />

      {/* Hero Section: Dynamic Background Video with Forest Green Overlay & Architectural Legibility */}
      <section className="relative text-white overflow-hidden py-20 sm:py-28 lg:py-36 border-b border-[#233d38] min-h-[580px] lg:min-h-[640px] flex items-center bg-[#132824]">
        {/* Full-Cover Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        >
          <source src="/assets/videos/hero-campus.mp4" type="video/mp4" />
        </video>

        {/* Deep Forest Green Gradient Overlay for High Legibility & Authentic Brand Presence */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#132824]/95 via-[#1b3832]/85 to-[#132824]/50 z-0" />
        <div className="absolute inset-0 bg-[#1b3832]/25 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-[#dfc488]">
              <Award className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
              <span className="font-semibold tracking-wide">CBSE Boys Day School • Std 1 to 12 Commerce</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              A Place to Learn, Grow<br />
              <span className="text-[#dfc488]">and Excel.</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              Tapovan Vatsalyadham School (English Medium) is a recognized CBSE institution for boys in Amiyapur, Gandhinagar, offering education from Classes 1 to 12 (with Commerce at the Senior Secondary level). Rooted in &quot;धर्मो रक्षति रक्षितः&quot; and managed by Jivan Jagruti Trust.
            </p>

            {/* Two Clear CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#admission-form"
                className="btn-accent text-xs sm:text-sm py-3.5 px-6 font-bold whitespace-nowrap inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>Enquire for Admission (2027–28)</span>
              </a>
              <Link
                href="/school-life"
                className="btn-outline-white text-xs sm:text-sm py-3.5 px-6 whitespace-nowrap inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>Explore Campus Life</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Item Quick Facts Strip */}
      <section className="bg-white border-b border-[#e5e1d8] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x divide-[#e5e1d8]">
            <div className="px-3">
              <div className="text-xl sm:text-2xl font-bold text-[#1b3832] font-serif">CBSE Affiliated</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Affiliation #430592 • Code: 11722</div>
            </div>
            <div className="px-3">
              <div className="text-xl sm:text-2xl font-bold text-[#1b3832] font-serif">Classes 1 to 12</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Commerce in Senior Secondary</div>
            </div>
            <div className="px-3">
              <div className="text-xl sm:text-2xl font-bold text-[#1b3832] font-serif">Boys Day School</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Holistic Academic Focus</div>
            </div>
            <div className="px-3">
              <div className="text-xl sm:text-2xl font-bold text-[#1b3832] font-serif">Amiyapur, Gandhinagar</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Near Tapovan Circle (PIN 382424)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Vision & Leadership */}
      <section className="py-20 sm:py-24 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Card - Centered on Mobile */}
            <div className="lg:col-span-5 relative max-w-sm sm:max-w-md mx-auto lg:mx-0 w-full">
              <div className="rounded-2xl border border-[#e5e1d8] overflow-hidden bg-white shadow-md relative aspect-[4/5] max-h-[460px]">
                <img
                  src="/assets/images/campus_assembly.jpg"
                  alt="Tapovan students during morning assembly"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfc488]">Values In Practice</span>
                  <div className="font-serif font-bold text-base mt-0.5">Nurturing Future Leaders</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white border border-[#e5e1d8] rounded-xl text-left shadow-xs">
                <div className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Our Governing Principle</div>
                <div className="text-sm font-serif font-bold text-[#1b3832] mt-0.5">&quot;Education Dedicated to Excellence, Clarity and Service&quot;</div>
                <p className="text-xs text-slate-500 mt-1">Managed under the philanthropic stewardship of Jivan Jagruti Trust.</p>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-editorial">Institutional Vision</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1b3832] font-serif leading-[1.15] tracking-tight">
                Shaping Academically Accomplished Young Men
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Rooted in the timeless ideal of &quot;धर्मो रक्षति रक्षितः&quot;, Tapovan Vatsalyadham School provides an environment where young men cultivate intellectual brilliance, moral conviction, and physical stamina. Led by Principal <strong>Mrs. Rupa Chirag Shah (M.Sc., M.Ed.)</strong> under the philanthropic stewardship of <strong>Jivan Jagruti Trust</strong>, our education balances rigorous CBSE preparation with value-driven holistic development.
              </p>

              {/* Leadership Creed Card */}
              <div className="bg-[#fbf8f0] p-5 rounded-xl border border-[#ebdbb4] text-left">
                <div className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Leadership Creed</div>
                <div className="text-xs sm:text-sm font-serif font-semibold text-[#1b3832] mt-1 italic leading-relaxed">
                  &quot;To shape academically accomplished young men who think with clarity, are future fluent, stand strong and resilient and lead beyond self — living Bhakti, Maitri, Shuddhi and Shaurya through their choices and actions.&quot;
                </div>
              </div>

              {/* 4 Virtues Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="bg-white p-3.5 rounded-xl border border-[#e5e1d8] text-center shadow-xs">
                  <div className="font-serif font-bold text-sm text-[#1b3832]">भक्ति (Bhakti)</div>
                  <div className="text-[10px] text-[#856124] mt-0.5 font-medium">Devotion &amp; Reverence</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5e1d8] text-center shadow-xs">
                  <div className="font-serif font-bold text-sm text-[#1b3832]">मैत्री (Maitri)</div>
                  <div className="text-[10px] text-[#856124] mt-0.5 font-medium">Brotherhood &amp; Harmony</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5e1d8] text-center shadow-xs">
                  <div className="font-serif font-bold text-sm text-[#1b3832]">शुद्धि (Shuddhi)</div>
                  <div className="text-[10px] text-[#856124] mt-0.5 font-medium">Purity &amp; Truth</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5e1d8] text-center shadow-xs">
                  <div className="font-serif font-bold text-sm text-[#1b3832]">शौर्य (Shaurya)</div>
                  <div className="text-[10px] text-[#856124] mt-0.5 font-medium">Courage &amp; Resilience</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/about" className="btn-primary text-xs font-semibold py-3 px-6">
                  Read School Profile &rarr;
                </Link>
                <Link href="/contact" className="text-xs font-semibold text-[#1b3832] hover:text-[#c29b38] transition-colors py-2 px-3">
                  Schedule A Campus Visit
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Stage Academics Breakdown */}
      <section className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Curriculum Stages</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              Four-Stage CBSE Academic Programs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Structured learning stages designed to develop foundational literacy, scientific inquiry, and board excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Foundations (Std 1–5)</span>
                <h3 className="font-serif font-bold text-base text-[#1b3832] mt-1 mb-2">Primary Wing (Classes 1–5)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Core competencies in English, Mathematics, Environmental Studies (EVS), Hindi, Gujarati, Basic Computer Skills, and foundational values. Minimum age: 6+ years on or before 31st March.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: Conceptual Logic &amp; Literacy
              </div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Middle Wing (Std 6–8)</span>
                <h3 className="font-serif font-bold text-base text-[#1b3832] mt-1 mb-2">Middle Wing (Classes 6–8)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dedicated sciences (Physics, Chemistry, Biology concepts), Social Sciences, Sanskrit, Computer Applications, and Vedic mathematics principles.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: Analytical Inquiry &amp; Labs
              </div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Secondary (Std 9–10)</span>
                <h3 className="font-serif font-bold text-base text-[#1b3832] mt-1 mb-2">Secondary Wing (Classes 9 &amp; 10)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Rigorous CBSE Board preparation, continuous formative assessments, laboratory practicals, and mock examination drills for Class 10 success.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: CBSE Board Excellence
              </div>
            </div>

            <div className="editorial-card p-6 flex flex-col justify-between border-t-2 border-t-[#c29b38]">
              <div>
                <span className="text-[10px] font-bold text-[#856124] uppercase tracking-wider">Sr. Secondary (Std 11–12)</span>
                <h3 className="font-serif font-bold text-base text-[#1b3832] mt-1 mb-2">Commerce Stream (XI &amp; XII)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Accountancy, Business Studies, Economics, English Core, Applied Mathematics / Informatics Practices, and Physical Education with CA Foundation preparedness.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-[#856124] font-bold">
                Focus: Commerce, Finance &amp; CA Prep
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/academics" className="btn-outline text-xs font-semibold">
              View Detailed Curriculum &amp; Faculty Details &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Campus Infrastructure & Learning Spaces (Mobile-First 6-Card Grid) */}
      <section className="py-16 sm:py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="badge-editorial mb-2">Campus Infrastructure</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
                Campus Facilities &amp; Learning Spaces
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Purpose-built spaces across our ~4.82-acre campus designed for focused academics, scientific discovery, and physical wellness.
              </p>
            </div>
            <Link href="/facilities" className="btn-outline text-xs font-semibold shrink-0">
              Browse All Facilities &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {campusLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-[#e5e1d8] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1b3832]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {loc.category}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-[#1b3832]">
                      {loc.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#f0ece1]">
                  <div className="flex flex-wrap gap-1.5">
                    {loc.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 bg-[#faf9f5] border border-[#e5e1d8] px-2.5 py-1 rounded-md text-[11px] text-slate-700 font-medium"
                      >
                        <Check className="w-3 h-3 text-[#c29b38] shrink-0" /> {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Curated Authentic Photo Gallery */}
      <section className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-editorial mb-2">Campus Glimpses</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
                Life &amp; Environment at Tapovan
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Authentic visual records of our learning spaces, laboratories, assembly, and sports grounds.
              </p>
            </div>
            <Link href="/gallery" className="btn-outline text-xs font-semibold shrink-0">
              Open Full Photo Gallery ({galleryPreview.length}+ Photos) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryPreview.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => setLightboxImage(photo)}
                className="editorial-card group cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#1b3832]/90 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded">
                    {photo.cat}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-xs text-[#1b3832] group-hover:text-[#c29b38] transition-colors line-clamp-2 leading-snug">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Full Screen Lightbox */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Image Preview"
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] w-11 h-11 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30 transition-all active:scale-95"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-auto max-h-[82vh] object-contain rounded-lg shadow-2xl bg-black"
                />
                <div className="mt-3 text-center text-white text-xs sm:text-sm font-medium font-serif">
                  {lightboxImage.title}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Institutional FAQ Section (Clean Accordions, Zero Search Clutter) */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="badge-editorial">Parent Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b3832] font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers regarding admissions, curriculum, bus transportation, and school timings.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {faqData.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-xl border border-[#e5e1d8] bg-white transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#1b3832]"
                  >
                    <span className="font-medium">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 shrink-0 text-[#c29b38]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#e5e1d8]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Parent Perspectives</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              Trusted by Families Across Gandhinagar
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Reflections from parents whose children study at Tapovan Vatsalyadham School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e5e1d8] flex flex-col justify-between shadow-xs">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;Tapovan Vatsalyadham School provides a nurturing environment where my child thrives academically and emotionally. The dedicated teachers and structured curriculum make learning enjoyable and disciplined.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e1d8]">
                <div className="w-9 h-9 rounded-full bg-[#1b3832] text-white flex items-center justify-center font-bold text-xs">SB</div>
                <div>
                  <h4 className="font-bold text-[#1b3832] text-xs">Shridhar Bhai</h4>
                  <p className="text-[10px] text-[#856124] font-medium">Parent of Secondary Student</p>
                </div>
              </div>
            </div>

            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e5e1d8] flex flex-col justify-between shadow-xs">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;I am impressed by the school&apos;s commitment to holistic development alongside academics. Teachers give personalized attention, and the campus environment is peaceful and completely distraction-free.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e1d8]">
                <div className="w-9 h-9 rounded-full bg-[#c29b38] text-white flex items-center justify-center font-bold text-xs">SK</div>
                <div>
                  <h4 className="font-bold text-[#1b3832] text-xs">Sneha Kakkad</h4>
                  <p className="text-[10px] text-[#856124] font-medium">Parent of Middle School Student</p>
                </div>
              </div>
            </div>

            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e5e1d8] flex flex-col justify-between shadow-xs">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;Choosing Tapovan Vatsalyadham was one of our best decisions. The values, discipline, and science lab infrastructure have helped my child develop strong confidence and curiosity.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e1d8]">
                <div className="w-9 h-9 rounded-full bg-[#5f4c5f] text-white flex items-center justify-center font-bold text-xs">MG</div>
                <div>
                  <h4 className="font-bold text-[#1b3832] text-xs">Mansi Gupta</h4>
                  <p className="text-[10px] text-[#856124] font-medium">Parent of Primary Student</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Online Admission Registration Form */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8] scroll-mt-20 sm:scroll-mt-24" id="admission-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-6 sm:p-10 shadow-sm">

            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="badge-editorial">Enrollment 2027–28</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b3832] font-serif">
                Online Admission Enquiry
              </h2>
              <p className="text-xs text-slate-500">
                Please complete this preliminary form. Our admissions counselor will contact you within 24 working hours.
              </p>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 mb-4 text-center font-semibold">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hp-studentName" className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                  <input
                    id="hp-studentName"
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aarav Patel"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="hp-parentName" className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name *</label>
                  <input
                    id="hp-parentName"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hp-phone" className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    id="hp-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="hp-email" className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                  <input
                    id="hp-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hp-grade" className="block text-xs font-bold text-slate-700 mb-1">Class Seeking Admission *</label>
                  <select
                    id="hp-grade"
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                  >
                    <option value="">Select Grade</option>
                    <option value="Primary (Class 1 to 5)">Primary (Class 1 to 5) — Min Age 6+</option>
                    <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                    <option value="Secondary (Class 9 & 10)">Secondary (Class 9 &amp; 10)</option>
                    <option value="Senior Secondary - Commerce (XI & XII)">Senior Secondary - Commerce (XI &amp; XII)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hp-area" className="block text-xs font-bold text-slate-700 mb-1">Residential Locality / City</label>
                  <input
                    id="hp-area"
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="e.g. Gandhinagar, Chandkheda, Motera, Ahmedabad"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hp-notes" className="block text-xs font-bold text-slate-700 mb-1">Any Specific Questions or Information</label>
                <textarea
                  id="hp-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any queries regarding curriculum, previous schooling, or fee details..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] bg-white"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-accent justify-center text-sm py-3.5 font-bold uppercase tracking-wider whitespace-nowrap flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" />
                      <span>Submit Admission Enquiry (<span className="whitespace-nowrap">2027–28</span>)</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c29b38] shrink-0" />
                  <span>Privacy Notice: Information provided will only be used to respond to your admission enquiry. We respect your privacy and never share parent contact details. View our <Link href="/privacy-policy" className="text-[#1b3832] font-semibold underline">Privacy Policy</Link>.</span>
                </p>
              </div>
            </form>

            {/* Clean Confirmation Modal */}
            {isSuccess && (
              <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl border border-[#e5e1d8] max-w-md w-full p-6 sm:p-8 shadow-2xl text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#1b3832] text-xl font-serif">Enquiry Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you for contacting Tapovan Vatsalyadham School. Your admission enquiry has been received. A member of our admissions team will contact you using the details provided.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={`https://wa.me/919737691800?text=${encodeURIComponent(`Hello Tapovan School, I have submitted an admission enquiry for ${formData.studentName || 'my child'} for class ${formData.grade || '2027-28'}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" /> Message on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ studentName: '', parentName: '', phone: '', email: '', grade: '', area: '', notes: '' });
                      }}
                      className="btn-primary flex-1 justify-center text-xs py-2.5 whitespace-nowrap"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Campus Map & Visiting Hours */}
      <section className="py-16 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 space-y-5">
              <span className="badge-editorial">Location &amp; Office</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b3832] font-serif">
                Campus Location &amp; Visiting Hours
              </h2>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-4 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c29b38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1b3832] text-sm">School Campus Address</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Tapovan Sanskar Pith, Near Tapovan Circle, Amiyapur, Gandhinagar, Gujarat - 382424
                    </p>
                    <a
                      href="https://maps.app.goo.gl/rvkxjZTvtcjEL9YS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#856124] font-semibold hover:underline mt-1 inline-block"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1b3832] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1b3832] text-sm">Direct Office &amp; Principal Numbers</h4>
                    <p className="mt-0.5">
                      Admissions Helpline: <a href="tel:+919737691800" className="text-[#1b3832] font-bold hover:underline">+91 9737691800</a><br />
                      Principal Office (Mrs. Rupa Shah): <a href="tel:+919574523601" className="text-[#1b3832] font-bold hover:underline">+91 9574523601</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded-xl border border-[#e5e1d8] flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#856124] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1b3832] text-sm">Timings (Monday – Saturday)</h4>
                    <p className="mt-1 leading-relaxed text-xs text-slate-600">
                      <strong>School Hours:</strong> 7:40 AM – 1:40 PM (Std 12 to 1:00 PM)<br />
                      <strong>Office Hours:</strong> 9:00 AM – 4:00 PM
                    </p>
                    <Link href="/school-life" className="text-[11px] text-[#856124] font-bold hover:underline inline-block mt-1">
                      View Daily Timetable &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#e5e1d8] overflow-hidden shadow-sm h-80 bg-slate-200">
                <iframe
                  title="Tapovan Vatsalyadham Campus Map"
                  src="https://maps.google.com/maps?q=Tapovan%20Sanskar%20Pith%20Amiyapur%20Gandhinagar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
