import React, { useState, useEffect } from 'react';
import { ROADMAP_DATA, FOCUS_CARDS } from '../data';
import { CheckCircle, Clock, Sparkles, Layers, Cpu, Smartphone } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [currentDateString, setCurrentDateString] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('phase-0');

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).toUpperCase();
    setCurrentDateString(formatted);
  }, []);

  return (
    <section
      id="development"
      className="relative bg-[#080F1C] py-24 md:py-32 z-10 overflow-hidden border-t border-[#142238]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Width Status Banner */}
        <div
          id="development-status-banner"
          className="w-full bg-[#00FF88]/[0.04] border border-[#00FF88]/20 rounded-[6px] px-4 sm:px-6 py-3.5 mb-16 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
        >
          {/* Left */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#00FF88]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88] animate-pulse" />
            <span>SYSTEM STATUS: PRE-LAUNCH</span>
          </div>

          {/* Center */}
          <div className="font-display font-bold text-[13px] sm:text-[14px] text-[#EDF2F8] tracking-[1.5px]">
            ORBITAL AVTACHA — CORE ARCHITECTURE VALIDATION PHASE
          </div>

          {/* Right: Auto-populated current date */}
          <div className="font-mono text-[11px] text-[#7A8FA6] tracking-[2px] bg-[#0C1628] px-3 py-1 rounded-[3px] border border-[#142238]">
            {currentDateString || 'ACTIVE ARCHIVE'}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#00C2B3] tracking-[2px] mb-3">
            <span>[ SYSTEM TRAJECTORY &amp; ROADMAP ]</span>
          </div>
          <h2 className="font-display font-bold text-[34px] sm:text-[44px] text-[#EDF2F8] leading-tight tracking-[-1px]">
            Architected for Longevity.
            <br />
            <span className="text-[#C9A227]">Validated in Stages.</span>
          </h2>
        </div>

        {/* Roadmap Timeline (Horizontal on Desktop, Vertical on Mobile) */}
        <div id="roadmap-timeline" className="relative mb-20">
          {/* Horizontal Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#142238] z-0">
            {/* Active progress segment */}
            <div className="w-[18%] h-full bg-[#00C2B3] shadow-[0_0_10px_#00C2B3]" />
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {ROADMAP_DATA.map((phase, idx) => {
              const isActive = phase.status === 'ACTIVE';
              return (
                <div
                  key={phase.id}
                  id={`roadmap-node-${phase.id}`}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Indicator Pin */}
                  <div className="flex items-center gap-3 mb-4">
                    {isActive ? (
                      <div className="relative flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#00C2B3]/20 animate-ping absolute" />
                        <div className="w-5 h-5 rounded-full bg-[#00C2B3] shadow-[0_0_15px_#00C2B3] border-2 border-[#EDF2F8] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#040810]" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#0C1628] border-2 border-[#142238] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3D5470]" />
                      </div>
                    )}

                    <span
                      className={`font-mono text-[11px] tracking-[2px] ${
                        isActive ? 'text-[#00C2B3] font-bold' : 'text-[#3D5470]'
                      }`}
                    >
                      {phase.phase}
                    </span>
                  </div>

                  {/* Node Content Card */}
                  <div
                    className={`p-5 rounded-[6px] border text-left transition-all ${
                      isActive
                        ? 'bg-[#0C1628] border-[#00C2B3]/40 shadow-[0_4px_25px_rgba(0,194,179,0.08)]'
                        : 'bg-[#080F1C] border-[#142238]'
                    }`}
                  >
                    <div
                      className={`font-display font-bold text-[16px] mb-3 leading-snug ${
                        isActive ? 'text-[#EDF2F8]' : 'text-[#7A8FA6]'
                      }`}
                    >
                      {phase.title}
                    </div>

                    <ul className="space-y-2">
                      {phase.milestones.map((m, mIdx) => (
                        <li
                          key={mIdx}
                          className="flex items-start gap-2 font-mono text-[11px] text-[#7A8FA6]"
                        >
                          <span
                            className={`mt-1 w-1.5 h-1.5 rounded-full ${
                              isActive ? 'bg-[#00C2B3]' : 'bg-[#142238]'
                            }`}
                          />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Three Focus Cards Below Timeline */}
        <div className="pt-4">
          <div className="font-mono text-[11px] text-[#3D5470] tracking-[2px] text-left mb-6 uppercase">
            [ ACTIVE SPRINT FOCUS DOMAINS ]
          </div>

          <div
            id="roadmap-focus-cards-grid"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {FOCUS_CARDS.map((card, i) => {
              const icons = [Layers, Cpu, Smartphone];
              const IconComp = icons[i] || Layers;

              return (
                <div
                  key={card.id}
                  id={`focus-card-${card.id}`}
                  className="group bg-[#0C1628] border border-[#142238] hover:border-[#00C2B3]/50 rounded-[8px] p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,179,0.07)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-[#00C2B3] tracking-[2px]">
                        {card.number}
                      </span>
                      <IconComp className="w-5 h-5 text-[#3D5470] group-hover:text-[#00C2B3] transition-colors" />
                    </div>

                    <h3 className="font-display font-bold text-[20px] text-[#EDF2F8] group-hover:text-white mb-3">
                      {card.title}
                    </h3>

                    <p className="font-display font-light text-[14px] text-[#7A8FA6] leading-[1.8] mb-6">
                      {card.body}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#142238]/60">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-[#00C2B3]/80 bg-[#00C2B3]/[0.05] border border-[#00C2B3]/15 px-2 py-0.5 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
