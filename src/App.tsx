import React from 'react';
import { GlobalBackground } from './components/GlobalBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MissionSection } from './components/MissionSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ComplianceSection } from './components/ComplianceSection';
import { IntelDispatchSection } from './components/IntelDispatchSection';
import { FAQSection } from './components/FAQSection';
import { InvestorCtaSection } from './components/InvestorCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#040810] text-[#EDF2F8] font-sans selection:bg-[#00C2B3]/30 selection:text-[#EDF2F8] antialiased">
      {/* Global Orbit & Tactical Radar Backdrop */}
      <GlobalBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections Stack */}
      <main className="relative z-10">
        {/* Section 2: Hero Section */}
        <HeroSection />

        {/* Section 3: The Story */}
        <StorySection />

        {/* Section 4: The Mission */}
        <MissionSection />

        {/* Section 5: Development Stage & Roadmap */}
        <RoadmapSection />

        {/* Section 6: Platform Capabilities */}
        <CapabilitiesSection />

        {/* Section 7: Trust & Compliance */}
        <ComplianceSection />

        {/* Section 8: Intel Dispatch (Blog & Mission Briefings) */}
        <IntelDispatchSection />

        {/* Section 9: FAQ Section */}
        <FAQSection />

        {/* Section 10: Investor / Partner CTA */}
        <InvestorCtaSection />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Floating Tactical WhatsApp Founder Channel */}
      <FloatingWhatsApp isVisible={true} />
    </div>
  );
}
