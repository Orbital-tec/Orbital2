import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, Mail, Phone, ExternalLink, ChevronRight, Compass } from 'lucide-react';
import { OrbitalLogo } from './OrbitalLogo';

interface ComponentNavNode {
  number: string;
  tag: string;
  label: string;
  subtitle: string;
  href: string;
  highlight?: boolean;
}

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when the dropdown menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Complete catalog of all portfolio components
  const allComponents: ComponentNavNode[] = [
    {
      number: '01',
      tag: 'INCIDENT DATA',
      label: 'THE STORY',
      subtitle: 'The Human Cost, Highway Ambush Realities & Crisis Metrics',
      href: '#story',
    },
    {
      number: '02',
      tag: 'STRATEGIC DOCTRINE',
      label: 'THE MISSION',
      subtitle: 'Air-to-Ground Autonomous Shield & Sovereign Security',
      href: '#mission',
    },
    {
      number: '03',
      tag: 'COGNITIVE ENGINE',
      label: 'BRAIN³ PROPRIETARY AI',
      subtitle: 'Autonomous Multi-Vector Fusion, Satellite SAR, OSINT & Vernacular NLP',
      href: '#brain3',
      highlight: true,
    },
    {
      number: '04',
      tag: 'STRATEGIC HORIZON',
      label: 'DEVELOPMENT',
      subtitle: 'Phased Deployment Roadmap & Field Milestones (2026–2029)',
      href: '#development',
    },
    {
      number: '05',
      tag: 'SENSOR GRID',
      label: 'CAPABILITIES',
      subtitle: 'SAR Radar, Thermal UAVs, Muzzle Acoustics & LoRa Mesh',
      href: '#intelligence',
    },
    {
      number: '06',
      tag: 'ETHICAL GOVERNANCE',
      label: 'TRUST & COMPLIANCE',
      subtitle: 'Data Shielding, Human-in-the-Loop & Security Protocols',
      href: '#compliance',
    },
    {
      number: '07',
      tag: 'RESEARCH & WHITE PAPERS',
      label: 'INTEL DISPATCH',
      subtitle: 'Field Briefings, Architecture Analysis & Press Dispatches',
      href: '#dispatch',
    },
    {
      number: '08',
      tag: 'OPERATOR DIRECTIVE',
      label: 'OPERATOR FAQ',
      subtitle: 'Custom Proprietary Software, Verification Logic & Hardware Q&A',
      href: '#faq',
    },
    {
      number: '09',
      tag: 'INSTITUTIONAL CAPITAL',
      label: 'INVESTOR & PARTNER DESK',
      subtitle: 'Seed Capital Allocation, Pilot Programs & Direct Briefings',
      href: '#partnership',
      highlight: true,
    },
  ];

  // Primary top links for wide desktop navigation
  const topNavLinks = [
    { label: 'STORY', href: '#story' },
    { label: 'MISSION', href: '#mission' },
    { label: 'BRAIN³ AI', href: '#brain3' },
    { label: 'DEVELOPMENT', href: '#development' },
    { label: 'CAPABILITIES', href: '#intelligence' },
    { label: 'INVESTORS', href: '#partnership' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#040810] border-b border-[#00C2B3]/25 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'bg-[#040810] border-b border-[#142238]'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <a
          id="nav-brand-link"
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          <OrbitalLogo size={42} animate={true} withGlow={true} />
          <div className="flex flex-col">
            <span className="font-display font-bold text-[14px] sm:text-[15px] text-[#EDF2F8] tracking-[3px] leading-tight group-hover:text-white transition-colors">
              ORBITAL AVTACHA
            </span>
            <span className="font-mono text-[10px] text-[#00C2B3] tracking-[1.5px] uppercase mt-0.5 opacity-90 flex items-center gap-1">
              [ CIVILIAN SECURITY INTELLIGENCE ]
            </span>
          </div>
        </a>

        {/* Center: Desktop Quick Nav Links */}
        <nav className="hidden xl:flex items-center space-x-7">
          {topNavLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="relative py-2 font-display font-medium text-[13px] text-[#8FA3BC] tracking-[1.5px] hover:text-[#EDF2F8] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00C2B3] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Actions & Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Master Portfolio Menu Toggle Button (Available on all screen sizes) */}
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close Portfolio Navigation' : 'Open Portfolio Navigation'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] transition-all duration-200 focus:outline-none cursor-pointer ${
              mobileMenuOpen
                ? 'bg-[#00C2B3] text-[#040810] border border-[#00C2B3] font-bold shadow-[0_0_20px_rgba(0,194,179,0.4)]'
                : 'border border-[#00C2B3]/40 bg-[#0A1628] text-[#EDF2F8] hover:border-[#00C2B3] hover:text-[#00C2B3]'
            }`}
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4 text-[#040810]" />
                <span className="font-mono text-[11px] font-bold tracking-[1.5px] uppercase">CLOSE</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-[#00C2B3]" />
                <span className="font-mono text-[11px] font-bold tracking-[1.5px] uppercase">MENU</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 100% Solid Opaque Dropdown Menu Panel (Zero Translucency, All Components Visible) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed top-[72px] left-0 right-0 bottom-0 bg-[#040810] z-50 overflow-y-auto border-t border-[#142238] shadow-[0_20px_50px_rgba(0,0,0,1)]"
        >
          {/* Inner Opaque Container */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 bg-[#040810]">
            
            {/* Top Control Bar with Sector Label and Close */}
            <div className="flex items-center justify-between border-b border-[#142238] pb-4 mb-6 bg-[#040810]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C2B3] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-[12px] text-[#00C2B3] tracking-[2px] font-semibold uppercase">
                  [ DIRECT SECTOR CATALOG // ALL COMPONENTS ]
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#7A8FA6] hidden sm:inline">
                ESC TO CLOSE
              </span>
            </div>

            {/* Grid of All Portfolio Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8 bg-[#040810]">
              {allComponents.map((item) => (
                <a
                  key={item.label}
                  id={`menu-component-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group block p-4 sm:p-5 rounded-[6px] border transition-all duration-200 text-left ${
                    item.highlight
                      ? 'bg-[#081726] border-[#00C2B3]/50 hover:border-[#00C2B3] hover:bg-[#0C2238] shadow-[0_0_20px_rgba(0,194,179,0.12)]'
                      : 'bg-[#060E1A] border-[#142238] hover:border-[#00C2B3]/60 hover:bg-[#0A1628]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[12px] font-bold text-[#00C2B3] bg-[#00C2B3]/10 px-2 py-0.5 rounded-[2px] border border-[#00C2B3]/25">
                        {item.number}
                      </span>
                      <span className="font-mono text-[10px] tracking-[1.5px] text-[#7A8FA6] uppercase group-hover:text-[#A4B8CF] transition-colors">
                        {item.tag}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#3D5470] group-hover:text-[#00C2B3] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                  </div>

                  <h3 className="font-display font-bold text-[18px] sm:text-[20px] text-[#EDF2F8] group-hover:text-white tracking-[1px] mb-1.5 transition-colors">
                    {item.label}
                  </h3>

                  <p className="font-sans text-[13px] text-[#8EA1B8] leading-[1.5] group-hover:text-[#B0C2D6] transition-colors">
                    {item.subtitle}
                  </p>
                </a>
              ))}
            </div>

            {/* Investor Direct Desk & Rapid Communication Strip (Opaque Box) */}
            <div className="p-5 sm:p-6 rounded-[8px] bg-[#060D1A] border border-[#1E3A5F] mb-8 shadow-inner">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[4px] bg-[#00C2B3]/10 border border-[#00C2B3]/30 flex items-center justify-center text-[#00C2B3] shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-[#00C2B3] uppercase tracking-[1.5px] font-bold">
                        OFFICIAL INSTITUTIONAL &amp; INVESTOR DESK
                      </span>
                      <span className="hidden sm:inline-block font-mono text-[10px] text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 px-1.5 py-0.5 rounded">
                        ACTIVE
                      </span>
                    </div>
                    <a
                      href="mailto:contactorbital1@gmail.com?subject=Investor%20%26%20Partnership%20Inquiry%20%E2%80%94%20Orbital%20Avtacha"
                      className="font-mono font-bold text-[15px] sm:text-[17px] text-[#EDF2F8] hover:text-[#00C2B3] transition-colors underline decoration-[#00C2B3]/40 underline-offset-4 mt-0.5 block"
                    >
                      contactorbital1@gmail.com
                    </a>
                    <p className="text-[12px] text-[#7A8FA6] mt-1">
                      Direct executive correspondence regarding seed capital, defense pilots, and technical briefs.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                  <a
                    id="menu-email-action"
                    href="mailto:contactorbital1@gmail.com?subject=Investor%20%26%20Partnership%20Inquiry%20%E2%80%94%20Orbital%20Avtacha"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#00C2B3] text-[#040810] font-display font-bold text-[12px] tracking-[1.5px] hover:bg-[#00E5D4] transition-colors shadow-[0_0_15px_rgba(0,194,179,0.3)]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>EMAIL DIRECT</span>
                  </a>

                  <a
                    id="menu-whatsapp-action"
                    href="https://wa.link/l97xy0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#C9A227] text-[#040810] font-display font-bold text-[12px] tracking-[1.5px] hover:bg-[#E5B82E] transition-colors shadow-[0_0_15px_rgba(201,162,39,0.3)]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WHATSAPP DISPATCH</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Sector Status Stamp */}
            <div className="border-t border-[#142238] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="font-mono text-[11px] text-[#637A96] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span>OPERATIONAL STATUS: PRE-LAUNCH // PORT HARCOURT HEADQUARTERS</span>
              </div>
              <div className="font-mono text-[10px] text-[#4A627E] tracking-widest uppercase">
                CUSTOM PROPRIETARY SOFTWARE // SOVEREIGN CORRIDOR SHIELD
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

