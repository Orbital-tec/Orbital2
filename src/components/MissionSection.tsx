import React, { useState } from 'react';
import { MISSION_PILLARS } from '../data';
import { Shield, Radio, Cpu, Send, Lock, Eye, Activity, Satellite, Plane, Camera, Mic, Wifi, Users } from 'lucide-react';

export const MissionSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('core');

  const nodeDetails: Record<string, { title: string; subtitle: string; spec: string; latency: string }> = {
    core: {
      title: 'AI-POWERED Brain³ OS // SOVEREIGN CORE',
      subtitle: 'Multi-Sensor Token Orchestrator & Real-Time Security Intelligence',
      spec: 'The deterministic foundation of the AI-powered Brain³ OS orchestrating satellite SAR downlinks, UAV patrol telemetry, acoustic audio streams, and LoRa mesh packets into a unified spatial token bus.',
      latency: 'Kernel Tokenization: < 40ms',
    },
    satellite: {
      title: 'ORBITAL SATELLITE & SAR CONSTELLATION',
      subtitle: 'Low-Earth Orbit Multi-Spectral & Synthetic Aperture Radar',
      spec: 'Penetrates Harmattan dust clouds and dense Niger Delta foliage to detect unmapped transit encampments and border movements, streaming directly to the AI-powered Brain³ OS.',
      latency: 'Revisit Cycle: 15 mins / Downlink to Brain³ OS',
    },
    drones: {
      title: 'TACTICAL UAV & URBAN NANO-DRONES',
      subtitle: 'Autonomous Corridor Overwatch & Close-Quarters Recon',
      spec: 'Long-range thermal fixed-wing drones monitor highway arteries while quiet sub-35g nano-drones navigate congested urban compounds with telemetry synced to the AI-powered Brain³ OS.',
      latency: 'Patrol Radius: 60km / Video stream to Brain³ OS',
    },
    groundSensors: {
      title: 'SOLAR EDGE CCTV & ACOUSTIC NODES',
      subtitle: 'Grid-Independent Optical & Ballistic Detection',
      spec: 'Solar-powered smart cameras at road chokepoints paired with streetlight acoustic sensors that classify AK-47 muzzle blasts within 80ms into our custom proprietary software space.',
      latency: 'Acoustic Triangulation: < 80ms',
    },
    civilianMesh: {
      title: 'CIVILIAN MESH & OFFLINE LORAWAN RELAYS',
      subtitle: 'Shielded Civilian Telemetry & P2P Radio Hops',
      spec: 'Citizen threat reports with reporter identity shielded from recipients, routed through store-and-forward BLE/LoRa mesh and ingested by custom proprietary software even during total telecommunication shutdowns.',
      latency: 'P2P Mesh Hop: < 240ms',
    },
    ai: {
      title: 'PROPRIETARY AI FUSION ENGINE',
      subtitle: 'Spatial-Temporal Multimodal Threat Classifier & Sorter',
      spec: 'Security intelligence driven by custom proprietary software. Fuses and sorts asynchronous multi-sensor signals, resolves African vernaculars & slang, deconflicts false alarms, and sorts threats by kinetic urgency.',
      latency: 'Deterministic Inference & Sorting: < 320ms',
    },
    dispatch: {
      title: 'TACTICAL RESPONDER DISPATCH',
      subtitle: 'Direct Encrypted Routing to Vetted Units',
      spec: 'Automated distress beacons sent straight to verified community guards, neighborhood patrols, and emergency medical responders via an ultra-low latency deterministic bus.',
      latency: 'Dispatch Execution: < 3.0 seconds',
    },
  };

  const currentInfo = nodeDetails[activeNode] || nodeDetails.core;

  return (
    <section
      id="mission"
      className="relative bg-[#040810] py-24 md:py-32 z-10 overflow-hidden border-t border-[#142238]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: 45% (5 cols on lg) */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Mono label */}
            <div
              id="mission-mono-label"
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#00C2B3] bg-[#00C2B3]/[0.08] border border-[#00C2B3]/25 px-3.5 py-1.5 rounded-[3px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2B3]" />
              <span className="tracking-[2px]">[ MISSION DIRECTIVE // PAN-AFRICA ]</span>
            </div>

            {/* Headline */}
            <h2
              id="mission-headline"
              className="font-display font-bold text-[34px] sm:text-[44px] md:text-[48px] text-[#EDF2F8] leading-[1.1] tracking-[-1px]"
            >
              Legacy Infrastructure
              <br />
              Must Not Become
              <br />
              <span className="text-[#C9A227]">The Weakest Link.</span>
            </h2>

            {/* Body */}
            <div
              id="mission-body-content"
              className="font-display font-light text-[16px] text-[#7A8FA6] leading-[1.8] space-y-4"
            >
              <p>
                Security systems across Sub-Saharan Africa were not built
                for the threats that exist today. They were built for a
                world that no longer exists — slow, centralized, dependent
                on municipal power grids and telephony cables that collapse exactly when they are
                needed most.
              </p>

              <p>
                Orbital Avtacha unites the entire defensive spectrum — fusing
                orbital satellite radar, long-range patrol UAVs, urban nano-drones,
                solar-powered edge CCTV, acoustic gunshot arrays, and civilian telemetry.
                Delivering security intelligence driven by our <span className="text-[#00C2B3] font-mono">custom proprietary software</span>, all incoming signals are ingested, cross-verified, and sorted in real time into actionable tactical protection.
              </p>

              <p className="text-[#EDF2F8] font-normal border-l-2 border-[#00C2B3] pl-4 py-2 italic bg-[#0C1628]/40 rounded-r-[4px]">
                &ldquo;The intelligence is never missing. With custom proprietary software, we fuse chaos into instant, verified tactical protection.&rdquo;
              </p>
            </div>

            {/* Three Mission Pillars */}
            <div id="mission-pillars-list" className="pt-6 space-y-4 border-t border-[#142238]">
              {MISSION_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  id={`pillar-${pillar.title.toLowerCase()}`}
                  className="bg-[#0C1628]/60 border border-[#142238] hover:border-[#00C2B3]/40 p-3.5 rounded-[4px] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-[15px] text-[#EDF2F8] tracking-[2px]">
                      {pillar.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#00C2B3] tracking-[1px]">
                      {pillar.monoCode}
                    </span>
                  </div>
                  <p className="font-display font-light text-[13px] text-[#7A8FA6] mt-1">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 55% (7 cols on lg) — Architecture Diagram */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Mono string above diagram */}
            <div
              id="arch-diagram-mono-header"
              className="w-full text-center sm:text-left font-mono text-[11px] text-[#00C2B3] tracking-[2px] mb-4 bg-[#080F1C] border border-[#142238] px-4 py-2.5 rounded-[4px] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#00C2B3] animate-pulse" />
                <span>MULTIMODAL TOPOLOGY: SATELLITE · DRONES · CCTV · CIVILIAN MESH</span>
              </div>
              <span className="text-[#3D5470] hidden sm:inline">TOPOLOGY v2.0</span>
            </div>

            {/* Interactive Architecture SVG Canvas */}
            <div
              id="architecture-diagram-container"
              className="relative w-full aspect-[4/3] max-w-[620px] bg-[#080F1C] border border-[#1E3A5F]/60 rounded-[8px] p-4 flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.7)] overflow-hidden"
            >
              {/* Radial backdrop */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0,194,179,0.08) 0%, rgba(8,15,28,0.95) 75%)',
                }}
              />

              <svg viewBox="0 0 600 450" className="w-full h-full relative z-10 select-none">
                <defs>
                  {/* Flowing animated dash lines */}
                  <linearGradient id="flowTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C2B3" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00FFEB" stopOpacity="1" />
                  </linearGradient>

                  <filter id="coreGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Concentric Radar Guides */}
                <circle cx="300" cy="225" r="90" fill="none" stroke="#142238" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="300" cy="225" r="160" fill="none" stroke="#142238" strokeWidth="1" />
                <circle cx="300" cy="225" r="210" fill="none" stroke="#142238" strokeWidth="0.75" strokeDasharray="2 4" />

                {/* Animated Flowing Dashed Lines (Inward Intelligence Stream) */}
                {/* From 4 Multimodal Nodes to Core */}
                <line x1="110" y1="80" x2="260" y2="200" stroke="#00C2B3" strokeWidth="1.5" className="animate-dash" opacity="0.8" />
                <line x1="490" y1="80" x2="340" y2="200" stroke="#00C2B3" strokeWidth="1.5" className="animate-dash" opacity="0.8" />
                <line x1="110" y1="370" x2="260" y2="250" stroke="#00C2B3" strokeWidth="1.5" className="animate-dash" opacity="0.8" />
                <line x1="490" y1="370" x2="340" y2="250" stroke="#00C2B3" strokeWidth="1.5" className="animate-dash" opacity="0.8" />

                {/* AI Analysis Connection */}
                <line x1="300" y1="55" x2="300" y2="175" stroke="#C9A227" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />

                {/* Responder Dispatch Connection */}
                <line x1="300" y1="275" x2="300" y2="395" stroke="#00FF88" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />

                {/* Line Relays Labels */}
                <text x="170" y="130" fill="#3D5470" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1">ORBITAL SAR</text>
                <text x="360" y="130" fill="#3D5470" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1">UAV OVERWATCH</text>
                <text x="165" y="325" fill="#3D5470" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1">SOLAR CCTV / AUDIO</text>
                <text x="355" y="325" fill="#3D5470" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1">OFFLINE MESH P2P</text>

                {/* 4 Multimodal Corner Nodes */}
                {/* Node 1: Top Left - Satellite SAR */}
                <g
                  transform="translate(110, 80)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('satellite')}
                >
                  <circle cx="0" cy="0" r="30" fill="#0C1628" stroke={activeNode === 'satellite' ? '#00FFEB' : '#00C2B3'} strokeWidth={activeNode === 'satellite' ? '2.5' : '1.5'} />
                  <circle cx="0" cy="0" r="8" fill="#00C2B3" opacity="0.8" className="animate-ping" />
                  <circle cx="0" cy="0" r="4" fill="#EDF2F8" />
                  <text x="0" y="44" textAnchor="middle" fill="#EDF2F8" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">SATELLITE &amp; SAR</text>
                  <text x="0" y="56" textAnchor="middle" fill="#00C2B3" fontSize="8" fontFamily="JetBrains Mono">LEO RADAR FEEDS</text>
                </g>

                {/* Node 2: Top Right - UAV & Nanodrones */}
                <g
                  transform="translate(490, 80)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('drones')}
                >
                  <circle cx="0" cy="0" r="30" fill="#0C1628" stroke={activeNode === 'drones' ? '#00FFEB' : '#00C2B3'} strokeWidth={activeNode === 'drones' ? '2.5' : '1.5'} />
                  <circle cx="0" cy="0" r="8" fill="#00C2B3" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.4s' }} />
                  <circle cx="0" cy="0" r="4" fill="#EDF2F8" />
                  <text x="0" y="44" textAnchor="middle" fill="#EDF2F8" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">UAV &amp; NANODRONES</text>
                  <text x="0" y="56" textAnchor="middle" fill="#00C2B3" fontSize="8" fontFamily="JetBrains Mono">AERIAL PATROL</text>
                </g>

                {/* Node 3: Bottom Left - Solar Edge CCTV & Acoustic */}
                <g
                  transform="translate(110, 370)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('groundSensors')}
                >
                  <circle cx="0" cy="0" r="30" fill="#0C1628" stroke={activeNode === 'groundSensors' ? '#00FFEB' : '#00C2B3'} strokeWidth={activeNode === 'groundSensors' ? '2.5' : '1.5'} />
                  <circle cx="0" cy="0" r="8" fill="#00C2B3" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.8s' }} />
                  <circle cx="0" cy="0" r="4" fill="#EDF2F8" />
                  <text x="0" y="-38" textAnchor="middle" fill="#EDF2F8" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">SOLAR CCTV &amp; AUDIO</text>
                  <text x="0" y="-26" textAnchor="middle" fill="#00C2B3" fontSize="8" fontFamily="JetBrains Mono">BALLISTIC SENSORS</text>
                </g>

                {/* Node 4: Bottom Right - Civilian Mesh & LoRa */}
                <g
                  transform="translate(490, 370)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('civilianMesh')}
                >
                  <circle cx="0" cy="0" r="30" fill="#0C1628" stroke={activeNode === 'civilianMesh' ? '#00FFEB' : '#00C2B3'} strokeWidth={activeNode === 'civilianMesh' ? '2.5' : '1.5'} />
                  <circle cx="0" cy="0" r="8" fill="#00C2B3" opacity="0.8" className="animate-ping" style={{ animationDelay: '1.2s' }} />
                  <circle cx="0" cy="0" r="4" fill="#EDF2F8" />
                  <text x="0" y="-38" textAnchor="middle" fill="#EDF2F8" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">CIVILIAN MESH</text>
                  <text x="0" y="-26" textAnchor="middle" fill="#00C2B3" fontSize="8" fontFamily="JetBrains Mono">P2P LORAWAN RELAY</text>
                </g>

                {/* AI Analysis Node (Top Center) */}
                <g
                  transform="translate(300, 55)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('ai')}
                >
                  <rect x="-85" y="-20" width="170" height="40" rx="4" fill="#0C1628" stroke={activeNode === 'ai' ? '#F0C84E' : '#C9A227'} strokeWidth={activeNode === 'ai' ? '2' : '1.5'} />
                  <text x="0" y="-2" textAnchor="middle" fill="#F0C84E" fontSize="11" fontFamily="Space Grotesk" fontWeight="bold">PROPRIETARY AI CORE</text>
                  <text x="0" y="11" textAnchor="middle" fill="#C9A227" fontSize="8" fontFamily="JetBrains Mono">SPATIAL FUSION &amp; SORTING</text>
                </g>

                {/* Responder Dispatch Output Node (Bottom Center) */}
                <g
                  transform="translate(300, 395)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('dispatch')}
                >
                  <rect x="-75" y="-20" width="150" height="40" rx="4" fill="#0C1628" stroke={activeNode === 'dispatch' ? '#00FF88' : '#00FF88'} strokeWidth={activeNode === 'dispatch' ? '2' : '1.5'} />
                  <text x="0" y="-2" textAnchor="middle" fill="#EDF2F8" fontSize="11" fontFamily="Space Grotesk" fontWeight="bold">TACTICAL RESPONDER DISPATCH</text>
                  <text x="0" y="11" textAnchor="middle" fill="#00FF88" fontSize="8" fontFamily="JetBrains Mono">&lt; 3.0 SEC ROUTE</text>
                </g>

                {/* Center Node: ORBITAL CORE (Hexagonal, Glowing Teal) */}
                <g
                  transform="translate(300, 225)"
                  className="cursor-pointer group"
                  onClick={() => setActiveNode('core')}
                >
                  {/* Hexagon Outer Glow */}
                  <polygon
                    points="0,-56 48,-28 48,28 0,56 -48,28 -48,-28"
                    fill="rgba(0,194,179,0.14)"
                    stroke={activeNode === 'core' ? '#00FFEB' : '#00C2B3'}
                    strokeWidth={activeNode === 'core' ? '2.5' : '2'}
                    filter="url(#coreGlowFilter)"
                  />
                  {/* Hexagon Inner */}
                  <polygon
                    points="0,-48 42,-24 42,24 0,48 -42,24 -42,-24"
                    fill="#080F1C"
                    stroke="#00FFEB"
                    strokeWidth="1.5"
                  />
                  {/* Center Pulse Ring */}
                  <circle cx="0" cy="0" r="22" fill="#00C2B3" opacity="0.2" className="animate-ping" />
                  <circle cx="0" cy="0" r="14" fill="#040810" stroke="#00C2B3" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="6" fill="#00FFEB" />

                  {/* Core Labels */}
                  <text x="0" y="-68" textAnchor="middle" fill="#00C2B3" fontSize="12" fontFamily="Space Grotesk" fontWeight="bold" letterSpacing="1">
                    SOVEREIGN CORE
                  </text>
                  <text x="0" y="76" textAnchor="middle" fill="#7A8FA6" fontSize="8" fontFamily="JetBrains Mono">
                    SOVEREIGN STREAM BUS
                  </text>
                </g>
              </svg>
            </div>

            {/* Architecture Node Interactive Details Box */}
            <div className="w-full mt-4 bg-[#0C1628] border border-[#142238] p-4 rounded-[6px] text-left transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#142238] pb-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C2B3] animate-pulse" />
                  <span className="font-display font-bold text-[13px] text-[#EDF2F8] tracking-wider">
                    {currentInfo.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#00FF88] bg-[#00FF88]/10 px-2 py-0.5 rounded border border-[#00FF88]/20">
                  {currentInfo.latency}
                </span>
              </div>
              <p className="font-display font-light text-[13px] text-[#7A8FA6] leading-relaxed">
                {currentInfo.spec}
              </p>
              <div className="mt-2 font-mono text-[10px] text-[#3D5470] flex items-center justify-between">
                <span>[ CLICK ANY NODE IN DIAGRAM TO INSPECT PROTOCOL SPEC ]</span>
                <span className="text-[#C9A227]">{currentInfo.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

