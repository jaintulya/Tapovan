import React from 'react';
import Link from 'next/link';
import { Target, Lightbulb, HeartHandshake, Eye, FileText, Users, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us | Tapovan Vatsalyadham School (English Medium)',
  description: 'History, leadership, vision, and core virtues of Tapovan Vatsalyadham School, Gandhinagar. Managed by Jivan Jagruti Trust.',
};

export default function AboutPage() {
  const coreVirtues = [
    {
      title: 'Bhakti (भक्ति)',
      subtitle: 'Devotion & Gratitude',
      desc: 'Cultivating reverence for knowledge, respect for parents and teachers, and a humble sense of gratitude toward society and the nation.',
      color: 'bg-[#fbf8f0] border-[#ebdbb4] text-[#856124]',
    },
    {
      title: 'Maitri (मैत्री)',
      subtitle: 'Brotherhood & Fellowship',
      desc: 'Fostering deep camaraderie, empathy, and mutual support among boys, encouraging collaborative learning and lifelong friendships.',
      color: 'bg-[#f0f5f3] border-[#c4dbd5] text-[#233d38]',
    },
    {
      title: 'Shuddhi (शुद्धि)',
      subtitle: 'Purity in Thought & Action',
      desc: 'Instilling mental clarity, ethical discipline, and truthfulness in daily choices, personal habits, and academic honesty.',
      color: 'bg-[#f8f6f8] border-[#e3dae4] text-[#553f56]',
    },
    {
      title: 'Shaurya (शौर्य)',
      subtitle: 'Courage & Resilience',
      desc: 'Building inner fortitude, sportsmanship, and mental stamina to face challenges, accept failures gracefully, and lead with confidence.',
      color: 'bg-[#fbf8f0] border-[#ebdbb4] text-[#856124]',
    },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-16 sm:py-20 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">About Tapovan Vatsalyadham</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A recognized CBSE affiliated Boys Day School managed by Jivan Jagruti Trust, dedicated to intellectual clarity, ethical leadership, and academic excellence.
          </p>
        </div>
      </section>

      {/* Main Introduction & Institutional Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-editorial">Institutional Heritage</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif leading-tight">
                Education Grounded in Excellence & Values
              </h2>
              <div className="inline-block bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] text-xs font-serif font-bold px-3 py-1 rounded">
                Motto: धर्मो रक्षति रक्षितः
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>Tapovan Vatsalyadham School (English Medium)</strong> is an English-medium CBSE affiliated Boys Day School (Affiliation No. <strong>430592</strong> • School Code: <strong>11722</strong>, Affiliated since 2025) located at Tapovan Sanskar Pith, near Tapovan Circle, Amiyapur, Gandhinagar.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Managed under the philanthropic stewardship of <strong>Jivan Jagruti Trust</strong>, our campus spans ~4.82 acres (19,525 sq. meters) of peaceful, distraction-free environment. Led by Principal <strong>Mrs. Rupa Chirag Shah (M.Sc., M.Ed.)</strong>, our school provides balanced schooling from Class 1 through Class 12 (offering the Commerce stream at the Senior Secondary level).
              </p>
              <div className="p-4 bg-[#fbf8f0] rounded border border-[#ebdbb4] text-xs sm:text-sm text-[#856124] font-serif italic leading-relaxed">
                &quot;To shape academically accomplished young men who think with clarity, are future fluent, stand strong and resilient and lead beyond self — living Bhakti, Maitri, Shuddhi and Shaurya through their choices and actions.&quot;
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#e5e1d8] bg-slate-100">
                <img 
                  src="/assets/images/campus_walk.jpg" 
                  alt="Tapovan Vatsalyadham Campus Walkway and Grounds" 
                  loading="lazy"
                  className="w-full h-auto object-cover" 
                />
                <div className="p-4 bg-[#faf9f5] border-t border-[#e5e1d8] text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-[#1b3832]">Amiyapur Campus, Gandhinagar</span>
                  <span className="text-[11px] text-slate-500">19,525 sq. m Campus Grounds</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 4 Core Virtues */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Foundational Values</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              The Four Virtues of Tapovan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our code of student life that translates Indian heritage into practical leadership principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreVirtues.map((v, i) => (
              <div key={i} className={`p-6 rounded-xl border ${v.color} shadow-sm flex flex-col justify-between`}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-1 font-serif">
                    Virtue 0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-0.5">{v.title}</h3>
                  <div className="text-xs font-medium opacity-90 mb-3">{v.subtitle}</div>
                  <p className="text-xs text-slate-700 leading-relaxed">{v.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 flex items-center gap-1.5 text-[11px] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Values in Daily Practice
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission, Vision & Philosophy Cards */}
      <section id="vision" className="py-20 bg-white border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Institutional Framework</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b3832] font-serif">
              Mission, Vision &amp; Philosophy
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              The pillars that guide our curriculum, daily interactions, and educational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-lg bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1b3832] mb-2">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To nurture sensitive, industrious, resilient, and morally grounded leaders who think critically, act ethically, and contribute constructively to the community and the nation.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-lg bg-[#f0f5f3] text-[#1b3832] border border-[#c4dbd5] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1b3832] mb-2">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To transform our institution into a vibrant center of holistic learning that unfolds the unique potential of each boy through academic rigor, sports, and value education.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-lg bg-[#f8f6f8] text-[#553f56] border border-[#e3dae4] flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1b3832] mb-2">Our Philosophy</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every child is unique. We kindle intellectual curiosity and moral depth, steering away from robotic memorization toward deep conceptual clarity and lifelong integrity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sponsoring Trust Governance */}
      <section id="governance" className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1b3832] text-white rounded-2xl border border-[#2f514b] p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="badge-editorial bg-[#fbf8f0] text-[#856124] border-none">
                Governance &amp; Stewardship
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
                Managed By Jivan Jagruti Trust
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The Jivan Jagruti Trust operates Tapovan Vatsalyadham School on non-profit, philanthropic principles. The managing committee ensures that modern school infrastructure, sports grounds, and qualified faculty serve the holistic growth of students without commercial distortion.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/assets/docs/trust-certificate.pdf" target="_blank" className="btn-accent text-xs font-semibold">
                  <FileText className="w-4 h-4 mr-1" /> Trust Registration Certificate
                </a>
                <a href="/assets/docs/smc-committee.pdf" target="_blank" className="btn-outline-white text-xs font-semibold">
                  <Users className="w-4 h-4 mr-1" /> School Management Committee (SMC)
                </a>
                <Link href="/mandatory-disclosure" className="btn-outline-white text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 mr-1" /> All CBSE Public Disclosures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
