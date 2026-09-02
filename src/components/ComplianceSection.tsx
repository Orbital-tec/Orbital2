import React from 'react';
import { COMPLIANCE_BADGES } from '../data';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section
      id="compliance"
      className="relative bg-[#080F1C] py-20 z-10 overflow-hidden border-t border-[#142238]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            id="compliance-mono-label"
            className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#00C2B3] bg-[#00C2B3]/[0.08] border border-[#00C2B3]/25 px-3 py-1 rounded-[3px] mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#00C2B3]" />
            <span className="tracking-[2px]">[ SECURITY &amp; COMPLIANCE STANDARDS ]</span>
          </div>

          <p className="font-display font-light text-[16px] sm:text-[18px] text-[#7A8FA6] leading-[1.8]">
            &ldquo;Orbital Avtacha is being engineered to meet the highest international
            security and data protection standards from architecture upward —
            not as an afterthought.&rdquo;
          </p>
        </div>

        {/* 5 Compliance Badges in Horizontal Row */}
        <div
          id="compliance-badges-row"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left"
        >
          {COMPLIANCE_BADGES.map((badge) => (
            <div
              key={badge.id}
              id={`compliance-badge-${badge.id}`}
              className="bg-[#0C1628] border border-[#142238] hover:border-[#00C2B3]/30 rounded-[6px] px-5 py-4 flex flex-col justify-between transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#00C2B3] shrink-0" />
                <span className="font-mono text-[11px] text-[#EDF2F8] font-bold tracking-wider leading-snug">
                  {badge.title}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#142238]/60 mt-1">
                <span className="font-mono text-[10px] text-[#3D5470] tracking-[1.5px] uppercase">
                  {badge.status}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C2B3]/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
