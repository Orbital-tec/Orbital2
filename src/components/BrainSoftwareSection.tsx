import React, { useState, useEffect, useRef } from 'react';
import {
  Brain,
  Cpu,
  Satellite,
  Radio,
  ShieldCheck,
  Zap,
  Layers,
  Eye,
  CheckCircle2,
  Compass,
  Lock,
  Search,
  MessageSquare,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import neuralBrainCoreImg from '../assets/images/neural_brain_core_1788457681002.jpg';
import { NeuronMotionCanvas } from './NeuronMotionCanvas';

// Tactical capabilities supported by BRAIN³
interface BrainCapability {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  technicalDepth: string;
  telemetryMetric: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const BrainSoftwareSection: React.FC = () => {
  const [selectedVector, setSelectedVector] = useState<string>('consensus');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Live rotating telemetry state for the sci-fi HUD
  const [hudCycle, setHudCycle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHudCycle((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const capabilities: BrainCapability[] = [
    {
      id: 'consensus',
      tag: 'VECTOR.01 // ZERO-TRUST VALIDATION',
      title: 'Multi-Source Cross-Verification & Deterministic Consensus',
      shortDesc:
        'Single-source intelligence breeds hysteria and false alarms. BRAIN³ cross-checks all reports across multiple physical sensors in under 320ms.',
      technicalDepth:
        'When a civilian reports an armed checkpoint or ambush on a transit artery, BRAIN³ instantly queries 4 decoupled telemetry streams: acoustic sensors for matching gunshot decibels, solar CCTV for abrupt convoy braking, satellite SAR or thermal drone passes for vehicle heat signatures, and adjacent transponder speeds. Only when spatial-temporal correlation surpasses 95% is a red kinetic alert broadcast.',
      telemetryMetric: '< 320ms Multi-Vector Consensus Latency',
      icon: ShieldCheck,
    },
    {
      id: 'satellite',
      tag: 'VECTOR.02 // ORBITAL RADAR',
      title: 'Orbital Satellite & SAR (Synthetic Aperture Radar) Ingestion',
      shortDesc:
        'Persistent LEO satellite imagery and synthetic aperture radar downlinks that pierce cloud covers, rainforest canopies, and Harmattan dust hazes.',
      technicalDepth:
        'Equatorial cloud build-up and dry-season Harmattan dust frequently blind optical cameras across the Sahel and Niger Delta. BRAIN³ ingests microwave Synthetic Aperture Radar (SAR) downlinks capable of cloud and canopy penetration to detect illegal road barricades, fresh tire tracks along unmapped forest fringes, and concealed encampments in real time.',
      telemetryMetric: 'Sub-meter Resolution Change Detection',
      icon: Satellite,
    },
    {
      id: 'drones',
      tag: 'VECTOR.03 // AERIAL PATROL',
      title: 'Autonomous Drone (UAV) & Thermal FLIR Overwatch',
      shortDesc:
        'Continuous synchronization with fixed-wing long-range patrol drones and pocket-sized urban nano-drones.',
      technicalDepth:
        'Long-range autonomous UAVs fly advance overwatch sweeps along vulnerable highway corridors (Abuja-Kaduna, Benin-Ore, Port Harcourt-Aba). Their forward-looking infrared (FLIR) cameras feed real-time heat signatures directly into BRAIN³ to locate ambush parties lurking in roadside tree lines long before civilian headlights reach them.',
      telemetryMetric: '60km Patrol Radius · Sub-zero Lux Thermal',
      icon: Eye,
    },
    {
      id: 'acoustics',
      tag: 'VECTOR.04 // BALLISTIC DSP',
      title: 'Acoustic Shockwave & Ballistic Triangulation',
      shortDesc:
        'Solar mast-mounted acoustic microphone arrays that classify assault rifle fire from ordinary ambient urban sounds within 80 milliseconds.',
      technicalDepth:
        'High-speed digital signal processors measure microsecond time-of-arrival variances across quad-microphone arrays. BRAIN³ instantly separates AK-47 (7.62mm) and AR (5.56mm) muzzle blasts from truck tire blowouts, thunder, or electric generators, calculating the 3D ballistic trajectory and exact GPS shooter coordinates.',
      telemetryMetric: '< 80ms Triangulation Latency · ±2m Accuracy',
      icon: Zap,
    },
    {
      id: 'osint',
      tag: 'VECTOR.05 // OPEN-SOURCE INTEL',
      title: 'OSINT & Emergency Broadcast Harvester',
      shortDesc:
        'Continuous automated harvesting of emergency frequencies, police dispatch logs, verified transport union radios, and civic feeds.',
      technicalDepth:
        'BRAIN³ operates automated OSINT crawlers monitoring regional emergency frequencies, traffic union dispatches (e.g. NURTW/RTEAN radio relays), and local verified community watch channels. NLP deduplication algorithms filter spam, viral rumors, and reposted footage to isolate newly breaking kinetic incidents.',
      telemetryMetric: '24/7 Multi-Channel Radio & Civic Stream Parsing',
      icon: Search,
    },
    {
      id: 'vernacular',
      tag: 'VECTOR.06 // LOCAL NLP',
      title: 'African Vernacular, Slang & Dialect Deconfliction',
      shortDesc:
        'Custom natural language transformers fine-tuned on Nigerian Pidgin, Hausa, Yoruba, Igbo, and regional transport slang.',
      technicalDepth:
        'Generic AI models fail when faced with African street parlance and urgent conversational voice notes. BRAIN³ is trained on regional idioms and transport slang (e.g. "dem don block road front", "heavy boys with iron dey bush", "one-chance boys along bypass"), parsing dialect into structured geospatial threat tokens without delay.',
      telemetryMetric: '99.2% Accuracy Across 6 African Languages & Dialects',
      icon: MessageSquare,
    },
    {
      id: 'mesh',
      tag: 'VECTOR.07 // ZERO-INTERNET RADIO',
      title: 'Offline LoRaWAN & Bluetooth Mesh Relay',
      shortDesc:
        'Decentralized peer-to-peer radio hopping that moves encrypted threat data when cell towers are destroyed, jammed, or unpowered.',
      technicalDepth:
        'During kinetic raids or infrastructure sabatoge, cellular towers are often compromised. BRAIN³ operates over low-power LoRa (868/915 MHz) and Bluetooth Low Energy mesh channels, relaying cryptographic distress tokens device-to-device across vehicles and solar relay posts until reaching an orbital or edge gateway.',
      telemetryMetric: 'Zero Cellular Dependency · Multi-Hop Integrity',
      icon: Radio,
    },
    {
      id: 'shield',
      tag: 'VECTOR.08 // REPORTER PRIVACY',
      title: 'Zero-Knowledge Civilian Identity Shield',
      shortDesc:
        'Complete cryptographic dissociation between the reporting civilian and the public warning broadcast.',
      technicalDepth:
        'Civilians avoid reporting crime when they fear violent retaliation. When a user submits an alert, BRAIN³ strips phone numbers, device IDs, and IP addresses via zero-knowledge proofs. The resulting public threat alert only contains objective spatial-temporal coordinates, guaranteeing absolute anonymity and safety for the civilian reporter.',
      telemetryMetric: 'Zero-Knowledge Proofs · Immutable Reporter Anonymity',
      icon: Lock,
    },
  ];

  const activeCapability =
    capabilities.find((c) => c.id === selectedVector) || capabilities[0];

  return (
    <section
      id="brain3"
      className="relative bg-[#040810] py-24 md:py-32 z-10 overflow-hidden border-t border-[#142238]"
    >
      {/* Background sci-fi ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0, 194, 179, 0.15) 1px, transparent 1px), radial-gradient(rgba(201, 162, 39, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px, 80px 80px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div
            id="brain3-mono-label"
            className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#00C2B3] bg-[#00C2B3]/[0.08] border border-[#00C2B3]/30 px-3.5 py-1.5 rounded-[3px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2B3] animate-pulse" />
            <span className="tracking-[2px]">[ PROPRIETARY AUTONOMOUS SOFTWARE // CORE ENGINE ]</span>
          </div>

          <h2
            id="brain3-main-title"
            className="font-display font-extrabold text-[32px] sm:text-[44px] md:text-[54px] text-[#EDF2F8] leading-[1.1] tracking-[-1px]"
          >
            Meet Our Proprietary AI-Powered Software
            <br />
            <span className="bg-gradient-to-r from-[#00C2B3] via-[#00FFEB] to-[#F0C84E] bg-clip-text text-transparent">
              Engineered As BRAIN³
            </span>
          </h2>

          <p
            id="brain3-subtitle"
            className="font-display font-light text-[16px] sm:text-[18px] text-[#8FA3BC] max-w-3xl mx-auto leading-relaxed"
          >
            The sovereign cognitive nucleus of Orbital Avtacha. Engineered to ingest,
            deconflict, and cross-reference satellite SAR, thermal drones, acoustic gunfire
            sensors, OSINT intelligence, and civilian reports into deterministic protection in under
            320 milliseconds.
          </p>
        </div>

        {/* EXPANSIVE CINEMATIC BRAIN³ NEURAL MOTION STAGE (NO CARDS, NO NUMBERS) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={() => {
            setIsHoveringImage(false);
            setMousePos({ x: 0, y: 0 });
          }}
          className="relative w-full max-w-5xl mx-auto mb-20 flex flex-col items-center justify-center select-none"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient Dual-Hemisphere Radial Lighting Behind Brain */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-[#00C2B3]/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-[#FF991A]/15 blur-[120px] pointer-events-none" />

          {/* Panoramic Neural Brain Stage with Subtle 3D Tilt Reactivity */}
          <div
            className="relative w-full aspect-[16/9] sm:aspect-[2.1/1] max-h-[560px] flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Dual-Hemisphere High-Res Brain Neural Core Image (Cyan Left, Amber Right) */}
            <img
              src={neuralBrainCoreImg}
              alt="BRAIN³ Dual-Hemisphere Neural Network"
              className="w-full h-full object-contain filter contrast-125 saturate-110 pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Real-Time Neurons In Motion Canvas (Synapses, Action Potentials, Circuit Photons) */}
            <NeuronMotionCanvas />
          </div>
        </div>

        {/* COMPREHENSIVE EXPLANATION: WHAT BRAIN³ DOES */}
        <div className="space-y-10">
          <div className="text-left border-l-2 border-[#00C2B3] pl-4 sm:pl-6">
            <div className="font-mono text-[11px] text-[#00C2B3] tracking-[2px] uppercase mb-1">
              [ TECHNICAL DISSECTION // HOW BRAIN³ OPERATES ]
            </div>
            <h3 className="font-display font-bold text-[24px] sm:text-[32px] text-[#EDF2F8] tracking-tight">
              All the Known Avenues Ingested, Cross-Checked &amp; Resolved by BRAIN³
            </h3>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#7A8FA6] mt-2 max-w-3xl leading-relaxed">
              Security intelligence fails when it relies on single sources. BRAIN³ fuses every
              known layer—from orbital synthetic aperture radar down to local street slang—to weed out
              rumors and safeguard human lives before an ambush unfolds.
            </p>
          </div>

          {/* Interactive Multi-Vector Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isSelected = selectedVector === cap.id;
              return (
                <button
                  key={cap.id}
                  id={`brain-tab-${cap.id}`}
                  onClick={() => setSelectedVector(cap.id)}
                  className={`p-3 rounded-[6px] border text-left transition-all duration-200 flex flex-col justify-between h-[84px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#00C2B3]/[0.12] border-[#00C2B3] shadow-[0_0_15px_rgba(0,194,179,0.2)]'
                      : 'bg-[#080F1C] border-[#142238] hover:border-[#1E3A5F]'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-[#00C2B3]' : 'text-[#637A96]'
                    }`}
                  />
                  <div
                    className={`font-mono text-[10px] font-bold line-clamp-2 leading-tight ${
                      isSelected ? 'text-[#EDF2F8]' : 'text-[#7A8FA6]'
                    }`}
                  >
                    {cap.title.split(' ')[0]} {cap.title.split(' ')[1]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight of Selected Vector */}
          <div
            id="brain-capability-spotlight"
            className="bg-[#060E1A] border border-[#00C2B3]/30 p-6 sm:p-8 rounded-[8px] relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#142238]">
              <div>
                <div className="font-mono text-[11px] text-[#00C2B3] tracking-wider mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2B3]" />
                  <span>{activeCapability.tag}</span>
                </div>
                <h4 className="font-display font-bold text-[22px] sm:text-[28px] text-[#EDF2F8] tracking-tight">
                  {activeCapability.title}
                </h4>
              </div>

              <div className="px-4 py-2 rounded-[4px] bg-[#0A1628] border border-[#1E3A5F] font-mono text-[12px] text-[#F0C84E] whitespace-nowrap self-start lg:self-center">
                {activeCapability.telemetryMetric}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
              <div className="md:col-span-4 space-y-3">
                <div className="font-mono text-[11px] text-[#7A8FA6] tracking-wider uppercase">
                  OPERATIONAL OVERVIEW
                </div>
                <p className="font-display text-[15px] text-[#EDF2F8] leading-relaxed">
                  {activeCapability.shortDesc}
                </p>
              </div>

              <div className="md:col-span-8 space-y-3 md:border-l md:border-[#142238] md:pl-8">
                <div className="font-mono text-[11px] text-[#00C2B3] tracking-wider uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00C2B3]" />
                  <span>BRAIN³ MATHEMATICAL &amp; ARCHITECTURAL PROTOCOL</span>
                </div>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#8FA3BC] leading-relaxed">
                  {activeCapability.technicalDepth}
                </p>
              </div>
            </div>
          </div>

          {/* Grid of All 8 Primary BRAIN³ Ingestion Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  id={`brain-card-${cap.id}`}
                  onClick={() => setSelectedVector(cap.id)}
                  className={`bg-[#080F1C] border p-5 rounded-[6px] transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                    selectedVector === cap.id
                      ? 'border-[#00C2B3] bg-[#00C2B3]/[0.05]'
                      : 'border-[#142238] hover:border-[#1E3A5F] hover:bg-[#0C1628]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-[4px] bg-[#0A1628] border border-[#142238] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#00C2B3]" />
                      </div>
                      <span className="font-mono text-[10px] text-[#3D5470] tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <h5 className="font-display font-bold text-[16px] text-[#EDF2F8] tracking-tight">
                      {cap.title}
                    </h5>

                    <p className="text-[13px] text-[#7A8FA6] leading-relaxed line-clamp-3">
                      {cap.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#142238] flex items-center justify-between font-mono text-[10px] text-[#00C2B3]">
                    <span>EXPLORE LOGIC</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Banner */}
          <div className="bg-[#0C1628] border border-[#C9A227]/40 p-6 sm:p-8 rounded-[8px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_30px_rgba(201,162,39,0.08)]">
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] text-[#F0C84E] tracking-wider uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F0C84E]" />
                <span>SOVEREIGN ARCHITECTURAL GUARANTEE</span>
              </div>
              <p className="font-display font-medium text-[16px] sm:text-[18px] text-[#EDF2F8]">
                BRAIN³ does not rely on third-party cloud monopolies or external foreign triage.
              </p>
              <p className="text-[13px] text-[#7A8FA6]">
                It runs on decentralized African edge nodes, ensuring complete operational autonomy
                and instant kinetic response during regional internet disruption.
              </p>
            </div>

            <a
              id="brain3-desk-inquiry-btn"
              href="mailto:contactorbital1@gmail.com?subject=Technical%20Briefing%20%E2%80%94%20BRAIN%C2%B3%20Proprietary%20Software"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#C9A227] text-[#040810] hover:bg-[#E5B82E] font-display font-bold text-[12px] tracking-[1.5px] transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(201,162,39,0.3)] shrink-0"
            >
              <span>REQUEST TECHNICAL BRIEFING</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
