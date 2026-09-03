import React from 'react';
import { STATS_DATA } from '../data';
import { AlertCircle, Clock, ShieldAlert, Radio, ArrowRight, Lock, Eye } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section
      id="story"
      className="relative bg-[#080F1C] border-t border-[#142238] py-24 md:py-32 z-10 overflow-hidden"
    >
      {/* Ambient Hebrew Watermark (Right Side, Partially Off-Screen) */}
      <div
        aria-hidden="true"
        className="absolute -right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-bold text-[140px] sm:text-[200px] text-[#00C2B3]/[0.04] -rotate-15 whitespace-nowrap z-0"
        dir="rtl"
      >
        אַבְטָחָה
      </div>

      <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Mono Incident Log Label */}
        <div
          id="story-mono-label"
          className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#E84040] bg-[#E84040]/[0.08] border border-[#E84040]/25 px-3 py-1.5 rounded-[3px] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E84040] animate-pulse" />
          <span className="tracking-[2px]">[ INCIDENT LOG // AFRICA CORRIDOR — FIELD RETROSPECTIVE ]</span>
        </div>

        {/* Headline */}
        <h2
          id="story-headline"
          className="font-display font-bold text-[34px] sm:text-[44px] md:text-[52px] text-[#EDF2F8] leading-[1.1] tracking-[-1.5px] mb-10"
        >
          Every Single Day, the Intelligence
          <br />
          Exists. Every Single Day, It
          <br />
          <span className="text-[#C9A227]">Arrives 20 Minutes Too Late.</span>
        </h2>

        {/* Story Body Text */}
        <div
          id="story-body-content"
          className="font-display font-light text-[17px] sm:text-[19px] text-[#7A8FA6] leading-[1.9] space-y-6"
        >
          <p>
            It is 8:40 PM on the outskirts of Port Harcourt along the East-West transit corridor.
            Amara is locking up her roadside chemist shop when two unmarked motorcycles pull into the unlit tree line 300 meters down the asphalt. Four men step out into the shadows with automatic rifles, dragging tree branches across the road to mount an ambush roadblock.
          </p>

          <p className="text-[#EDF2F8]/95 bg-[#0C1628]/80 border-l-2 border-[#C9A227] pl-5 py-3 rounded-r-[4px]">
            Amara sees everything. The keke driver turning around in panic sees it. The plantain seller packing her wooden tray sees it. Within two minutes, at least six civilians on that road know a deadly trap has just been set.
          </p>

          <p>
            Her hands tremble as she pulls out her phone. She wants to warn the approaching vehicles.
            She wants to sound the alarm. <span className="text-[#EDF2F8] font-normal">But what can she actually do?</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 text-[13px] font-mono">
            <div className="bg-[#040810] border border-[#142238] p-3.5 rounded-[4px]">
              <div className="text-[#E84040] font-bold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E84040]" />
                CALLING EMERGENCY?
              </div>
              <div className="text-[#7A8FA6] font-sans">
                The centralized line rings out or asks for landmark addresses that don&apos;t exist on municipal maps.
              </div>
            </div>

            <div className="bg-[#040810] border border-[#142238] p-3.5 rounded-[4px]">
              <div className="text-[#E84040] font-bold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E84040]" />
                POSTING ON SOCIAL?
              </div>
              <div className="text-[#7A8FA6] font-sans">
                Terror of reprisal. If syndicate informants trace her account or phone number, her family is targeted.
              </div>
            </div>

            <div className="bg-[#040810] border border-[#142238] p-3.5 rounded-[4px]">
              <div className="text-[#E84040] font-bold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E84040]" />
                WHATSAPP BROADCAST?
              </div>
              <div className="text-[#7A8FA6] font-sans">
                Lost in group chat noise, unverified, and arrives two hours after the road is already blocked.
              </div>
            </div>
          </div>

          <p>
            At 8:47 PM, a commercial 18-seater commuter bus rounds the bend at full speed. No driver warning. No spatial danger ping. No reroute beacon.
          </p>

          <p className="text-[#E84040] font-medium text-[20px] sm:text-[22px] tracking-tight">
            The bus drives straight into the ambush. Another headline. Another tragedy.
          </p>

          <p>
            This same scene repeats across Africa — on the Abuja-Kaduna highway, outside Goma in DRC, in the forest fringes of Borno, on the commercial bypasses of Nairobi, and in the quiet compounds of Aba.
            The intelligence is never missing. Ordinary human beings always see the spark before the fire starts.
          </p>

          <p className="pt-2">
            What was missing was security intelligence powered by <span className="text-[#00C2B3] font-mono font-medium">custom proprietary software</span>. When Amara uses Orbital, her verified information is securely maintained on our end, but anyone who receives the threat alert will never know who reported it—keeping her completely safe from reprisal. Within 320ms, our custom proprietary software fuses her report alongside solar CCTV optical alerts and acoustic gunshot sensors, sorts the kinetic priority, and broadcasts an automated reroute warning to every commuter vehicle before they ever approach the bend.{' '}
            <span
              id="story-emphasis-highlight"
              className="block font-display font-bold text-[24px] sm:text-[28px] text-[#00C2B3] mt-3 tracking-tight"
            >
              Orbital Avtacha turns fragmented silence into coordinated, sovereign protection.
            </span>
          </p>
        </div>

        {/* Stat Row — 4 Columns */}
        <div
          id="story-stats-grid"
          className="mt-16 sm:mt-20 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="relative pt-5"
            >
              {/* Thin top border: 2px solid #142238 with first 30px in #00C2B3 */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#142238]" />
              <div className="absolute top-0 left-0 w-[30px] h-[2px] bg-[#00C2B3]" />

              <div className="font-display font-bold text-[40px] sm:text-[48px] text-[#C9A227] tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] text-[#7A8FA6] tracking-[2px] uppercase">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-[12px] text-[#3D5470] mt-1.5 leading-snug">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

