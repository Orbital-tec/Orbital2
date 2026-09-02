import React from 'react';
import { motion } from 'motion/react';
import { OrbitalLogo } from './OrbitalLogo';
import {
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Radio,
} from 'lucide-react';

// Official X (formerly Twitter) Clean Vector Logo
const XIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = 'w-5 h-5',
  style,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom TikTok Icon (standard SVG)
const TikTokIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = 'w-5 h-5',
  style,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.37 0 .72.07 1.05.2V9.52a6.34 6.34 0 0 0-1.05-.09A6.33 6.33 0 0 0 3.16 15.76 6.33 6.33 0 0 0 9.49 22.09a6.33 6.33 0 0 0 6.33-6.33V8.89a8.28 8.28 0 0 0 4.77 1.48V6.92a4.84 4.84 0 0 1-1-.23z" />
  </svg>
);

export const Footer: React.FC = () => {
  const socialChannels = [
    {
      name: 'LinkedIn',
      subtext: 'Executive & Defense Network',
      href: 'https://www.linkedin.com/in/orbital-avtacha/',
      icon: Linkedin,
      color: '#0A66C2',
      glowDim: 'rgba(10, 102, 194, 0.25)',
      glowBright: 'rgba(10, 102, 194, 0.65)',
      innerGlowDim: 'rgba(10, 102, 194, 0.08)',
      innerGlowBright: 'rgba(10, 102, 194, 0.25)',
      borderDim: 'rgba(10, 102, 194, 0.4)',
      borderBright: 'rgba(10, 102, 194, 0.9)',
      floatDuration: 4.0,
      floatDelay: 0,
    },
    {
      name: 'X',
      subtext: 'Real-Time Corridor Intel',
      href: 'https://x.com/orbital_avtach',
      icon: XIcon,
      color: '#FFFFFF',
      glowDim: 'rgba(255, 255, 255, 0.18)',
      glowBright: 'rgba(255, 255, 255, 0.6)',
      innerGlowDim: 'rgba(255, 255, 255, 0.06)',
      innerGlowBright: 'rgba(255, 255, 255, 0.22)',
      borderDim: 'rgba(255, 255, 255, 0.35)',
      borderBright: 'rgba(255, 255, 255, 0.85)',
      floatDuration: 4.4,
      floatDelay: 0.8,
    },
    {
      name: 'YouTube',
      subtext: 'Mission Demos & Briefings',
      href: 'https://www.youtube.com/@OrbitalAvtacha',
      icon: Youtube,
      color: '#FF0033',
      glowDim: 'rgba(255, 0, 51, 0.25)',
      glowBright: 'rgba(255, 0, 51, 0.7)',
      innerGlowDim: 'rgba(255, 0, 51, 0.08)',
      innerGlowBright: 'rgba(255, 0, 51, 0.25)',
      borderDim: 'rgba(255, 0, 51, 0.4)',
      borderBright: 'rgba(255, 0, 51, 0.9)',
      floatDuration: 3.8,
      floatDelay: 1.6,
    },
    {
      name: 'TikTok',
      subtext: 'Field Briefs & Hardware',
      href: 'https://www.tiktok.com/@orbitalavtacha',
      icon: TikTokIcon,
      color: '#00F2FE',
      glowDim: 'rgba(0, 242, 254, 0.25)',
      glowBright: 'rgba(0, 242, 254, 0.7)',
      innerGlowDim: 'rgba(0, 242, 254, 0.08)',
      innerGlowBright: 'rgba(0, 242, 254, 0.25)',
      borderDim: 'rgba(0, 242, 254, 0.4)',
      borderBright: 'rgba(0, 242, 254, 0.9)',
      floatDuration: 4.2,
      floatDelay: 2.4,
    },
    {
      name: 'WhatsApp Channel',
      subtext: '24/7 Strategic Founder Line',
      href: 'https://wa.link/l97xy0',
      icon: MessageCircle,
      color: '#25D366',
      glowDim: 'rgba(37, 211, 102, 0.25)',
      glowBright: 'rgba(37, 211, 102, 0.7)',
      innerGlowDim: 'rgba(37, 211, 102, 0.08)',
      innerGlowBright: 'rgba(37, 211, 102, 0.25)',
      borderDim: 'rgba(37, 211, 102, 0.4)',
      borderBright: 'rgba(37, 211, 102, 0.9)',
      floatDuration: 4.6,
      floatDelay: 1.2,
    },
  ];

  return (
    <footer
      id="main-footer"
      className="relative bg-[#040810] border-t border-[#142238] pt-16 pb-12 z-10 text-left overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C2B3]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C9A227]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Social Handles & Sci-Fi Community Showcase Hub */}
        <div className="mb-14 pb-12 border-b border-[#142238]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#00C2B3] tracking-[2px] uppercase">
                <Radio className="w-3.5 h-3.5 text-[#00C2B3] animate-pulse" />
                <span>OFFICIAL CHANNELS &amp; SOCIAL HUBS</span>
              </div>
              <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-[#EDF2F8] tracking-tight mt-1">
                Connect With <span className="text-[#00C2B3]">Orbital Avtacha</span> Across Platforms
              </h3>
            </div>
            <p className="font-display font-light text-[13px] text-[#7A8FA6] max-w-md sm:text-right">
              Follow real-time development dispatches, verified corridor threat logs, and video architecture demos.
            </p>
          </div>

          {/* Attractive Sci-Fi Floating & Glowing Social Channel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {socialChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={channel.name}
                  id={`footer-social-${channel.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{
                    y: [0, -6, 0],
                    boxShadow: [
                      `0 0 16px ${channel.glowDim}, inset 0 0 12px ${channel.innerGlowDim}`,
                      `0 0 28px ${channel.glowBright}, inset 0 0 20px ${channel.innerGlowBright}`,
                      `0 0 16px ${channel.glowDim}, inset 0 0 12px ${channel.innerGlowDim}`,
                    ],
                    borderColor: [
                      channel.borderDim,
                      channel.borderBright,
                      channel.borderDim,
                    ],
                  }}
                  transition={{
                    duration: channel.floatDuration,
                    delay: channel.floatDelay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -9,
                    transition: { duration: 0.2 },
                  }}
                  className="relative group p-4 rounded-[8px] bg-[#070D18]/95 border transition-all duration-300 flex items-center justify-between gap-3 hover:bg-[#0B1526] overflow-hidden"
                >
                  {/* Subtle Sci-Fi Light Shimmer Beam moving across the card */}
                  <motion.div
                    className="absolute -top-10 -bottom-10 w-16 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none transform -skew-x-12"
                    animate={{
                      x: ['-200%', '400%'],
                    }}
                    transition={{
                      duration: 3.6,
                      delay: channel.floatDelay,
                      repeat: Infinity,
                      repeatDelay: 2.2,
                      ease: 'easeInOut',
                    }}
                  />

                  <div className="flex items-center gap-3 min-w-0 relative z-10">
                    {/* Sci-Fi Glowing Icon Box with Breathing Glow */}
                    <motion.div
                      className="w-11 h-11 rounded-[6px] bg-[#040810] border flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300"
                      animate={{
                        boxShadow: [
                          `0 0 10px ${channel.glowDim}`,
                          `0 0 22px ${channel.glowBright}`,
                          `0 0 10px ${channel.glowDim}`,
                        ],
                        borderColor: [
                          channel.borderDim,
                          channel.borderBright,
                          channel.borderDim,
                        ],
                      }}
                      transition={{
                        duration: channel.floatDuration,
                        delay: channel.floatDelay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        borderColor: channel.color,
                      }}
                    >
                      <Icon className="w-5 h-5 drop-shadow-[0_0_8px_currentColor]" style={{ color: channel.color }} />
                    </motion.div>

                    {/* Platform Info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-display font-bold text-[15px] text-[#EDF2F8] group-hover:text-white transition-colors truncate">
                          {channel.name}
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-[#7A8FA6] group-hover:text-[#A2B4C8] transition-colors truncate">
                        {channel.subtext}
                      </div>
                    </div>
                  </div>

                  {/* External Arrow Indicator with Pulsing Glow */}
                  <motion.div
                    className="w-7 h-7 rounded-[4px] bg-[#040810]/80 border flex items-center justify-center shrink-0 transition-colors relative z-10"
                    animate={{
                      borderColor: [channel.borderDim, channel.borderBright, channel.borderDim],
                      boxShadow: [
                        `0 0 4px ${channel.glowDim}`,
                        `0 0 12px ${channel.glowBright}`,
                        `0 0 4px ${channel.glowDim}`,
                      ],
                    }}
                    transition={{
                      duration: channel.floatDuration,
                      delay: channel.floatDelay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{ borderColor: `${channel.color}40`, color: channel.color }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Standard Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1 — Brand (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <OrbitalLogo size={36} animate={false} withGlow={false} />
              <div>
                <span className="font-display font-bold text-[15px] text-[#EDF2F8] tracking-[2.5px] block leading-tight">
                  ORBITAL AVTACHA
                </span>
                <span className="font-mono text-[10px] text-[#00C2B3] tracking-[1.5px]">
                  [ ORBITING. PROTECTING. ALWAYS. ]
                </span>
              </div>
            </div>

            <p className="font-display font-light text-[13px] text-[#7A8FA6] leading-[1.7] max-w-md">
              Africa&apos;s sovereign security intelligence network — built to protect 400 million lives across Africa with decentralized, encrypted, multi-sensor and civilian-powered threat intelligence using the AI-powered Brain³ OS.
            </p>

            {/* Hebrew Name Quiet Brand Note */}
            <div
              id="footer-hebrew-tagline"
              className="font-mono text-[11px] text-[#3D5470] bg-[#080F1C] border border-[#142238] px-3 py-1.5 rounded-[3px] w-fit"
            >
              <span className="text-[#C9A227] font-semibold">אַבְטָחָה</span> — Protection in Hebrew
            </div>
          </div>

          {/* Column 2 — Quick Navigation (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-[11px] text-[#00C2B3] tracking-[2px] uppercase">
              NAVIGATE
            </div>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 font-display font-light text-[13px] text-[#7A8FA6]">
              <li>
                <a href="#story" className="hover:text-[#EDF2F8] transition-colors">
                  Story
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-[#EDF2F8] transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#development" className="hover:text-[#EDF2F8] transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-[#EDF2F8] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#dispatch" className="hover:text-[#EDF2F8] transition-colors">
                  Intel Dispatch
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00C2B3] text-[#EDF2F8] font-medium transition-colors">
                  FAQ
                </a>
              </li>
              <li className="col-span-2 pt-1">
                <a href="https://wa.link/l97xy0" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#F0C84E] transition-colors flex items-center gap-1 font-mono text-[12px]">
                  <span>Direct WhatsApp Channel</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Direct Contacts (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-[11px] text-[#00C2B3] tracking-[2px] uppercase">
              DIRECT DISPATCH HEADQUARTERS
            </div>
            <div className="space-y-2.5 font-display font-light text-[13px] text-[#7A8FA6]">
              <a
                href="https://wa.link/l97xy0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F0C84E] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: Direct Founder Briefing Line</span>
              </a>

              <a
                href="mailto:favben67@gmail.com"
                className="flex items-center gap-2 hover:text-[#EDF2F8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00C2B3]" />
                <span>favben67@gmail.com</span>
              </a>

              <a
                href="mailto:contactorbital1@gmail.com"
                className="flex items-center gap-2 hover:text-[#EDF2F8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00C2B3]" />
                <span>contactorbital1@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-[#3D5470] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="leading-snug">
                  Port Harcourt, Rivers State,
                  <br />
                  Nigeria (04°51&apos;N 007°02&apos;E)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          id="footer-bottom-bar"
          className="pt-8 border-t border-[#0C1628] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#3D5470]"
        >
          <div>
            © 2026 Orbital Avtacha. All Rights Reserved.
          </div>

          <div className="text-[#7A8FA6] font-medium tracking-wider">
            Built in Port Harcourt. Built for Africa.
          </div>
        </div>
      </div>
    </footer>
  );
};
