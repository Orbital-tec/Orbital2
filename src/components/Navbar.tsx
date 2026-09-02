import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { OrbitalLogo } from './OrbitalLogo';

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

  const navLinks = [
    { label: 'STORY', href: '#story' },
    { label: 'MISSION', href: '#mission' },
    { label: 'DEVELOPMENT', href: '#development' },
    { label: 'INTELLIGENCE', href: '#intelligence' },
    { label: 'INTEL DISPATCH', href: '#dispatch' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040810]/95 backdrop-blur-[24px] border-b border-[#00C2B3]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#040810]/85 backdrop-blur-[20px] border-b border-[#00C2B3]/[0.12]'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo Zone */}
        <a
          id="nav-brand-link"
          href="#"
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          <OrbitalLogo size={42} animate={true} withGlow={true} />
          <div className="flex flex-col">
            <span className="font-display font-bold text-[14px] text-[#EDF2F8] tracking-[3px] leading-tight group-hover:text-white transition-colors">
              ORBITAL AVTACHA
            </span>
            <span className="font-mono text-[10px] text-[#00C2B3] tracking-[1.5px] uppercase mt-0.5 opacity-90 flex items-center gap-1">
              [ CIVILIAN SECURITY INTELLIGENCE ]
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="relative py-2 font-display font-medium text-[13px] text-[#7A8FA6] tracking-[1.5px] hover:text-[#EDF2F8] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00C2B3] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="nav-cta-button"
            href="https://wa.link/l97xy0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#C9A227] bg-[#C9A227]/[0.08] text-[#F0C84E] hover:bg-[#C9A227]/[0.2] hover:border-[#F0C84E] transition-all duration-200 rounded-[4px] px-5 py-2.5 font-display font-bold text-[12px] tracking-[2px] shadow-[0_0_15px_rgba(201,162,39,0.1)] focus:outline-none"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F0C84E]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#7A8FA6] hover:text-[#00C2B3] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 top-[72px] bg-[#040810]/98 backdrop-blur-3xl z-50 flex flex-col justify-between p-6 border-t border-[#142238] md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-6 pt-4">
            <div className="font-mono text-[11px] text-[#00C2B3] tracking-[2px] border-b border-[#142238] pb-2">
              [ DIRECT SATELLITE RELAY // SECTOR NAVIGATION ]
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-[20px] text-[#EDF2F8] hover:text-[#00C2B3] tracking-[2px] transition-colors py-2 border-b border-[#142238]/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#3D5470] font-mono text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#142238] flex flex-col gap-4 pb-8">
            <div className="font-mono text-[11px] text-[#7A8FA6] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
              STATUS: PRE-LAUNCH // PORT HARCOURT
            </div>
            <a
              id="mobile-nav-cta"
              href="https://wa.link/l97xy0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#C9A227] text-[#040810] font-display font-bold text-[13px] tracking-[2px] rounded-[4px] shadow-[0_0_20px_rgba(201,162,39,0.3)] flex items-center justify-center gap-2"
            >
              <span>REQUEST DIRECT BRIEFING</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
