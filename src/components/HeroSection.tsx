import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Radio, Shield, Zap } from 'lucide-react';
import { OrbitalLogo } from './OrbitalLogo';

export const HeroSection: React.FC = () => {
  const [telemetryCount, setTelemetryCount] = useState(14820);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[100px] pb-16 lg:py-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-100px)]">
        {/* LEFT COLUMN (55% / 7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 max-w-2xl">
          {/* Primary Headline */}
          <h1
            id="hero-primary-headline"
            className="font-display font-bold text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[82px] text-white leading-[0.95] tracking-[-3px]"
          >
            AFRICA&apos;S
            <br />
            SOVEREIGN SECURITY
            <br />
            INTELLIGENCE NETWORK
          </h1>

          {/* Accent Rule Beneath Headline */}
          <div className="flex items-center w-[140px] h-[3px] my-5 rounded-full overflow-hidden shadow-[0_0_15px_#00FFE0]" aria-hidden="true">
            <div className="w-1/3 h-full bg-[#00FFE0]" />
            <div className="w-1/3 h-full bg-[#00FF88]" />
            <div className="w-1/3 h-full bg-[#FFD700]" />
          </div>

          {/* Subheadline */}
          <p
            id="hero-subheadline"
            className="font-display font-light text-[17px] sm:text-[18px] text-[#7A8FA6] leading-[1.8] max-w-[500px]"
          >
            Protecting vulnerable communities and critical assets across
            Sub-Saharan Africa from kidnapping, armed conflict, and civilian
            threat — using the intelligence that has always existed in the hands of ordinary people.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              id="hero-cta-briefing"
              href="https://wa.link/l97xy0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#F0C84E] text-[#040810] font-display font-bold text-[13px] tracking-[2px] px-7 py-3.5 rounded-[4px] shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-200"
            >
              <span>REQUEST BRIEFING</span>
              <ArrowRight className="w-4 h-4 text-[#040810]" />
            </a>

            <a
              id="hero-cta-demo"
              href="https://orbital-avtach.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#142238] bg-[#080F1C]/60 text-[#7A8FA6] hover:text-[#EDF2F8] hover:border-[#00C2B3] hover:bg-[#00C2B3]/[0.05] font-display font-medium text-[13px] tracking-[1.5px] px-6 py-3.5 rounded-[4px] transition-all duration-200"
            >
              <span>EXPLORE DEMO</span>
              <ArrowUpRight className="w-4 h-4 text-[#00C2B3]" />
            </a>
          </div>

          {/* Live Status Indicator */}
          <div
            id="hero-live-status"
            className="pt-2 flex flex-wrap items-center gap-4 font-mono text-[11px] text-[#3D5470]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88]" />
              <span className="text-[#7A8FA6] font-medium">SYSTEM CORE:</span>
              <span className="text-[#00FF88]">AI-powered Brain³ OS</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[#3D5470] border-l border-[#142238] pl-4">
              <span>ACTIVE TELEMETRY PINGS:</span>
              <span className="text-[#00C2B3] font-mono">{telemetryCount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (45% / 5 cols on lg) — Hero Visual Layered Stack */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
          {/* Layer 1: Radial Glow Background */}
          <div
            className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle 300px at center, rgba(0,194,179,0.18) 0%, rgba(8,15,28,0) 70%)',
            }}
          />

          {/* Layer 5 (Topmost Wireframe Drone Silhouette SVG, upper-right) */}
          <div
            className="absolute top-2 right-2 sm:right-6 w-24 h-24 pointer-events-none opacity-20 text-[#00C2B3]"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="1">
              <circle cx="50" cy="50" r="10" strokeDasharray="2 2" />
              <line x1="20" y1="20" x2="80" y2="80" />
              <line x1="80" y1="20" x2="20" y2="80" />
              <circle cx="20" cy="20" r="8" />
              <circle cx="80" cy="20" r="8" />
              <circle cx="20" cy="80" r="8" />
              <circle cx="80" cy="80" r="8" />
              <path d="M 45 50 L 55 50 M 50 45 L 50 55" />
            </svg>
            <div className="text-[9px] font-mono text-[#00C2B3] tracking-widest text-center mt-1">UAV.DRONE_04</div>
          </div>

          {/* Layer 3: Three Separate Rotating Orbital Rings with Pulsing Nodes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1: 15s Clockwise with 4 nodes */}
            <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full border border-[#00C2B3]/25 animate-spin-15s">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00FFEB] shadow-[0_0_10px_#00FFEB] animate-pulse-glow" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00C2B3] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00C2B3] animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00FFEB] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Ring 2: 25s Counter-Clockwise with 3 gold nodes */}
            <div
              className="absolute w-[260px] sm:w-[330px] h-[260px] sm:h-[330px] rounded-full border border-[#C9A227]/25 animate-spin-25s-reverse"
              style={{ borderStyle: 'dashed', borderDasharray: '6 8' }}
            >
              <div className="absolute top-6 left-12 w-2.5 h-2.5 rounded-full bg-[#F0C84E] shadow-[0_0_8px_#F0C84E] animate-signal-pulse" />
              <div className="absolute bottom-8 right-14 w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-signal-pulse" style={{ animationDelay: '0.7s' }} />
              <div className="absolute top-1/2 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-[#F0C84E] animate-signal-pulse" style={{ animationDelay: '1.3s' }} />
            </div>

            {/* Ring 3: 40s Clockwise */}
            <div className="absolute w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full border border-[#1E3A5F]/40 animate-spin-40s">
              <div className="absolute top-1/4 right-6 w-2 h-2 rounded-full bg-[#00C2B3]/80" />
              <div className="absolute bottom-1/4 left-6 w-2 h-2 rounded-full bg-[#00C2B3]/80" />
            </div>
          </div>

          {/* Layer 2: Core Rotating Orbital Avtacha Logo (320px) */}
          <div className="relative z-10 p-4">
            <OrbitalLogo size={280} className="sm:w-[320px] sm:h-[320px]" animate={true} withGlow={true} />
          </div>

          {/* Layer 4: Floating Telemetry Data Tags */}
          {/* Top-Right Tag */}
          <div
            id="hero-tag-coordinates"
            className="absolute top-4 right-0 sm:-right-4 bg-[#0C1628]/90 border border-[#142238] backdrop-blur-md px-3 py-1.5 rounded-[4px] font-mono text-[10px] text-[#00C2B3] tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.6)] hidden xs:block"
          >
            <div className="text-[#3D5470] text-[8px] uppercase">TARGET COORDINATES</div>
            <div>LAT: 04.8156° N</div>
            <div>LNG: 007.0498° E</div>
          </div>

          {/* Left Threat Intel Tag */}
          <div
            id="hero-tag-threat"
            className="absolute top-1/2 -left-2 sm:-left-8 -translate-y-1/2 bg-[#0C1628]/95 border border-[#E84040]/40 backdrop-blur-md px-3 py-1.5 rounded-[4px] font-mono text-[10px] text-[#EDF2F8] tracking-wider shadow-[0_0_15px_rgba(232,64,64,0.15)] flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#E84040] animate-ping" />
            <div>
              <span className="text-[#E84040] font-bold">Brain³ OS:</span> ACTIVE
            </div>
          </div>

          {/* Right Encryption Tag */}
          <div
            id="hero-tag-encryption"
            className="absolute bottom-1/3 -right-2 sm:-right-6 bg-[#0C1628]/90 border border-[#C9A227]/30 backdrop-blur-md px-3 py-1.5 rounded-[4px] font-mono text-[10px] text-[#C9A227] tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-[#C9A227]" />
              <span>AI-POWERED Brain³ OS</span>
            </div>
          </div>

          {/* Bottom-Left Nodes Active Tag */}
          <div
            id="hero-tag-nodes"
            className="absolute -bottom-4 left-0 sm:-left-4 bg-[#0C1628]/90 border border-[#142238] backdrop-blur-md px-3 py-1.5 rounded-[4px] font-mono text-[10px] text-[#7A8FA6] tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <div className="text-[#00FF88] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
              <span>NODES: ACTIVE</span>
            </div>
            <div className="text-[#00C2B3]">COVERAGE: EXPANDING</div>
          </div>
        </div>
      </div>
    </section>
  );
};
