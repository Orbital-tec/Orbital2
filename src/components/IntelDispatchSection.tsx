import React, { useState } from 'react';
import { INTEL_DISPATCHES } from '../data';
import { IntelDispatch } from '../types';
import { ArrowRight, BookOpen, Clock, FileText, Radio, Tag, User } from 'lucide-react';

export const IntelDispatchSection: React.FC = () => {
  const [selectedDispatch, setSelectedDispatch] = useState<IntelDispatch | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Development Update', 'Security Analysis', 'Community', 'Press'];

  const filteredDispatches = activeCategory === 'ALL'
    ? INTEL_DISPATCHES
    : INTEL_DISPATCHES.filter((d) => d.category === activeCategory);

  return (
    <section
      id="dispatch"
      className="relative bg-[#040810] py-24 md:py-32 z-10 overflow-hidden border-t border-[#142238]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-2xl">
            <div
              id="intel-dispatch-mono-label"
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#00C2B3] bg-[#00C2B3]/[0.08] border border-[#00C2B3]/25 px-3 py-1.5 rounded-[3px] mb-4"
            >
              <Radio className="w-3.5 h-3.5 text-[#00C2B3] animate-pulse" />
              <span className="tracking-[2px]">[ INTEL DISPATCH ]</span>
            </div>

            <h2
              id="intel-dispatch-headline"
              className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] text-[#EDF2F8] leading-[1.1] tracking-[-1px]"
            >
              Dispatches from
              <br />
              <span className="text-[#C9A227]">the Field.</span>
            </h2>

            <p className="font-display font-light text-[16px] text-[#7A8FA6] mt-4 leading-relaxed">
              Updates on Orbital Avtacha&apos;s development, the evolving security landscape
              across Africa, and the multi-sensor infrastructure we are building —
              one phase at a time.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[11px] px-3 py-1.5 rounded-[3px] border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00C2B3]/20 border-[#00C2B3] text-[#EDF2F8]'
                    : 'bg-[#0C1628] border-[#142238] text-[#7A8FA6] hover:text-[#EDF2F8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Three Blog Cards (Row) */}
        <div
          id="intel-dispatch-cards-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          {filteredDispatches.map((dispatch) => (
            <article
              key={dispatch.id}
              id={`dispatch-card-${dispatch.id}`}
              className="group bg-[#0C1628] border border-[#142238] hover:border-[#00C2B3]/50 rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,194,179,0.06)]"
            >
              <div>
                {/* 120px Top Graphic / Gradient Block */}
                <div
                  className="h-[120px] w-full relative overflow-hidden flex items-center justify-between px-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,194,179,0.2) 0%, rgba(8,15,28,0.95) 70%)',
                  }}
                >
                  <div className="absolute inset-0 bg-[#00C2B3]/[0.03] opacity-30" />
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#00C2B3] bg-[#040810]/80 border border-[#00C2B3]/30 px-2.5 py-1 rounded-[2px] tracking-widest">
                      {dispatch.category}
                    </span>
                  </div>

                  <span className="relative z-10 font-mono text-[10px] text-[#7A8FA6]">
                    {dispatch.readTime}
                  </span>
                </div>

                {/* Content Padding 24px */}
                <div className="p-6">
                  {/* Mono Date String */}
                  <div className="font-mono text-[10px] text-[#3D5470] tracking-[1.5px] mb-2.5">
                    {dispatch.dispatchNumber} — {dispatch.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-[18px] text-[#EDF2F8] group-hover:text-white leading-snug mb-3">
                    {dispatch.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-display font-light text-[14px] text-[#7A8FA6] leading-[1.7] line-clamp-3">
                    {dispatch.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedDispatch(dispatch)}
                  className="font-mono font-medium text-[12px] text-[#00C2B3] hover:text-[#00FFEB] flex items-center gap-1.5 group-hover:gap-2.5 transition-all focus:outline-none"
                >
                  <span>VIEW DISPATCH</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full Classified Intel Dispatch Reading Modal */}
        {selectedDispatch && (
          <div
            id="dispatch-modal-overlay"
            className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedDispatch(null)}
          >
            <div
              id="dispatch-modal-content"
              className="bg-[#0C1628] border border-[#00C2B3]/40 max-w-2xl w-full p-6 sm:p-8 rounded-[8px] shadow-[0_0_60px_rgba(0,194,179,0.2)] text-left relative my-auto animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#142238] pb-3 mb-6">
                <div className="font-mono text-[11px] text-[#00C2B3] tracking-[2px] flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>[ CLASSIFIED DISPATCH // {selectedDispatch.dispatchNumber} ]</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDispatch(null)}
                  className="text-[#7A8FA6] hover:text-[#EDF2F8] font-mono text-sm px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-[#7A8FA6] mb-4">
                <span>DATE: {selectedDispatch.date}</span>
                <span>•</span>
                <span>SECTOR: {selectedDispatch.category}</span>
                <span>•</span>
                <span>{selectedDispatch.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-[24px] sm:text-[28px] text-[#EDF2F8] mb-4 leading-tight">
                {selectedDispatch.title}
              </h3>

              <div className="text-[12px] font-mono text-[#C9A227] mb-6 flex items-center gap-2">
                <User className="w-3.5 h-3.5" />
                <span>AUTHOR: {selectedDispatch.author}</span>
              </div>

              <div className="space-y-4 font-display font-light text-[15px] text-[#7A8FA6] leading-[1.8] border-t border-[#142238] pt-6 max-h-[50vh] overflow-y-auto pr-2">
                {selectedDispatch.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#142238] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#3D5470]">
                  ORBITAL AVTACHA INTEL LOG // SIGNED &amp; SEALED
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedDispatch(null)}
                  className="bg-[#00C2B3] text-[#040810] font-display font-bold text-[12px] tracking-[1.5px] px-5 py-2.5 rounded-[4px] hover:bg-[#00FFEB] transition-colors"
                >
                  DISMISS
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
