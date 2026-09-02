import React from 'react';
import { ArrowUpRight, Lock, MapPin, Shield, CheckCircle2 } from 'lucide-react';

export const InvestorCtaSection: React.FC = () => {
  return (
    <section
      id="partnership"
      className="relative bg-[#040810] py-24 md:py-32 z-10 overflow-hidden border-t border-[#142238]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Centered Panel */}
        <div
          id="investor-cta-panel"
          className="w-full max-w-[900px] border border-[#1E3A5F] rounded-[16px] p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          style={{
            background: 'linear-gradient(135deg, #0A1A2E 0%, #080F1C 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #00C2B3 0%, #C9A227 60%, transparent 80%)',
            }}
          />

          {/* Mono Label */}
          <div
            id="partner-mono-label"
            className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#C9A227] bg-[#C9A227]/[0.08] border border-[#C9A227]/30 px-3.5 py-1.5 rounded-[3px] mb-8"
          >
            <Shield className="w-3.5 h-3.5 text-[#C9A227]" />
            <span className="tracking-[2px]">[ OPEN TO PARTNERSHIP ]</span>
          </div>

          {/* Headline */}
          <h2
            id="partner-headline"
            className="font-display font-bold text-[34px] sm:text-[46px] md:text-[54px] text-[#EDF2F8] leading-[1.05] tracking-[-1.5px] mb-6"
          >
            Port Harcourt First.
            <br />
            Pan-Africa Next.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2B3] via-[#EDF2F8] to-[#C9A227]">
              400 Million Lives Protected.
            </span>
          </h2>

          {/* Body */}
          <p
            id="partner-body-text"
            className="font-display font-light text-[16px] sm:text-[18px] text-[#7A8FA6] leading-[1.8] max-w-2xl mx-auto mb-10"
          >
            Orbital Avtacha is currently seeking seed funding, strategic
            partnerships, and grant opportunities to accelerate development
            and launch in Port Harcourt.
            <br className="hidden sm:inline" />
            {' '}If you are an investor, impact fund, security sector partner,
            or institution that believes civilian intelligence infrastructure
            is the missing layer — we want to hear from you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              id="partner-cta-whatsapp"
              href="https://wa.link/l97xy0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#F0C84E] text-[#040810] font-display font-bold text-[13px] tracking-[2px] px-8 py-4 rounded-[4px] shadow-[0_0_30px_rgba(201,162,39,0.35)] transition-all duration-200"
            >
              <span>OPEN BRIEFING CHANNEL</span>
              <ArrowUpRight className="w-4 h-4 text-[#040810]" />
            </a>

            <a
              id="partner-cta-email"
              href="mailto:contactorbital1@gmail.com?subject=Investor%20%26%20Partnership%20Inquiry%20%E2%80%94%20Orbital%20Avtacha&body=Hello%20Orbital%20Avtacha%20Team%2C%0A%0AI%20am%20reaching%20out%20regarding%20investment%2C%20pilot%20partnership%2C%20or%20strategic%20briefing%20opportunities%20for%20Orbital%20Avtacha.%0A%0AOrganization%2FName%3A%20%0AFocus%20Area%3A%20%0AMessage%3A%20"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C2B3] hover:bg-[#00E5D4] text-[#040810] font-display font-bold text-[13px] tracking-[2px] px-8 py-4 rounded-[4px] shadow-[0_0_25px_rgba(0,194,179,0.35)] transition-all duration-200"
            >
              <span>EMAIL FOUNDER DIRECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#040810]" />
            </a>

            <a
              id="partner-cta-linkedin"
              href="https://www.linkedin.com/in/orbital-avtacha/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#1E3A5F] hover:border-[#00C2B3] bg-[#0C1628]/80 text-[#EDF2F8] hover:text-white font-display font-medium text-[13px] tracking-[1.5px] px-7 py-4 rounded-[4px] transition-all duration-200"
            >
              <span>VIEW LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4 text-[#00C2B3]" />
            </a>
          </div>

          {/* Official Investor Email Badge Box */}
          <div className="mb-10 max-w-xl mx-auto p-4 rounded-[8px] bg-[#080F1C]/90 border border-[#00C2B3]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-[0_0_20px_rgba(0,194,179,0.12)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[4px] bg-[#00C2B3]/10 border border-[#00C2B3]/30 flex items-center justify-center text-[#00C2B3] shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#00C2B3] uppercase tracking-[1.5px] block font-semibold">
                  OFFICIAL INSTITUTIONAL &amp; INVESTOR DESK
                </span>
                <a
                  href="mailto:contactorbital1@gmail.com?subject=Investor%20%26%20Partnership%20Inquiry%20%E2%80%94%20Orbital%20Avtacha"
                  className="font-mono font-bold text-[14px] text-[#EDF2F8] hover:text-[#00C2B3] transition-colors underline decoration-[#00C2B3]/40 underline-offset-4"
                >
                  contactorbital1@gmail.com
                </a>
              </div>
            </div>

            <a
              href="mailto:contactorbital1@gmail.com?subject=Investor%20%26%20Partnership%20Inquiry%20%E2%80%94%20Orbital%20Avtacha"
              className="px-3.5 py-1.5 rounded-[4px] bg-[#0C1628] border border-[#00C2B3]/40 font-mono text-[11px] text-[#00C2B3] hover:bg-[#00C2B3] hover:text-[#040810] font-bold tracking-wider transition-all duration-200 shrink-0"
            >
              SEND DIRECT EMAIL →
            </a>
          </div>

          {/* Three Trust Signals Below Buttons */}
          <div
            id="partner-trust-signals"
            className="pt-8 border-t border-[#142238] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono text-[11px] text-[#7A8FA6]"
          >
            <div className="flex items-center justify-center gap-2 text-[#7A8FA6]">
              <Lock className="w-3.5 h-3.5 text-[#00C2B3]" />
              <span>All communications encrypted</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-[#7A8FA6]">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Founded in Port Harcourt, Nigeria</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-[#7A8FA6]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88]" />
              <span>Mission-first. Infrastructure always.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
