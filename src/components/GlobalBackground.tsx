import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div
      id="global-background-canvas"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#040810]"
    >
      {/* Top Center Deep Blue Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[900px] max-w-[1600px]"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #0A1E35 0%, #040810 65%)',
        }}
      />

      {/* Ambient Teal Radial Accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #00C2B3 0%, transparent 70%)',
        }}
      />

      {/* Subtle 60px Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00C2B3 1px, transparent 1px),
            linear-gradient(to bottom, #00C2B3 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Three Permanent Large Concentric Orbital Circles at Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] flex items-center justify-center">
        {/* Ring 1 - 800px diameter (400px radius) */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full border border-[#00C2B3]/[0.04] animate-spin-40s"
          style={{ borderStyle: 'solid' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00C2B3]/20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00C2B3]/20" />
        </div>

        {/* Ring 2 - 1300px diameter (650px radius) */}
        <div
          className="absolute w-[1300px] h-[1300px] rounded-full border border-[#00C2B3]/[0.035] animate-spin-60s-reverse"
          style={{ borderStyle: 'solid' }}
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C9A227]/20" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00C2B3]/20" />
        </div>

        {/* Ring 3 - 1800px diameter (900px radius) */}
        <div
          className="absolute w-[1800px] h-[1800px] rounded-full border border-[#00C2B3]/[0.025] animate-spin-40s"
          style={{ borderStyle: 'dashed', borderDasharray: '4 12' }}
        />
      </div>

      {/* Floating Edge Coordinate Strings */}
      <div className="absolute top-24 left-8 font-mono text-[11px] text-[#00C2B3] opacity-20 tracking-[0.25em] select-none">
        04°51&apos;N 007°02&apos;E // PORT HARCOURT_ORIGIN
      </div>

      <div className="absolute top-36 right-8 font-mono text-[11px] text-[#7A8FA6] opacity-15 tracking-[0.25em] select-none hidden md:block">
        ALT: 408KM // APOGEE: 422KM
      </div>

      <div className="absolute bottom-24 left-8 font-mono text-[11px] text-[#7A8FA6] opacity-15 tracking-[0.25em] select-none hidden md:block">
        ORBITAL PERIOD: 92.68MIN // ECCENTRICITY: 0.0008
      </div>

      <div className="absolute bottom-12 right-8 font-mono text-[11px] text-[#00FF88] opacity-20 tracking-[0.25em] select-none">
        THREAT LEVEL: MONITORING // LIVE_FEED
      </div>
    </div>
  );
};
