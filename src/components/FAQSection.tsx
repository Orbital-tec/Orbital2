import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Radio,
  Lock,
  Layers,
  Sparkles,
  ArrowUpRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  Server,
  Zap,
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'Privacy & Shielding' | 'AI-Powered Brain³ OS' | 'Hardware & Infrastructure' | 'Resilience & Operations';
  question: string;
  shortAnswer: string;
  fullExplanation: string[];
  keyTakeaway: string;
  highlightBadge?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-privacy-shielding',
    category: 'Privacy & Shielding',
    question: 'How is a reporter’s identity protected if Orbital verifies accounts internally?',
    shortAnswer: 'Orbital maintains verified credentials on our end to stop malicious spam, while completely shielding the reporter’s identity from recipients, drivers, and the public.',
    fullExplanation: [
      'When an individual, interstate driver, or community member signs up on Orbital Avtacha, we securely verify account credentials on our internal servers. This internal verification is critical to prevent malicious bots, state-sponsored disruption, or bad actors from corrupting the intelligence pool.',
      'However, the moment an incident or ambush report is logged, our identity-shielding protocol decouples all personal identifiers (full name, phone number, vehicle registration, and IP address) before any alert is processed or broadcast.',
      'Recipients—including nearby motorists, community patrol guards, transport unions, and emergency responders—receive purely the verified threat coordinate, kinetic risk assessment, and tactical avoidance advice. They will NEVER know who reported it.',
      'This guarantees that witnesses and informants are 100% safe from retaliation, syndicate tracking, or local extortion.',
    ],
    keyTakeaway: 'Verified internally to prevent false reports; completely anonymized externally to protect human lives.',
    highlightBadge: 'SHIELDED PRIVACY MODEL',
  },
  {
    id: 'faq-brain3-os',
    category: 'AI-Powered Brain³ OS',
    question: 'What is the AI-Powered Brain³ OS and how does it process security intelligence?',
    shortAnswer: 'The AI-powered Brain³ OS is our sovereign defense operating system that ingests multimodal streams and resolves spatial threats in under 320 milliseconds.',
    fullExplanation: [
      'Standard consumer AI models fail in kinetic African defense environments—they hallucinate, lack real-time geographic grounding, and cannot parse regional dialects or slang distress markers.',
      'The AI-powered Brain³ OS is engineered specifically as a sovereign operating system and intelligence engine for African terrain and transit security.',
      'It operates as a deterministic ingestion pipeline that tokenizes data from low-Earth orbit Synthetic Aperture Radar (SAR), thermal UAV overwatch, urban nano-drones, solar CCTV feeds, acoustic gunshot sensors, and citizen reports into a unified spatial bus.',
      'Within < 320ms, the AI-powered Brain³ OS filters noise, deconflicts vernacular slang (e.g., Nigerian Pidgin, Hausa, Yoruba, Igbo, French, Swahili), checks for multi-sensor corroboration, and sorts kinetic ambushes by urgency for immediate tactical routing.',
    ],
    keyTakeaway: 'Sub-320ms multimodal consensus that transforms chaos into deterministic corridor defense.',
    highlightBadge: 'AI-POWERED BRAIN³ OS',
  },
  {
    id: 'faq-false-reports',
    category: 'Privacy & Shielding',
    question: 'How does Orbital prevent fake or bad-actor ambush reports from diverting security?',
    shortAnswer: 'A single human report never triggers an isolated tactical alert. The AI-powered Brain³ OS requires multimodal sensor consensus before escalating.',
    fullExplanation: [
      'In asymmetric security environments, bad actors or rival groups might attempt to flood a platform with fake distress calls to draw security away from their actual target.',
      'Orbital eliminates this through Multimodal Consensus Verification in the AI-powered Brain³ OS. A civilian tap acts as an initial trigger, which is immediately cross-checked against independent physical sensors in that geographic sector:',
      '1. Optical Verification: Solar CCTV chokepoint cameras analyze road velocity drops and armed clusters.',
      '2. Ballistic Acoustic Verification: Streetlight acoustic sensors check for shockwave acoustics and muzzle blast patterns within 80ms.',
      '3. Aerial & Orbital Overwatch: Autonomous drone sweeps and radar passes detect stationary bottlenecks or unmapped encampments.',
      'Accounts that submit malicious or unverifiable reports have their trust rating instantly revoked by the system.',
    ],
    keyTakeaway: 'No single point of human failure—every alert is backed by multimodal cryptographic consensus.',
  },
  {
    id: 'faq-hardware-deployment',
    category: 'Hardware & Infrastructure',
    question: 'Who deploys, funds, and maintains the solar CCTV, acoustic nodes, and drone fleets?',
    shortAnswer: 'We deploy in three strategic phases—starting with a software-first civilian mobile mesh, expanding to satellite partnerships, and co-deploying physical edge hardware with local logistics and security boards.',
    fullExplanation: [
      'Physical hardware deployment across vast African transit corridors requires a practical, financially viable rollout:',
      '• Phase 1 (Software & Civilian Mesh): Deployment of the lightweight mobile client across commercial transport unions (NURTW, luxury bus operators, logistics fleets) and local communities, leveraging existing smartphones and offline radio adapters.',
      '• Phase 2 (Orbital & Aerial Feeds): Direct API integration with commercial Low-Earth Orbit (LEO) Synthetic Aperture Radar (SAR) constellations and institutional UAV overwatch feeds over major interstate arteries.',
      '• Phase 3 (Dedicated Corridor Hardware): Co-deployment of solar-powered edge CCTV poles and acoustic gunshot arrays at known high-risk ambush chokepoints, co-funded alongside agricultural transit syndicates, private security associations, and regional logistics hubs.',
    ],
    keyTakeaway: 'Phased rollout designed for immediate software impact while progressively hardening physical chokepoints.',
    highlightBadge: 'CORRIDOR ROLLOUT',
  },
  {
    id: 'faq-blackout-resilience',
    category: 'Resilience & Operations',
    question: 'How does Orbital operate during cellular shutdowns and electricity grid failures?',
    shortAnswer: 'Orbital runs offline-first using peer-to-peer Bluetooth (BLE) and long-range LoRaWAN radio mesh nodes powered by standalone solar micro-grids.',
    fullExplanation: [
      'Centralized systems collapse during blackouts. In rural corridors, cellular towers frequently lose diesel power or face deliberate network jamming.',
      'Orbital Avtacha is engineered with a Store-and-Forward Mesh Architecture:',
      '• P2P Radio Hops: If cellular connectivity is dead, your device communicates directly with adjacent vehicles, motorcycles, and roadside nodes via Bluetooth Low Energy (BLE) and LoRaWAN radio frequencies (up to 15km per hop).',
      '• Satellite Micro-Bursts: In zero-grid wilderness areas, critical 1-tap SOS telemetry is compressed into 128-byte packets sent via direct-to-satellite low-bandwidth transceivers.',
      '• Solar Edge Autonomy: Fixed CCTV and acoustic nodes are 100% off-grid, equipped with dedicated solar panels and LiFePO4 batteries with 72-hour autonomous backup.',
    ],
    keyTakeaway: 'Zero reliance on centralized municipal power or telecommunications infrastructure.',
  },
  {
    id: 'faq-data-sovereignty',
    category: 'Resilience & Operations',
    question: 'Where is security data stored, and who maintains sovereignty over African intelligence?',
    shortAnswer: 'Data is encrypted end-to-end and stored on sovereign, locally compliant African infrastructure—preventing foreign surveillance or unilateral lockouts.',
    fullExplanation: [
      'African security intelligence must not be held hostage by foreign cloud platforms or subject to overseas geopolitical surveillance.',
      'Orbital Avtacha enforces strict Sovereign Data Architecture: all sensitive telemetry, incident logs, and evidence vaults are encrypted with 256-bit AES-GCM and stored across regional, sovereign cloud clusters compliant with NDPR (Nigeria Data Protection Regulation) and AU Cyber Security conventions.',
      'No foreign government or commercial entity has backdoor access to decrypted threat logs or community communication streams.',
    ],
    keyTakeaway: 'Built in Port Harcourt. Built for Africa. 100% sovereign protection.',
  },
  {
    id: 'faq-responder-dispatch',
    category: 'Resilience & Operations',
    question: 'How do community guards, transport unions, and first responders receive danger alerts?',
    shortAnswer: 'Tactical beacons are routed via low-latency push notifications, encrypted SMS fallbacks, and real-time dashboard bus feeds within 3 seconds of AI consensus.',
    fullExplanation: [
      'When the AI-powered Brain³ OS confirms an active ambush or kinetic threat on a corridor:',
      '1. Commercial Commuters & Drivers: Receive an instant proximity warning with safe turn-around or detour instructions before entering the danger radius.',
      '2. Verified Local Responders: Community vigilante guards, police patrol units, and emergency medical teams receive an encrypted tactical dossier with exact coordinates, estimated hostile count, and ballistic classification.',
      '3. Dispatch Hubs: Interstate transport depots and logistics managers receive real-time corridor status indicators on their fleet monitoring dashboards.',
    ],
    keyTakeaway: 'Sub-3 second automated distribution that cuts emergency response lag from 48 minutes to under 4 minutes.',
  },
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-privacy-shielding': true,
    'faq-brain3-os': true,
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = ['All', 'Privacy & Shielding', 'AI-Powered Brain³ OS', 'Hardware & Infrastructure', 'Resilience & Operations'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullExplanation.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#040810] border-t border-[#142238] overflow-hidden z-10"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00C2B3]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C9A227]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00C2B3]/[0.08] border border-[#00C2B3]/30 text-[#00C2B3] font-mono text-[11px] tracking-[2px] uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>OPERATIONAL & ARCHITECTURAL FAQ</span>
          </div>

          <h2 className="font-display font-bold text-[32px] sm:text-[42px] text-[#EDF2F8] tracking-tight leading-tight">
            Frequently Answered <span className="text-[#00C2B3]">Technical &amp; Strategic</span> Inquiries.
          </h2>

          <p className="font-display font-light text-[16px] text-[#7A8FA6] mt-4 leading-relaxed">
            Detailed operational clarity on our identity shielding architecture, the AI-powered Brain³ OS, multi-sensor verification logic, and resilient deployment across African corridors.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#142238]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[4px] font-mono text-[11px] tracking-[1px] transition-all duration-200 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-[#00C2B3] text-[#040810] font-bold shadow-[0_0_12px_rgba(0,194,179,0.3)]'
                    : 'bg-[#080F1C] text-[#7A8FA6] border border-[#142238] hover:text-[#EDF2F8] hover:border-[#00C2B3]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#3D5470] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search inquiries..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#080F1C] border border-[#142238] rounded-[4px] text-[12px] font-mono text-[#EDF2F8] placeholder-[#3D5470] focus:outline-none focus:border-[#00C2B3] transition-colors"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`border rounded-[6px] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#080F1C] border-[#00C2B3]/40 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
                    : 'bg-[#060B14]/80 border-[#142238] hover:border-[#1F3354]'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-5 flex items-start justify-between gap-4 text-left focus:outline-none group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-[10px] text-[#00C2B3] bg-[#00C2B3]/10 border border-[#00C2B3]/20 px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
                        {faq.category}
                      </span>
                      {faq.highlightBadge && (
                        <span className="font-mono text-[10px] text-[#F0C84E] bg-[#C9A227]/10 border border-[#C9A227]/30 px-2 py-0.5 rounded-[3px] uppercase tracking-wider font-semibold">
                          {faq.highlightBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-semibold text-[17px] sm:text-[19px] text-[#EDF2F8] group-hover:text-[#00C2B3] transition-colors pr-2">
                      {faq.question}
                    </h3>

                    {!isOpen && (
                      <p className="font-display font-light text-[13px] text-[#7A8FA6] line-clamp-1">
                        {faq.shortAnswer}
                      </p>
                    )}
                  </div>

                  <div
                    className={`w-8 h-8 rounded-[4px] bg-[#040810] border border-[#142238] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-[#00C2B3] text-[#00C2B3]' : 'text-[#7A8FA6] group-hover:text-[#EDF2F8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Expanded Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#142238]/60 text-left space-y-4 animate-in fade-in duration-200">
                    {/* Executive Summary Callout */}
                    <div className="bg-[#0C1628]/60 border-l-2 border-[#00C2B3] p-3.5 rounded-r-[4px]">
                      <span className="font-mono text-[10px] text-[#00C2B3] uppercase tracking-widest block mb-1">
                        EXECUTIVE SUMMARY
                      </span>
                      <p className="font-display text-[14px] text-[#EDF2F8] font-medium leading-snug">
                        {faq.shortAnswer}
                      </p>
                    </div>

                    {/* Detailed Technical Points */}
                    <div className="space-y-2.5 pt-1">
                      {faq.fullExplanation.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="font-display font-light text-[14px] text-[#A2B4C8] leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Key Strategic Takeaway */}
                    <div className="pt-2 flex items-start gap-2.5 font-mono text-[11px] text-[#C9A227] bg-[#C9A227]/[0.04] border border-[#C9A227]/20 p-3 rounded-[4px]">
                      <CheckCircle2 className="w-4 h-4 text-[#F0C84E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#F0C84E] uppercase tracking-wider">STRATEGIC PRINCIPLE: </span>
                        <span>{faq.keyTakeaway}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 border border-dashed border-[#142238] rounded-[6px]">
              <p className="font-mono text-[13px] text-[#7A8FA6]">
                No matching inquiries found for &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 font-mono text-[11px] text-[#00C2B3] hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Technical Question CTA */}
        <div className="mt-12 p-6 rounded-[6px] bg-gradient-to-r from-[#080F1C] to-[#0C1628] border border-[#142238] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#00C2B3] tracking-[1.5px] uppercase block">
              HAVE A SPECIFIC TECHNICAL OR DEFENSE INQUIRY?
            </span>
            <p className="font-display font-medium text-[15px] text-[#EDF2F8]">
              Connect directly with our Systems Architecture &amp; Operations team.
            </p>
          </div>

          <a
            href="https://wa.link/l97xy0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00C2B3] text-[#040810] font-display font-bold text-[12px] tracking-[2px] rounded-[4px] shadow-[0_0_15px_rgba(0,194,179,0.3)] hover:bg-[#00E5D4] transition-all shrink-0"
          >
            <span>DIRECT ARCHITECTURE BRIEFING</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
