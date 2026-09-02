import React from 'react';

interface OrbitalLogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
  showNodes?: boolean;
  withGlow?: boolean;
}

export const OrbitalLogo: React.FC<OrbitalLogoProps> = ({
  size = 40,
  className = '',
  animate = true,
  showNodes = true,
  withGlow = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Backlight Glow */}
      {withGlow && (
        <div
          className="absolute inset-0 rounded-full blur-[20px] opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,194,179,0.35) 0%, rgba(201,162,39,0.15) 50%, transparent 80%)',
          }}
        />
      )}

      <svg
        viewBox="0 0 400 400"
        width={size}
        height={size}
        className={`w-full h-full ${animate ? 'animate-spin-20s' : ''}`}
        style={{ transformOrigin: 'center' }}
      >
        <defs>
          {/* Metallic Silver Gradient */}
          <linearGradient id="silverRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#A0B8D0" />
            <stop offset="60%" stopColor="#3D5470" />
            <stop offset="100%" stopColor="#E2EAF4" />
          </linearGradient>

          {/* Electric Teal Gradient */}
          <linearGradient id="tealRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFEB" />
            <stop offset="50%" stopColor="#00C2B3" />
            <stop offset="100%" stopColor="#005B54" />
          </linearGradient>

          {/* Core Cybernetic Gradient */}
          <linearGradient id="coreIrisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#250954" />
            <stop offset="50%" stopColor="#0D6E8A" />
            <stop offset="100%" stopColor="#00C2B3" />
          </linearGradient>

          {/* Spherical Node Gradient */}
          <radialGradient id="sphereNodeGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#687F99" />
            <stop offset="40%" stopColor="#2A374A" />
            <stop offset="85%" stopColor="#080F1C" />
            <stop offset="100%" stopColor="#02050A" />
          </radialGradient>

          {/* Core Lens Glow Filter */}
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ring 4 (Outermost Silver & Teal Double Ring) */}
        <circle
          cx="200"
          cy="200"
          r="174"
          fill="none"
          stroke="url(#silverRingGrad)"
          strokeWidth="3.5"
        />
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="url(#tealRingGrad)"
          strokeWidth="4"
          opacity="0.85"
        />

        {/* Ring 3 */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="url(#silverRingGrad)"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="200"
          r="134"
          fill="none"
          stroke="url(#tealRingGrad)"
          strokeWidth="3.5"
          opacity="0.9"
        />

        {/* Ring 2 */}
        <circle
          cx="200"
          cy="200"
          r="104"
          fill="none"
          stroke="url(#silverRingGrad)"
          strokeWidth="2.5"
        />
        <circle
          cx="200"
          cy="200"
          r="98"
          fill="none"
          stroke="url(#tealRingGrad)"
          strokeWidth="3"
        />

        {/* Ring 1 (Inner) */}
        <circle
          cx="200"
          cy="200"
          r="72"
          fill="none"
          stroke="url(#silverRingGrad)"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="200"
          r="66"
          fill="none"
          stroke="url(#tealRingGrad)"
          strokeWidth="2.5"
          opacity="0.95"
        />

        {/* Cybernetic Gear Aperture Core */}
        <g transform="translate(200, 200)">
          {/* Outer Gear Teeth / Iris Petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <path
              key={deg}
              d="M -14 -46 L 14 -46 L 10 -36 L -10 -36 Z"
              fill="#00C2B3"
              opacity="0.9"
              transform={`rotate(${deg})`}
            />
          ))}

          {/* Secondary Interlocking Gear Teeth (Purple/Deep Blue) */}
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
            <path
              key={deg}
              d="M -12 -42 L 12 -42 L 8 -34 L -8 -34 Z"
              fill="#522794"
              opacity="0.85"
              transform={`rotate(${deg})`}
            />
          ))}

          {/* Core Disk with Cyan/Purple Gradient */}
          <circle cx="0" cy="0" r="38" fill="url(#coreIrisGrad)" />
          <circle cx="0" cy="0" r="32" fill="#061A2B" stroke="#00C2B3" strokeWidth="1.5" />

          {/* Center Holographic Sphere */}
          <circle cx="0" cy="0" r="22" fill="#00C2B3" opacity="0.3" filter="url(#coreGlow)" />
          <circle cx="0" cy="0" r="16" fill="#EDF2F8" opacity="0.8" />
          <circle cx="0" cy="0" r="12" fill="#00FFEB" />

          {/* Micro Code Rings */}
          <circle cx="0" cy="0" r="26" fill="none" stroke="#00FFEB" strokeWidth="1" strokeDasharray="3 3" />
        </g>

        {/* Orbital Spherical Nodes with Sensor Slots (Arranged on concentric tracks) */}
        {showNodes && (
          <g id="orbital-nodes">
            {/* Outermost Ring Nodes (Radius 171) */}
            {[
              { x: 200, y: 29 },   // Top
              { x: 200, y: 371 },  // Bottom
              { x: 29, y: 200 },   // Left
              { x: 371, y: 200 },  // Right
            ].map((node, i) => (
              <g key={`out-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                <circle cx="0" cy="0" r="14" fill="url(#sphereNodeGrad)" stroke="#A0B8D0" strokeWidth="1.2" />
                <rect x="-6" y="-1.5" width="12" height="3" rx="0.5" fill="#EDF2F8" opacity="0.9" />
              </g>
            ))}

            {/* Ring 3 Nodes (Radius 137) */}
            {[
              { x: 200, y: 63 },
              { x: 200, y: 337 },
              { x: 63, y: 200 },
              { x: 337, y: 200 },
            ].map((node, i) => (
              <g key={`r3-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                <circle cx="0" cy="0" r="13" fill="url(#sphereNodeGrad)" stroke="#A0B8D0" strokeWidth="1" />
                <rect x="-5.5" y="-1.2" width="11" height="2.4" rx="0.5" fill="#EDF2F8" opacity="0.9" />
              </g>
            ))}

            {/* Ring 2 Nodes (Radius 101) */}
            {[
              { x: 200, y: 99 },
              { x: 200, y: 301 },
              { x: 99, y: 200 },
              { x: 301, y: 200 },
            ].map((node, i) => (
              <g key={`r2-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                <circle cx="0" cy="0" r="12" fill="url(#sphereNodeGrad)" stroke="#A0B8D0" strokeWidth="1" />
                <rect x="-5" y="-1" width="10" height="2" rx="0.5" fill="#EDF2F8" opacity="0.85" />
              </g>
            ))}

            {/* Ring 1 Nodes (Diagonal / 45deg Offset on Inner Track, Radius 69) */}
            {[
              { x: 151, y: 151 },
              { x: 249, y: 151 },
              { x: 151, y: 249 },
              { x: 249, y: 249 },
            ].map((node, i) => (
              <g key={`r1-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                <circle cx="0" cy="0" r="10" fill="url(#sphereNodeGrad)" stroke="#00C2B3" strokeWidth="1" />
                <rect x="-4" y="-1" width="8" height="2" rx="0.5" fill="#00FFEB" opacity="0.9" />
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
};
