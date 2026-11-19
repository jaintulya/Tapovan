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
  Target,
  Lightbulb,
  CheckCircle,
  Send,
  Check,
  Phone,
  MapPin,
  Clock,
  Loader2,
  Search,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight
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

  // 2. Interactive Campus Explorer State
  const campusLocations = [
    {
      id: 'academic-block',
      name: 'Main Academic Complex',
      category: 'Classrooms & Pedagogy',
      image: '/assets/images/school_building.jpg',
      description: 'The central three-story academic facility houses smart digital classrooms, administrative sanctum, and faculty collaboration zones designed with expansive natural ventilation.',
      specs: ['Smart Interactive Panels', 'Capacity: 30-35 Per Section', 'CCTV Monitored']
    },
    {
      id: 'science-lab',
      name: 'Composite Science Laboratories',
      category: 'STEM Practicals',
      image: '/assets/images/science_lab.jpg',
      description: 'Comprehensive experimental stations for Physics, Chemistry, and Biology built to strict CBSE senior secondary standards with safety equipment and optical gear.',
      specs: ['Individual Student Workbenches', 'Modern Reagents & Apparatus', 'Fire-Safe Design']
    },
    {
      id: 'computer-lab',
      name: 'Advanced IT & Coding Lab',
      category: 'Digital Literacy',
      image: '/assets/images/computer_lab.jpg',
      description: 'Dedicated workstations networked on gigabit fiber LAN with cyber-filtered access, Python and Scratch coding tools, and multimedia development suites.',
      specs: ['1:1 Student to Computer Ratio', 'High-Speed Broadband', 'Digital Skills Curriculum']
    },
    {
      id: 'library',
      name: 'Central Knowledge Library',
      category: 'Research & Reading',
      image: '/assets/images/library.jpg',
      description: 'A serene reading oasis holding over 5,000 volumes, NCERT reference archives, national dailies, competitive exam guides (JEE, NEET, CUET), and periodicals.',
      specs: ['5,000+ Printed Titles', 'Quiet Reading Sanctuaries', 'Weekly Research Periods']
    },
    {
      id: 'sports-arena',
      name: 'Sports Complex & Playing Fields',
      category: 'Physical Education',
      image: '/assets/images/sports_ground.jpg',
      description: 'Expansive open athletic fields accommodating cricket pitches, football turf, volleyball courts, along with indoor facilities for badminton and yoga.',
      specs: ['Cricket & Football Grounds', 'Indoor Badminton Courts', 'Daily Supervised PE Coaching']
    },
    {
      id: 'activity-hall',
      name: 'Multipurpose Cultural & Activity Hall',
      category: 'Performing Arts & Assemblies',
      image: '/assets/images/annual_hall_wide.jpg',
      description: 'Dedicated acoustic auditorium and activity space for daily morning assemblies, cultural competitions, music recitals, yoga sessions, and inter-house debates.',
      specs: ['Acoustic Sound System', 'Spacious Stage & Podiums', 'Multi-Disciplinary Workshops']
    }
  ];
  const [activeLocation, setActiveLocation] = useState(campusLocations[0]);

  // 3. Smart Searchable FAQ State
  const faqData = [
    {
      q: 'When do admissions begin for Academic Session 2027-28?',
      a: 'Admissions for Academic Session 2027-28 are currently open for Pre-Primary (Nursery, LKG, UKG) through Class 12 (Science and Commerce streams). Parents can submit an online enquiry form or visit the school office Monday to Saturday between 9:00 AM and 4:00 PM.',
      category: 'Admissions'
    },
    {
      q: 'What are the daily school hours for day scholars?',
      a: 'Regular school classes run from 7:30 AM to 2:30 PM (Monday to Friday) and 7:30 AM to 12:30 PM on Saturdays. The administrative office remains open until 4:00 PM for parent interactions and enquiries.',
      category: 'Timings'
    },
    {
      q: 'Which senior secondary streams are offered in Class 11 and 12?',
      a: 'We offer two recognized CBSE streams: 1) Science Stream (PCM - Physics, Chemistry, Mathematics or PCB - Physics, Chemistry, Biology with Computer Science/Physical Education) and 2) Commerce Stream (Accountancy, Business Studies, Economics with or without Applied Mathematics).',
      category: 'Academics'
    },
    {
      q: 'Does the school provide safe bus transportation?',
      a: 'Yes. Our GPS-tracked school bus fleet operates across major sectors of Gandhinagar, Amiyapur, Chandkheda, Motera, and Ahmedabad with verified drivers and female attendants on each route.',
      category: 'Transport'
    },
    {
      q: 'What documents are required at the time of admission?',
      a: 'Required documents include: 1) Original Birth Certificate, 2) Transfer Certificate (TC/School Leaving Certificate) from the previous recognized school, 3) Previous class Marksheet, 4) Student & Parent Aadhar Cards, and 5) Passport-size photographs.',
      category: 'Documents'
    },
    {
      q: 'What is the student-to-teacher ratio at Tapovan Vatsalyadham?',
      a: 'We maintain a healthy 20:1 student-to-teacher ratio to ensure personalized academic attention, constructive mentor-student discussions, and timely remedial support.',
      category: 'Pedagogy'
    }
  ];
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredFaqs = faqData.filter(item =>
    item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    item.a.toLowerCase().includes(faqSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // 4. Photo Gallery Preview & Lightbox (Curated from Real School Drive)
  const galleryPreview = [
    { src: '/assets/images/campus_aerial.jpg', title: '20+ Acre Green Campus Aerial Horizon View', cat: 'Campus' },
    { src: '/assets/images/smart_classroom.jpg', title: 'Interactive Smart Digital Classroom Session', cat: 'Academics' },
    { src: '/assets/images/science_chemistry.jpg', title: 'Composite Science Laboratory Practicals', cat: 'Academics' },
    { src: '/assets/images/computer_lab.jpg', title: 'Advanced IT & Computer Coding Lab', cat: 'Academics' },
    { src: '/assets/images/sports_day_track.jpg', title: 'Annual Sports Day 200m Track & Sprint Races', cat: 'Sports' },
    { src: '/assets/images/yoga_aerial.jpg', title: 'Mass Campus Yoga & Mindful Surya Namaskar', cat: 'Wellness' },
    { src: '/assets/images/annual_day_celebration.jpg', title: 'Annual Day Cultural Festival & Stage Drama', cat: 'Events' },
    { src: '/assets/images/campus_assembly.jpg', title: 'Disciplined Morning Prayer & Assembly', cat: 'Campus' },
  ];
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <>
      {/* Live Announcement Ticker */}
      <Ticker />

      {/* Hero Section: Editorial & Institutional with Background Drone Video */}
      <section className="relative bg-[#071326] text-white overflow-hidden pt-12 sm:pt-16 lg:pt-20 border-b border-slate-800">
        {/* Background Drone Video with Fallback Still Photo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/images/campus_aerial.jpg"
            className="w-full h-full object-cover opacity-60 filter saturate-125"
          >
            <source src="/assets/videos/hero-campus.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#071326]/65 to-[#071326]/40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 lg:pb-20">

          {/* Quick Floating Status Pill Bar (Awwwards Style) */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 backdrop-blur-sm">
            <span className="flex items-center gap-1.5 text-[#d4af37] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> CBSE Affiliated #430489
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">English Medium Day School</span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 hidden md:inline">Amiyapur, Gandhinagar</span>
            <span className="bg-[#d4af37]/20 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#d4af37]/30">
              Admissions 2027-28 Open
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#d4af37] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>A Premier CBSE Learning Community</span>
              </div>

              {/* Master Two-Tone Headline (Aurevia Reference) */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
                Curiosity today.<br />
                <span className="text-[#d4af37]">Leadership tomorrow.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal">
                A future-ready CBSE Day School education that balances academic excellence, scientific innovation, and timeless ethical character at our 20+ acre green campus under the aegis of Jivan Jagruti Trust.
              </p>

              {/* Primary Call to Actions (Aurevia Style Dual Action) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#admission-form"
                  className="btn-accent text-xs sm:text-sm py-3.5 px-6 sm:px-7 font-bold whitespace-nowrap inline-flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>Enquire for 2027-28</span>
                </a>
                <Link
                  href="/about"
                  prefetch={true}
                  className="btn-outline-white text-xs sm:text-sm py-3.5 px-5 sm:px-6 whitespace-nowrap inline-flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>Explore Our School</span>
                </Link>
                <a
                  href="/assets/docs/mandatory-disclosure-2025-26.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#d4af37] transition-colors py-3 px-2 font-medium whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5 shrink-0" />
                  <span>Public Disclosure PDF</span>
                </a>
              </div>
            </div>

            {/* Right Editorial Photography Card with Viewfinder (Awwwards Style) */}
            <div className="lg:col-span-5 relative">
              <div className="viewfinder-frame rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl relative aspect-[4/3] group">
                <img
                  src="/assets/images/campus_assembly.jpg"
                  alt="Tapovan Vatsalyadham Students Assembly"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Viewfinder crosshairs and discrete labels */}
                <div className="viewfinder-tr" />
                <div className="viewfinder-bl" />

                <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-white/90 bg-slate-950/70 px-2 py-0.5 rounded border border-white/20 uppercase tracking-widest backdrop-blur-sm">
                  Tapovan Vatsalyadham
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-[#d4af37] bg-slate-950/70 px-2 py-0.5 rounded border border-white/20 uppercase tracking-widest backdrop-blur-sm">
                  Amiyapur • Gandhinagar
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-5 pointer-events-none">
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">School Routine</span>
                  <h3 className="text-white text-base font-bold font-serif">Morning Prayer &amp; Assembly</h3>
                  <p className="text-slate-300 text-xs mt-0.5">Discipline, patriotic reverence, and clarity to start each educational day.</p>
                </div>
              </div>

              {/* 4 Authentic Metric Tiles */}
              <div className="grid grid-cols-2 gap-2.5 mt-3 pt-3 border-t border-slate-800">
                <div className="bg-[#0b1d3a] p-3 rounded border border-slate-700/80 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#d4af37]">100%</div>
                  <div className="text-[11px] text-slate-300">CBSE Pass Rate</div>
                </div>
                <div className="bg-[#0b1d3a] p-3 rounded border border-slate-700/80 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#d4af37]">20 : 1</div>
                  <div className="text-[11px] text-slate-300">Student-Mentor Ratio</div>
                </div>
                <div className="bg-[#0b1d3a] p-3 rounded border border-slate-700/80 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#d4af37]">20+ Acres</div>
                  <div className="text-[11px] text-slate-300">Green Campus</div>
                </div>
                <div className="bg-[#0b1d3a] p-3 rounded border border-slate-700/80 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#d4af37]">Sr. Sec.</div>
                  <div className="text-[11px] text-slate-300">Science &amp; Commerce</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* School At A Glance Strip */}
      <section className="bg-white border-b border-[#e5e1d8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-[#e5e1d8]">
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">CBSE Affiliation</div>
              <div className="text-xs text-slate-600 mt-1">Affiliation No. 430489 • Senior Secondary</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">English Medium</div>
              <div className="text-xs text-slate-600 mt-1">Nursery to Class 12 Curriculum</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">Jivan Jagruti Trust</div>
              <div className="text-xs text-slate-600 mt-1">Non-Profit Value-Infused Governance</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">Session 2027-28</div>
              <div className="text-xs text-[#8b6508] font-semibold mt-1">Admissions Open Now</div>
            </div>
          </div>
        </div>
      </section>

      {/* About The School: Editorial Narrative (MS School Inspired Asymmetric Layout) */}
      <section className="py-24 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Visual Column with Architectural Arch Framing */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-t-[80px] rounded-b-2xl border border-[#e5e1d8] overflow-hidden bg-white shadow-lg relative aspect-[4/5] max-h-[480px]">
                <img
                  src="/assets/images/school_activity.jpg"
                  alt="Students engaged in co-curricular learning"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">Values In Practice</span>
                  <div className="font-serif font-bold text-base mt-0.5">Character Precedes Career</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white border border-[#e5e1d8] rounded-xl text-left shadow-sm">
                <div className="text-[10px] font-mono font-bold text-[#8b6508] uppercase tracking-wider">Our Governing Principle</div>
                <div className="text-sm font-serif font-bold text-[#0b1d3a] mt-0.5">&quot;People Not Profits — Education is a Sacred Responsibility&quot;</div>
                <p className="text-xs text-slate-500 mt-1">Managed under the philanthropic stewardship of Jivan Jagruti Trust.</p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-editorial">Institutional Foundation</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1d3a] font-serif leading-[1.14] tracking-tight">
                Cultivating Individuality and Academic Excellence
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>Tapovan Vatsalyadham School (English Medium)</strong> is an English medium day school located along the Sabarmati-Gandhinagar Highway in Amiyapur. Dedicated to nurturing holistic student capability, we provide an environment where rigorous scholastic achievement, digital smart pedagogy, and foundational moral values move together in harmony.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-xl border border-[#e5e1d8] shadow-sm">
                  <div className="flex items-center gap-2 text-[#0b1d3a] font-bold text-sm mb-1.5 font-serif">
                    <Target className="w-4 h-4 text-[#b8860b] shrink-0" /> Our Mission
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To produce sensitive, diligent, dynamic, patriotic, and ethical leaders who contribute positively to national growth and global harmony.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#e5e1d8] shadow-sm">
                  <div className="flex items-center gap-2 text-[#0b1d3a] font-bold text-sm mb-1.5 font-serif">
                    <Lightbulb className="w-4 h-4 text-[#b8860b] shrink-0" /> Our Philosophy
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every child is unique and creative. We do not produce robots; we strain every nerve to kindle the flame of independent inquiry and wisdom.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/about" prefetch={true} className="btn-primary text-xs font-semibold py-3 px-6">
                  Read Complete Institutional Profile &rarr;
                </Link>
                <Link href="/contact" prefetch={true} className="text-xs font-semibold text-[#0b1d3a] hover:text-[#b8860b] transition-colors py-2 px-3">
                  Schedule A Campus Visit
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academic Programs Breakdown */}
      <section className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Curriculum &amp; Stages</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
              Comprehensive CBSE Academic Programs
            </h2>
            <p className="text-slate-600 text-sm">
              Structured learning stages designed to develop foundational literacy, scientific inquiry, and board excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Pre-Primary */}
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Early Years</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Pre-Primary (Nursery, LKG, UKG)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Play-based sensory discovery, early phonics, number sense, motor skill coordination, and social habit development in joyful environments.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: Cognitive Discovery &amp; Motor Skills
              </div>
            </div>

            {/* Primary */}
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Foundations</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Primary School (Grades 1 to 5)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Core competencies in English, Mathematics, Environmental Studies (EVS), Hindi, Gujarati, Basic Computer Skills, and Visual Arts.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: Conceptual Logic &amp; Reading Habits
              </div>
            </div>

            {/* Middle School */}
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Preparatory</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Middle School (Grades 6 to 8)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dedicated sciences (Physics, Chemistry, Biology), Social Sciences, Sanskrit, Computer Applications, and Vedic mathematics principles.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: Analytical Reasoning &amp; Lab Practical
              </div>
            </div>

            {/* Secondary */}
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">CBSE Board</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Secondary School (Grades 9 &amp; 10)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Rigorous CBSE Board preparation, continuous formative assessments, extensive laboratory work, and regular mock examinations.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-slate-500 font-medium">
                Focus: CBSE Class 10 Board Excellence
              </div>
            </div>

            {/* Senior Secondary - Science */}
            <div className="editorial-card p-6 flex flex-col justify-between border-t-2 border-t-[#0b1d3a]">
              <div>
                <span className="text-[10px] font-bold text-[#0b1d3a] uppercase tracking-wider">Senior Secondary Stream</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Science Stream (XI &amp; XII)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Physics, Chemistry, Mathematics / Biology, English Core, Computer Science, and Physical Education with JEE, NEET, and CUET guidance.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-[#0b1d3a] font-bold">
                Options: PCM &amp; PCB with Laboratory Mentorship
              </div>
            </div>

            {/* Senior Secondary - Commerce */}
            <div className="editorial-card p-6 flex flex-col justify-between border-t-2 border-t-[#b8860b]">
              <div>
                <span className="text-[10px] font-bold text-[#8b6508] uppercase tracking-wider">Senior Secondary Stream</span>
                <h3 className="font-serif font-bold text-lg text-[#0b1d3a] mt-1 mb-2">Commerce Stream (XI &amp; XII)</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Accountancy, Business Studies, Economics, English Core, Applied Mathematics / Informatics Practices, and CA Foundation readiness.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] text-[11px] text-[#8b6508] font-bold">
                Options: Commerce with / without Mathematics
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link href="/academics" prefetch={true} className="btn-outline text-xs font-semibold">
              View Detailed Curriculum &amp; Faculty Details &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Feature 5.E: Interactive Campus Explorer */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-editorial mb-2">Interactive Campus Explorer</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
                Explore Our Campus Facilities
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Click on any campus facility to view authentic photographs, equipment specifications, and student capacities.
              </p>
            </div>
            <Link href="/facilities" prefetch={true} className="btn-outline text-xs font-semibold shrink-0">
              Browse All Facilities &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Location Selector Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {campusLocations.map((loc) => {
                const isSelected = activeLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between ${isSelected
                      ? 'bg-[#0b1d3a] text-white border-[#0b1d3a] shadow-sm'
                      : 'bg-white text-slate-800 border-[#e5e1d8] hover:border-slate-400'
                      }`}
                  >
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#d4af37]' : 'text-slate-500'}`}>
                        {loc.category}
                      </div>
                      <div className="font-semibold text-sm mt-0.5">{loc.name}</div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-[#d4af37]' : 'opacity-30'}`} />
                  </button>
                );
              })}
            </div>

            {/* Display Pane for Active Location */}
            <div className="lg:col-span-8 bg-white rounded border border-[#e5e1d8] overflow-hidden shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={activeLocation.image}
                  alt={activeLocation.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <span className="absolute top-4 left-4 bg-[#0b1d3a]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {activeLocation.category}
                </span>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0b1d3a]">
                    {activeLocation.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    {activeLocation.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e5e1d8]">
                  <div className="text-[11px] font-bold text-[#8b6508] uppercase tracking-wider mb-2">
                    Key Specifications &amp; Amenities:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeLocation.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-1.5 bg-[#faf9f5] border border-[#e5e1d8] px-3 py-1 rounded text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#b8860b]" /> {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* News, Events & Official Notice Board */}
      <section className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-editorial mb-2">Notice Board &amp; Calendar</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
                Latest Announcements &amp; Schedules
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Official notifications, vacation schedules, and key circulars for parents and students.
              </p>
            </div>
            <a
              href="/assets/docs/academic-calendar-2025-26.pdf"
              target="_blank"
              className="btn-outline text-xs font-semibold shrink-0 inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Download Academic Calendar PDF
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="editorial-card p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#fdfaf2] text-[#8b6508] border border-[#ebdcb8] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Admissions Active
                </span>
                <h4 className="font-bold text-sm text-[#0b1d3a] mt-3 mb-1">Session 2027-28 Enrollment Open</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Registrations for Pre-Primary up to Class 12 (Science &amp; Commerce) are underway. Contact school desk for campus visits.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] mt-4 flex items-center justify-between text-[11px] text-slate-500">
                <span>Updated Daily</span>
                <a href="#admission-form" className="text-[#0b1d3a] font-bold hover:underline">Apply &rarr;</a>
              </div>
            </div>

            <div className="editorial-card p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Academic Calendar
                </span>
                <h4 className="font-bold text-sm text-[#0b1d3a] mt-3 mb-1">Approved Annual Calendar 2027-28</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Term schedules, examination dates, formative assessment dates, and public holidays available for download.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] mt-4 flex items-center justify-between text-[11px] text-slate-500">
                <span>Session 2027-28</span>
                <a href="/assets/docs/academic-calendar-2025-26.pdf" target="_blank" className="text-[#0b1d3a] font-bold hover:underline">View PDF &rarr;</a>
              </div>
            </div>

            <div className="editorial-card p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Statutory
                </span>
                <h4 className="font-bold text-sm text-[#0b1d3a] mt-3 mb-1">Fee Structure &amp; Regulations</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent fee schedule approved by the School Management Committee as per CBSE regulatory standards.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] mt-4 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Copy</span>
                <a href="/assets/docs/fee-structure-2025-26.pdf" target="_blank" className="text-[#0b1d3a] font-bold hover:underline">Download &rarr;</a>
              </div>
            </div>

            <div className="editorial-card p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Transport
                </span>
                <h4 className="font-bold text-sm text-[#0b1d3a] mt-3 mb-1">School Bus Routes for 2027-28</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Covers Gandhinagar Sectors, Chandkheda, Motera, Sabarmati, and surrounding areas with verified GPS tracking.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e5e1d8] mt-4 flex items-center justify-between text-[11px] text-slate-500">
                <span>GPS Monitored</span>
                <Link href="/contact" prefetch={true} className="text-[#0b1d3a] font-bold hover:underline">Inquire Routes &rarr;</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Curated Authentic Photo Gallery */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-editorial mb-2">Campus Glimpses</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
                Life &amp; Environment at Tapovan
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Authentic visual records of our learning spaces, laboratories, assembly, and sports grounds.
              </p>
            </div>
            <Link href="/gallery" prefetch={true} className="btn-outline text-xs font-semibold shrink-0">
              Open Full Photo Gallery ({galleryPreview.length}+ Photos) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
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
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0b1d3a]/90 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded">
                    {photo.cat}
                  </span>
                </div>
                <div className="p-2.5 sm:p-3.5">
                  <h4 className="font-semibold text-xs sm:text-[13px] text-[#0b1d3a] group-hover:text-[#b8860b] transition-colors line-clamp-2 leading-snug">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Full Screen Lightbox with Clear Visible Close Button */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              {/* Prominent Always-Visible Top-Right Close Button */}
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border border-white/30 transition-all active:scale-95"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
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

      {/* Feature 5.F: Smart Searchable Institutional FAQ */}
      <section className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="badge-editorial">Parent Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers regarding admissions, curriculum, bus transportation, and school timings.
            </p>
          </div>

          {/* Instant Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search questions (e.g. bus, timing, documents, streams)..."
              className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded border border-[#e5e1d8] bg-[#faf9f5] focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded border border-[#e5e1d8] bg-[#faf9f5] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#0b1d3a]"
                  >
                    <span className="font-medium">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 shrink-0 text-[#b8860b]" />
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

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8 text-xs text-slate-500">
                No matching questions found. Please call our admissions desk at <a href="tel:+919737691800" className="font-bold text-[#0b1d3a]">+91 9737691800</a> for direct assistance.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Verified Parent Testimonials */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Parent Perspectives</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
              Trusted by Families Across Gandhinagar
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Reflections from parents whose children study at Tapovan Vatsalyadham School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded border border-[#e5e1d8] flex flex-col justify-between shadow-sm">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;Tapovan Vatsalyadham School provides a nurturing environment where my child thrives academically and emotionally. The dedicated teachers and structured curriculum make learning enjoyable and disciplined.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e1d8]">
                <div className="w-9 h-9 rounded-full bg-[#0b1d3a] text-white flex items-center justify-center font-bold text-xs">SB</div>
                <div>
                  <h4 className="font-bold text-[#0b1d3a] text-xs">Shridhar Bhai</h4>
                  <p className="text-[10px] text-[#8b6508] font-medium">Parent of Secondary Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded border border-[#e5e1d8] flex flex-col justify-between shadow-sm">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;I am impressed by the school&apos;s commitment to character building alongside academics. Teachers give personalized attention, and the campus environment is peaceful and completely distraction-free.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e1d8]">
                <div className="w-9 h-9 rounded-full bg-[#b8860b] text-white flex items-center justify-center font-bold text-xs">SK</div>
                <div>
                  <h4 className="font-bold text-[#0b1d3a] text-xs">Sneha Kakkad</h4>
                  <p className="text-[10px] text-[#8b6508] font-medium">Parent of Middle School Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded border border-[#e5e1d8] flex flex-col justify-between shadow-sm">
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;Choosing Tapovan Vatsalyadham was one of our best decisions. The values, discipline, and science lab infrastructure have helped my child develop strong confidence and curiosity.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e1d8]">
                <div className="w-9 h-9 rounded-full bg-[#0b1d3a] text-white flex items-center justify-center font-bold text-xs">MG</div>
                <div>
                  <h4 className="font-bold text-[#0b1d3a] text-xs">Mansi Gupta</h4>
                  <p className="text-[10px] text-[#8b6508] font-medium">Parent of Primary Student</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Online Admission Registration Form */}
      <section className="py-20 bg-white border-t border-[#e5e1d8] scroll-mt-20 sm:scroll-mt-24" id="admission-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#faf9f5] rounded border border-[#e5e1d8] p-6 sm:p-10 shadow-sm">

            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="badge-editorial">Enrollment 2027-28</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
                Online Admission Enquiry
              </h2>
              <p className="text-xs text-slate-500">
                Please complete this preliminary form. Our admissions counselor will contact you within 24 working hours.
              </p>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200 mb-4 text-center font-semibold">
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
                    className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
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
                    className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
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
                    className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
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
                    className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
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
                    className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
                  >
                    <option value="">Select Grade</option>
                    <option value="Pre-Primary (Nursery, LKG, UKG)">Pre-Primary (Nursery, LKG, UKG)</option>
                    <option value="Primary (Class 1 to 5)">Primary (Class 1 to 5)</option>
                    <option value="Middle School (Class 6 to 8)">Middle School (Class 6 to 8)</option>
                    <option value="Secondary (Class 9 & 10)">Secondary (Class 9 &amp; 10)</option>
                    <option value="Senior Secondary - Science (XI & XII)">Senior Secondary - Science (XI &amp; XII)</option>
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
                    placeholder="e.g. Gandhinagar, Chandkheda, Motera"
                    className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hp-notes" className="block text-xs font-bold text-slate-700 mb-1">Any Specific Questions or Bus Route Requirement</label>
                <textarea
                  id="hp-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any queries regarding bus routes, curriculum, or previous schooling..."
                  className="w-full px-3.5 py-2.5 rounded border border-[#e5e1d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] bg-white"
                ></textarea>
              </div>

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
                    <span>Submit Admission Enquiry (<span className="whitespace-nowrap">2027-28</span>)</span>
                  </>
                )}
              </button>
            </form>

            {/* Clean Confirmation Modal */}
            {isSuccess && (
              <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded border border-[#e5e1d8] max-w-md w-full p-6 sm:p-8 shadow-2xl text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#0b1d3a] text-xl font-serif">Enquiry Submitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.parentName || 'Parent'}</strong>! We have received your admission enquiry for <strong>{formData.studentName || 'your child'}</strong> for Academic Session 2027-28. Our admissions desk will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={`https://wa.me/919737691800?text=${encodeURIComponent(`Hello Tapovan School, I have submitted an admission enquiry for ${formData.studentName || 'my child'} for class ${formData.grade || '2027-28'}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-4 rounded text-xs flex items-center justify-center gap-1.5 transition-colors"
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
      <section className="py-16 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 space-y-5">
              <span className="badge-editorial">Location &amp; Office</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif">
                Campus Location &amp; Visiting Hours
              </h2>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-4 bg-white rounded border border-[#e5e1d8] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0b1d3a] text-sm">School Campus Address</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Tapovan Sanskar Pith, Amiyapur, Post - Sughad, Sabarmati-Gandhinagar Highway, Taluka Chandkheda, District Gandhinagar, Gujarat - 382424
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-[#e5e1d8] flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0b1d3a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0b1d3a] text-sm">Direct Office Numbers</h4>
                    <p className="mt-0.5">
                      Admissions Desk: <a href="tel:+919737691800" className="text-[#0b1d3a] font-bold hover:underline">+91 9737691800</a><br />
                      Principal Office: <a href="tel:+919574523601" className="text-[#0b1d3a] font-bold hover:underline">+91 9574523601</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-[#e5e1d8] flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0b1d3a] text-sm">Campus Timings</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Student Classes: Monday to Friday 7:30 AM – 2:30 PM | Saturday 7:30 AM – 12:30 PM<br />
                      Administrative Office: Monday to Saturday 9:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded border border-[#e5e1d8] overflow-hidden shadow-sm h-80 bg-slate-200">
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
