'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Search, Download, Eye, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

interface DocItem {
  id: number;
  title: string;
  file: string;
  group: 'B' | 'C' | 'D' | 'E';
  category: string;
  desc?: string;
}

export default function MandatoryDisclosurePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const docGroups = [
    { key: 'all', label: 'All Documents (19)' },
    { key: 'B', label: 'Group B: Affiliation & Legal' },
    { key: 'C', label: 'Group C: Safety & Campus' },
    { key: 'D', label: 'Group D: Academic (2026–27)' },
    { key: 'E', label: 'Group E: Staff & Committees' },
  ];

  const documents: DocItem[] = [
    // Group B: Affiliation & Legal
    { id: 1, title: 'CBSE Affiliation Certificate', file: 'cbse-affiliation-certificate.pdf', group: 'B', category: 'Affiliation', desc: 'Official CBSE Affiliation certificate grant' },
    { id: 2, title: 'CBSE Grant Letter', file: 'grant-letter.pdf', group: 'B', category: 'Affiliation', desc: 'Central Board sanction and school approval letter' },
    { id: 3, title: 'State No Objection Certificate (NOC)', file: 'noc-certificate.pdf', group: 'B', category: 'Affiliation', desc: 'Gujarat State Education Dept NOC' },
    { id: 4, title: 'Trust Registration Certificate (Jivan Jagruti Trust)', file: 'trust-certificate.pdf', group: 'B', category: 'Legal Trust', desc: 'Public Charitable Trust Deed registration' },

    // Group C: Safety & Infrastructure
    { id: 5, title: 'Building Safety Certificate', file: 'building-safety-certificate.pdf', group: 'C', category: 'Campus Safety', desc: 'Structural stability & building fitness report' },
    { id: 6, title: 'Fire Safety Certificate (School Campus)', file: 'fire-safety-certificate.pdf', group: 'C', category: 'Fire Safety', desc: 'Fire & Emergency Services safety approval' },
    { id: 7, title: 'Registered Land Certificate', file: 'land-certificate.pdf', group: 'C', category: 'Land Record', desc: '19,525.28 sq. m (~4.82 acres) registered campus title' },
    { id: 8, title: 'Potable Drinking Water Testing Report', file: 'water-testing-report.pdf', group: 'C', category: 'Water Hygiene', desc: 'Public health laboratory potable water test' },
    { id: 9, title: 'Health and Sanitary Inspection Certificate', file: 'health-sanitary-certificate.pdf', group: 'C', category: 'Sanitary & Health', desc: 'Campus hygiene and sanitary condition certificate' },

    // Group D: Academic Policies & Details (Session 2026-27)
    { id: 10, title: 'Approved Fee Structure (Session 2026-27)', file: 'fee-structure-2025-26.pdf', group: 'D', category: 'Fee Schedule', desc: 'Fee Regulatory Committee approved fee matrix' },
    { id: 11, title: 'Annual Academic Calendar (Session 2026-27)', file: 'academic-calendar-2025-26.pdf', group: 'D', category: 'Calendar', desc: 'Term dates, exams & schedule for 2026–27' },
    { id: 12, title: 'Annual Holiday List (Session 2026-27)', file: 'annual-holiday-list-2025-26.pdf', group: 'D', category: 'Holidays', desc: 'Official holiday and vacation schedule' },
    { id: 13, title: 'Prescribed NCERT Book List (Session 2026-27)', file: 'book-list-2025-26.pdf', group: 'D', category: 'Textbooks', desc: 'NCERT book declarations Std 1 to 12' },

    // Group E: Staff & Committee Governance
    { id: 14, title: 'Staff Matrix & Teaching Faculty Details', file: 'staff-details.pdf', group: 'E', category: 'Faculty Matrix', desc: 'Teacher qualifications and designations' },
    { id: 15, title: 'School Management Committee (SMC)', file: 'smc-committee.pdf', group: 'E', category: 'Governance SMC', desc: 'SMC member roster and constitution' },
    { id: 16, title: 'Parents Teachers Association (PTA) Members', file: 'pta-members.pdf', group: 'E', category: 'PTA Committee', desc: 'Elected PTA member representatives' },
    { id: 17, title: 'CBSE Mandatory Public Disclosure (Appendix IX)', file: 'mandatory-disclosure-2025-26.pdf', group: 'E', category: 'Compliance', desc: 'Official CBSE Appendix IX format declaration' },
    { id: 18, title: 'Institutional Self-Certification Document', file: 'self-certification.pdf', group: 'E', category: 'Self-Certification', desc: 'Principal & Manager statutory affirmation' },
    { id: 19, title: 'Public Disclosure Compliance Document', file: 'public-disclosure.pdf', group: 'E', category: 'Compliance', desc: 'Public statutory compliance record' },
  ];

  const filteredDocs = documents.filter((doc) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = doc.title.toLowerCase().includes(term) || doc.category.toLowerCase().includes(term);
    const matchesGroup = selectedGroup === 'all' || doc.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1b3832] text-white py-16 sm:py-20 border-b border-[#233d38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#dfc488] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Mandatory Public Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">CBSE Mandatory Public Disclosure</h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Statutory compliance as mandated by the Central Board of Secondary Education (CBSE), New Delhi. All 19 official verified documents are publicly accessible below.
          </p>
        </div>
      </section>

      {/* Group A: General Institutional Information Table */}
      <section className="py-16 bg-white border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <span className="badge-editorial">Group A</span>
            <h2 className="text-2xl font-extrabold text-[#1b3832] font-serif">General Institutional Information</h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e5e1d8] bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead className="bg-[#faf9f5] text-slate-700 font-bold uppercase text-[11px] border-b border-[#e5e1d8]">
                <tr>
                  <th className="py-3.5 px-4 w-16">Sr. No</th>
                  <th className="py-3.5 px-4 w-1/3">Statutory Item</th>
                  <th className="py-3.5 px-4">Institutional Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e1d8] text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">1</td>
                  <td className="py-3 px-4 font-semibold">Name of the School</td>
                  <td className="py-3 px-4 font-bold text-[#1b3832]">TAPOVAN VATSALYADHAM SCHOOL (ENGLISH MEDIUM)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">2</td>
                  <td className="py-3 px-4 font-semibold">CBSE Affiliation Status</td>
                  <td className="py-3 px-4 font-semibold text-[#856124]">
                    Affiliation No. <strong>430592</strong> • School Code: <strong>11722</strong> (Affiliated since 2025)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">3</td>
                  <td className="py-3 px-4 font-semibold">School Category &amp; Medium</td>
                  <td className="py-3 px-4 font-bold text-[#1b3832]">
                    Boys Day School • English Medium • Std 1 to 12 (Commerce Stream Only)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">4</td>
                  <td className="py-3 px-4 font-semibold">Managing Trust</td>
                  <td className="py-3 px-4 font-bold text-[#1b3832]">JIVAN JAGRUTI TRUST</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">5</td>
                  <td className="py-3 px-4 font-semibold">Campus Address</td>
                  <td className="py-3 px-4">
                    Tapovan Sanskar Pith, Near Tapovan Circle, Amiyapur, Gandhinagar, Gujarat 382424
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">6</td>
                  <td className="py-3 px-4 font-semibold">Principal Name &amp; Contact</td>
                  <td className="py-3 px-4">
                    Mrs. Rupa Chirag Shah (M.Sc., M.Ed.) • <a href="tel:+919574523601" className="text-[#1b3832] font-bold hover:underline">+91 9574523601</a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">7</td>
                  <td className="py-3 px-4 font-semibold">School Office Contact</td>
                  <td className="py-3 px-4">
                    <a href="tel:+919737691800" className="text-[#1b3832] font-bold hover:underline">+91 9737691800</a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#1b3832]">8</td>
                  <td className="py-3 px-4 font-semibold">Official Email</td>
                  <td className="py-3 px-4">
                    <a href="mailto:vatsalyadham@gmail.com" className="text-[#1b3832] font-bold hover:underline">vatsalyadham@gmail.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Groups B, C, D, E: Statutory Documents Section */}
      <section className="py-16 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="badge-editorial">Groups B, C, D &amp; E</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b3832] font-serif mt-1">
                Official Certificates &amp; Compliance Documents
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {filteredDocs.length} of {documents.length} verified public documents.
              </p>
            </div>

            {/* Instant Real-Time Search */}
            <div className="w-full md:w-72 relative">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search documents (e.g. fire, fee)..." 
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-lg border border-[#e5e1d8] bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3832]/20 focus:border-[#1b3832] shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Group Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {docGroups.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setSelectedGroup(g.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedGroup === g.key
                    ? 'bg-[#1b3832] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-[#e5e1d8] hover:bg-slate-100'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* 1. Desktop Presentation: Elegant Table Rows (Visible on md and above) */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-[#e5e1d8] bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead className="bg-[#1b3832] text-white text-[11px] uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">#</th>
                  <th className="py-3.5 px-4">Document Title</th>
                  <th className="py-3.5 px-4 w-28">Group</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e1d8] text-slate-700">
                {filteredDocs.map((doc, idx) => (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-[#1b3832]">{idx + 1}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#1b3832]">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-[#856124] shrink-0" />
                        <div>
                          <div>{doc.title}</div>
                          {doc.desc && <div className="text-[11px] text-slate-400 font-normal">{doc.desc}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-bold text-slate-600">
                      Group {doc.group}
                    </td>
                    <td className="py-3.5 px-4 text-xs">
                      <span className="badge-editorial">{doc.category}</span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                      <a 
                        href={`/assets/docs/${doc.file}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-100 text-[#1b3832] hover:bg-[#1b3832] hover:text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> View
                      </a>
                      <a 
                        href={`/assets/docs/${doc.file}`} 
                        download
                        className="bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] hover:bg-[#c29b38] hover:text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 2. Mobile Presentation: Touch-Friendly Responsive Cards (Visible on mobile only) */}
          <div className="md:hidden space-y-3">
            {filteredDocs.map((doc, idx) => (
              <div
                key={doc.id}
                className="bg-white p-4 rounded-xl border border-[#e5e1d8] shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        #{idx + 1} • Group {doc.group}
                      </span>
                      <span className="badge-editorial text-[9px] py-0 px-1.5">
                        {doc.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#1b3832] leading-snug">
                      {doc.title}
                    </h3>
                    {doc.desc && (
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {doc.desc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e5e1d8] grid grid-cols-2 gap-2">
                  <a
                    href={`/assets/docs/${doc.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-100 text-[#1b3832] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-slate-200"
                  >
                    <Eye className="w-3.5 h-3.5" /> View
                  </a>
                  <a
                    href={`/assets/docs/${doc.file}`}
                    download
                    className="w-full bg-[#fbf8f0] text-[#856124] border border-[#ebdbb4] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-[#ebdbb4]"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredDocs.length === 0 && (
            <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-[#e5e1d8]">
              <p className="text-xs font-semibold">No documents matched your search or group filter.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
