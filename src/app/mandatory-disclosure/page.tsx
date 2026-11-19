'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Search, Download, Eye } from 'lucide-react';

export default function MandatoryDisclosurePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { id: 1, title: 'CBSE Affiliation Certificate', file: 'cbse-affiliation-certificate.pdf', category: 'Affiliation' },
    { id: 2, title: 'CBSE Grant Letter', file: 'grant-letter.pdf', category: 'Affiliation' },
    { id: 3, title: 'Mandatory Disclosure (Session 2027-28)', file: 'mandatory-disclosure-2025-26.pdf', category: 'Compliance' },
    { id: 4, title: 'Approved Fee Structure (Session 2027-28)', file: 'fee-structure-2025-26.pdf', category: 'Academics' },
    { id: 5, title: 'Annual Academic Calendar (Session 2027-28)', file: 'academic-calendar-2025-26.pdf', category: 'Academics' },
    { id: 6, title: 'Annual Holiday List (Session 2027-28)', file: 'annual-holiday-list-2025-26.pdf', category: 'Academics' },
    { id: 7, title: 'Prescribed Book List (Session 2027-28)', file: 'book-list-2025-26.pdf', category: 'Academics' },
    { id: 8, title: 'Staff Details & Teaching Faculty', file: 'staff-details.pdf', category: 'Faculty' },
    { id: 9, title: 'Fire Safety Certificate (School Campus)', file: 'fire-safety-certificate.pdf', category: 'Safety' },
    { id: 10, title: 'Land Certificate', file: 'land-certificate.pdf', category: 'Infrastructure & Facilities' },
    { id: 11, title: 'Building Safety Certificate', file: 'building-safety-certificate.pdf', category: 'Safety' },
    { id: 12, title: 'Health and Sanitary Certificate', file: 'health-sanitary-certificate.pdf', category: 'Hygiene' },
    { id: 13, title: 'Water Testing Report (Potable Water)', file: 'water-testing-report.pdf', category: 'Hygiene' },
    { id: 14, title: 'Self Certification Document', file: 'self-certification.pdf', category: 'Compliance' },
    { id: 15, title: 'Public Disclosure Document', file: 'public-disclosure.pdf', category: 'Compliance' },
    { id: 16, title: 'Parents Teachers Association (PTA)', file: 'pta-members.pdf', category: 'Committees' },
    { id: 17, title: 'School Management Committee (SMC)', file: 'smc-committee.pdf', category: 'Committees' },
    { id: 18, title: 'No Objection Certificate (NOC)', file: 'noc-certificate.pdf', category: 'Affiliation' },
    { id: 19, title: 'Trust Registration Certificate (Jivan Jagruti Trust)', file: 'trust-certificate.pdf', category: 'Governance' },
  ];

  const filteredDocs = documents.filter((doc) => {
    const term = searchTerm.toLowerCase();
    return doc.title.toLowerCase().includes(term) || doc.category.toLowerCase().includes(term);
  });

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#071326] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#d4af37] font-semibold mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Mandatory Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">CBSE Mandatory Public Disclosure</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Statutory compliance as mandated by the Central Board of Secondary Education (CBSE), New Delhi. All 19 official verified documents are publicly accessible below.
          </p>
        </div>
      </section>

      {/* General School Info Table */}
      <section className="py-16 bg-white border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <span className="badge-editorial">Section A</span>
            <h2 className="text-2xl font-extrabold text-[#0b1d3a] font-serif">General Institutional Information</h2>
          </div>

          <div className="overflow-x-auto rounded border border-[#e5e1d8] bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead className="bg-[#faf9f5] text-slate-700 font-bold uppercase text-[11px] border-b border-[#e5e1d8]">
                <tr>
                  <th className="py-3 px-4 w-16">Sr. No</th>
                  <th className="py-3 px-4 w-1/3">Statutory Item</th>
                  <th className="py-3 px-4">Institutional Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e1d8] text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">1</td>
                  <td className="py-3 px-4 font-semibold">Name of the School</td>
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">TAPOVAN VATSALYADHAM SCHOOL (English Medium)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">2</td>
                  <td className="py-3 px-4 font-semibold">Affiliation Category</td>
                  <td className="py-3 px-4 font-semibold text-[#8b6508]">CBSE Senior Secondary (English Medium) • Affiliation No. 430489</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">3</td>
                  <td className="py-3 px-4 font-semibold">Managing Trust</td>
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">Jivan Jagruti Trust (Non-Profit Educational Trust)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">4</td>
                  <td className="py-3 px-4 font-semibold">Complete Address with Pincode</td>
                  <td className="py-3 px-4">Tapovan Sanskar Pith, Amiyapur, Post - Sughad, Sabarmati-Gandhinagar Highway, Taluka Chandkheda, Gandhinagar, Gujarat - 382424</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">5</td>
                  <td className="py-3 px-4 font-semibold">Principal Contact</td>
                  <td className="py-3 px-4"><a href="tel:+919574523601" className="text-[#0b1d3a] font-bold hover:underline">+91 9574523601</a></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">6</td>
                  <td className="py-3 px-4 font-semibold">School Office Contact</td>
                  <td className="py-3 px-4"><a href="tel:+919737691800" className="text-[#0b1d3a] font-bold hover:underline">+91 9737691800</a></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-[#0b1d3a]">7</td>
                  <td className="py-3 px-4 font-semibold">Official Email</td>
                  <td className="py-3 px-4"><a href="mailto:vatsalyadham@gmail.com" className="text-[#0b1d3a] font-bold hover:underline">vatsalyadham@gmail.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documents Table with Instant Filter */}
      <section className="py-16 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="badge-editorial">Section B &amp; C</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d3a] font-serif mt-1">
                Official Documents &amp; Certificates ({filteredDocs.length} of {documents.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Click on any document below to view or download authentic verified copies.
              </p>
            </div>

            {/* Instant Real-Time Search */}
            <div className="w-full md:w-72 relative">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search documents (e.g. fire, fee)..." 
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded border border-[#e5e1d8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 focus:border-[#0b1d3a] shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div className="overflow-x-auto rounded border border-[#e5e1d8] bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead className="bg-[#0b1d3a] text-white text-[11px] uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">#</th>
                  <th className="py-3.5 px-4">Document Title</th>
                  <th className="py-3.5 px-4 hidden sm:table-cell">Category</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e1d8] text-slate-700">
                {filteredDocs.map((doc, idx) => (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-[#0b1d3a]">{idx + 1}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#0b1d3a] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{doc.title}</span>
                    </td>
                    <td className="py-3.5 px-4 hidden sm:table-cell text-xs">
                      <span className="badge-navy">{doc.category}</span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                      <a 
                        href={`/assets/docs/${doc.file}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-100 text-[#0b1d3a] hover:bg-[#0b1d3a] hover:text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> View
                      </a>
                      <a 
                        href={`/assets/docs/${doc.file}`} 
                        download
                        className="bg-[#fcf8ee] text-[#8b6508] border border-[#ebdcb8] hover:bg-[#b8860b] hover:text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredDocs.length === 0 && (
              <div className="p-8 text-center text-slate-500">
                <p className="text-xs font-semibold">No documents matched your search term.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
