import React from 'react';
import Link from 'next/link';
import { Target, Lightbulb, HeartHandshake, Eye, FileText, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us | Tapovan Vatsalyadham School (English Medium)',
  description: 'History, ethos, philosophy, and governance of Tapovan Vatsalyadham School, Gandhinagar. Managed by Jivan Jagruti Trust.',
};

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">About Tapovan Vatsalyadham</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Fostering timeless cultural values, academic excellence, and holistic character as a premier CBSE Day School under the aegis of Jivan Jagruti Trust.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-editorial">Our Foundation</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif leading-tight">
                Where Character Precedes Career: Education as a Sacred Trust
              </h2>
              <div className="inline-block bg-[#fdfaf2] text-[#8b6508] border border-[#ebdcb8] text-xs font-serif font-bold px-3 py-1 rounded">
                Motto: धर्मो रक्षति रक्षितः
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>Tapovan Vatsalyadham School (English Medium)</strong> is a premier CBSE affiliated English medium Boys Day School (Affiliation No. 430592 • School Code 11722) located near Tapovan Circle in Amiyapur, Gandhinagar. Inspired by timeless Indian values and operating under the philanthropic stewardship of the <strong>Jivan Jagruti Trust</strong>, we present a balanced synthesis of academic excellence, athletic vitality, and ethical character formation for Std 1 to 12 (Commerce Stream).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Under the academic leadership of Principal <strong>Mrs. Rupa Chirag Shah (M.Sc., M.Ed.)</strong>, our educational approach is designed to cultivate independent inquiry, mental resilience, and global competence in young men without losing connection with their cultural roots.
              </p>
              <div className="p-4 bg-[#fcf8ee] rounded border border-[#ebdcb8] text-xs sm:text-sm text-[#7a5907] font-serif italic">
                &quot;To shape academically accomplished young men who think with clarity, are future fluent, stand strong and resilient and lead beyond self — living Bhakti, Maitri, Shuddhi and Shaurya through their choices and actions.&quot;
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded overflow-hidden shadow-md border border-[#e5e1d8] bg-slate-100">
                <img 
                  src="/assets/images/campus_assembly.jpg" 
                  alt="Students in Morning Prayer Assembly" 
                  loading="lazy"
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section id="vision" className="py-20 bg-[#faf9f5] border-t border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="badge-editorial">Our Guiding Compass</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1d3a] font-serif">
              Mission, Vision, Philosophy &amp; Promise
            </h2>
            <p className="text-slate-600 text-sm">
              The foundational pillars that guide our daily pedagogical practices and student mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded bg-[#fdfaf2] text-[#8b6508] border border-[#ebdcb8] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0b1d3a] mb-2">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                &quot;To produce the sensitive, laborious, dynamic, patriotic and spiritual leaders for bringing up perfect global amity.&quot;
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded bg-slate-100 text-[#0b1d3a] border border-slate-200 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0b1d3a] mb-2">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                &quot;To transform the school into a vibrant centre of multifarious activities aiming to ignite minds for unfolding youth potentials.&quot;
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0b1d3a] mb-2">Our Philosophy</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                &quot;Every child is unique and creative as well. We strive sincerely to kindle in him the flame of knowledge and wisdom. We are reluctant to produce robots but strain every nerve to produce the intellectuals who possess depth of virtues and height of knowledge.&quot;
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded bg-[#f7f5ef] text-[#0b1d3a] border border-[#ded9cb] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-[#8b6508]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0b1d3a] mb-2">Our Promise</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                &quot;We believe in selfless service, compassion, generosity, tolerance, honesty, and truthfulness. We foster in students the moral values so they lead a meaningful life of spiritual commitments and ethical perfection.&quot;
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Governance */}
      <section id="governance" className="py-20 bg-white border-t border-[#e5e1d8] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1d3a] text-white rounded border border-slate-700 p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="badge-editorial bg-[#fdfaf2] text-[#8b6508]">
                Leadership &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
                Managed By Jivan Jagruti Trust
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Jivan Jagruti Trust was established with the pious mission of uplifting youth through value-infused education. Backed by visionary educationists, the school functions under strict non-profit governance: <em>&quot;People not profits – education is a sacred responsibility, not a commercial enterprise.&quot;</em>
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/assets/docs/trust-certificate.pdf" target="_blank" className="btn-accent text-xs font-semibold">
                  <FileText className="w-4 h-4 mr-1" /> View Trust Registration Certificate
                </a>
                <a href="/assets/docs/smc-committee.pdf" target="_blank" className="btn-outline-white text-xs font-semibold">
                  <Users className="w-4 h-4 mr-1" /> School Management Committee (SMC)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
