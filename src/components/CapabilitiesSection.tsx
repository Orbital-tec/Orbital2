import React, { useState } from 'react';
import { PLATFORM_FEATURES, INGESTION_VECTORS } from '../data';
import {
  EyeOff,
  BrainCircuit,
  MapPin,
  AlertTriangle,
  FolderLock,
  PhoneCall,
  Video,
  Network,
  Info,
  ChevronRight,
  ShieldCheck,
  Satellite,
  Plane,
  Camera,
  Mic,
  Radio,
  RadioTower,
  Activity,
} from 'lucide-react';
import { PlatformFeature, IngestionVector } from '../types';

export const CapabilitiesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<PlatformFeature | null>(null);
  const [selectedVector, setSelectedVector] = useState<IngestionVector | null>(null);
  const [activeTab, setActiveTab] = useState<'sensors' | 'platform'>('sensors');

  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0: return EyeOff;
      case 1: return BrainCircuit;
      case 2: return MapPin;
      case 3: return AlertTriangle;
      case 4: return FolderLock;
      case 5: return PhoneCall;
      case 6: return Video;
      case 7: return Network;
      default: return ShieldCheck;
    }
  };

  const getVectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Satellite': return Satellite;
      case 'Plane': return Plane;
      case 'Camera': return Camera;
      case 'Mic': return Mic;
      case 'Radio': return Radio;
      case 'RadioTower': return RadioTower;
      default: return Activity;
    }
  };

  return (
    <section
      id="intelligence"
      className="relative bg-[#040810] py-24 md:py-32 z-10 overflow-hidden border-t border-[#142238]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <div
              id="capabilities-mono-label"
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-[#00C2B3] bg-[#00C2B3]/[0.08] border border-[#00C2B3]/25 px-3 py-1.5 rounded-[3px] mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2B3]" />
              <span className="tracking-[2px]">[ DEFENSIVE SPECTRUM &amp; SENSOR FEEDS ]</span>
            </div>

            <h2
              id="capabilities-headline"
              className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] text-[#EDF2F8] leading-[1.1] tracking-[-1px]"
            >
              Beyond Human Telemetry:
              <br />
              <span className="text-[#C9A227]">The Multi-Tier Ingestion Grid.</span>
            </h2>
            <p className="font-display font-light text-[16px] text-[#7A8FA6] mt-4 leading-relaxed">
              In Sub-Saharan transit corridors and urban centers, raw telemetry is noisy and fragmented. Delivering security intelligence using the <span className="text-[#00C2B3] font-mono">AI-powered Brain³ OS</span>, every stream is ingested and sorted in real time—cross-referencing orbital SAR, tactical UAVs, nano-drones, acoustic gunshot arrays, and offline LoRa mesh packets to pinpoint kinetic danger with sub-second certainty.
            </p>
          </div>

          {/* Sub-navigation Tabs */}
          <div className="flex items-center bg-[#080F1C] border border-[#142238] p-1.5 rounded-[6px] self-start md:self-auto font-mono text-[12px]">
            <button
              type="button"
              onClick={() => setActiveTab('sensors')}
              className={`px-4 py-2 rounded-[4px] transition-all flex items-center gap-2 ${
                activeTab === 'sensors'
                  ? 'bg-[#00C2B3] text-[#040810] font-bold shadow-[0_0_15px_rgba(0,194,179,0.3)]'
                  : 'text-[#7A8FA6] hover:text-[#EDF2F8]'
              }`}
            >
              <Satellite className="w-3.5 h-3.5" />
              <span>INGESTION VECTORS ({INGESTION_VECTORS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('platform')}
              className={`px-4 py-2 rounded-[4px] transition-all flex items-center gap-2 ${
                activeTab === 'platform'
                  ? 'bg-[#00C2B3] text-[#040810] font-bold shadow-[0_0_15px_rgba(0,194,179,0.3)]'
                  : 'text-[#7A8FA6] hover:text-[#EDF2F8]'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE ({PLATFORM_FEATURES.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INGESTION VECTORS (Satellite, UAVs, CCTV, Acoustic, Nanodrones, LoRa Mesh) */}
        {activeTab === 'sensors' && (
          <div
            id="ingestion-vectors-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            {INGESTION_VECTORS.map((vec) => {
              const Icon = getVectorIcon(vec.iconName);
              return (
                <div
                  key={vec.id}
                  id={`vector-card-${vec.id}`}
                  onClick={() => setSelectedVector(vec)}
                  className="group relative bg-[#080F1C]/80 border border-[#142238] rounded-[6px] p-6 transition-all duration-200 hover:bg-[#00C2B3]/[0.05] hover:border-[#00C2B3]/60 flex flex-col justify-between cursor-pointer"
                  style={{ minHeight: '260px' }}
                >
                  <div>
                    {/* Top Row: Category Tag & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-[#00C2B3] bg-[#00C2B3]/10 border border-[#00C2B3]/20 px-2 py-0.5 rounded tracking-wider uppercase">
                        {vec.code}
                      </span>
                      <div className="w-9 h-9 rounded-[4px] bg-[#0C1628] border border-[#142238] flex items-center justify-center text-[#00C2B3] group-hover:border-[#00C2B3]/50 group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-[19px] text-[#EDF2F8] group-hover:text-white mb-2 leading-tight">
                      {vec.title}
                    </h3>

                    {/* Description */}
                    <p className="font-display font-light text-[13.5px] text-[#7A8FA6] leading-[1.6]">
                      {vec.description}
                    </p>
                  </div>

                  {/* African Context Badge & Specs */}
                  <div className="pt-4 mt-4 border-t border-[#142238]/80 flex flex-col gap-2">
                    <div className="text-[11.5px] text-[#C9A227] font-sans flex items-center gap-1.5 line-clamp-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                      <span>{vec.africanContext}</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-[#3D5470] group-hover:text-[#00C2B3]/90 transition-colors pt-1">
                      <span>STATUS: <span className="text-[#00FF88]">{vec.status}</span></span>
                      <span className="flex items-center gap-1">
                        VIEW PROTOCOL <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: PLATFORM CAPABILITIES (The 8 System Blocks) */}
        {activeTab === 'platform' && (
          <div
            id="platform-capabilities-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
          >
            {PLATFORM_FEATURES.map((feature, idx) => {
              const Icon = getFeatureIcon(idx);
              return (
                <div
                  key={feature.id}
                  id={`feature-card-${feature.id}`}
                  onClick={() => setSelectedFeature(feature)}
                  className="group relative bg-transparent border border-[#142238] rounded-[6px] p-6 transition-all duration-200 hover:bg-[#00C2B3]/[0.04] hover:border-t-3 hover:border-t-[#00C2B3] flex flex-col justify-between cursor-pointer"
                  style={{
                    minHeight: '230px',
                  }}
                >
                  <div>
                    {/* Top Bar: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] text-[#3D5470] group-hover:text-[#00C2B3] transition-colors tracking-widest">
                        SYS.{feature.number}
                      </span>
                      <Icon className="w-5 h-5 text-[#7A8FA6] group-hover:text-[#00C2B3] transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-[18px] text-[#EDF2F8] group-hover:text-white mb-2 leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="font-display font-light text-[14px] text-[#7A8FA6] leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Footer spec snippet */}
                  <div className="pt-4 mt-4 border-t border-[#142238]/60 flex items-center justify-between text-[11px] font-mono text-[#3D5470] group-hover:text-[#00C2B3]/80 transition-colors">
                    <span className="uppercase tracking-wider">{feature.category}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      SPEC <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Ingestion Vector Modal */}
        {selectedVector && (
          <div
            id="vector-modal-backdrop"
            className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVector(null)}
          >
            <div
              id="vector-modal-content"
              className="bg-[#0C1628] border border-[#00C2B3]/40 max-w-lg w-full p-6 sm:p-8 rounded-[8px] shadow-[0_0_50px_rgba(0,194,179,0.2)] text-left relative animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 border-b border-[#142238] pb-3">
                <span className="font-mono text-[11px] text-[#00C2B3] tracking-[2px] uppercase">
                  [ INGESTION VECTOR SPEC // {selectedVector.code} ]
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedVector(null)}
                  className="text-[#7A8FA6] hover:text-[#EDF2F8] font-mono text-sm px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-display font-bold text-[24px] text-[#EDF2F8] mb-1">
                {selectedVector.title}
              </h3>
              <div className="font-mono text-[11px] text-[#C9A227] mb-3">
                {selectedVector.tagline}
              </div>

              <p className="font-display font-light text-[15px] text-[#7A8FA6] mb-4 leading-relaxed">
                {selectedVector.description}
              </p>

              <div className="space-y-3 font-mono text-[12px]">
                <div className="bg-[#080F1C] border border-[#142238] p-3.5 rounded-[4px]">
                  <div className="text-[#C9A227] font-bold mb-1">REALISTIC AFRICAN ECOSYSTEM INTEGRATION:</div>
                  <div className="text-[#EDF2F8]/90 font-sans text-sm">{selectedVector.africanContext}</div>
                </div>

                <div className="bg-[#080F1C] border border-[#142238] p-3.5 rounded-[4px]">
                  <div className="text-[#00C2B3] font-bold mb-1">TECHNICAL SPECIFICATIONS &amp; RELIABILITY:</div>
                  <div className="text-[#7A8FA6] font-sans text-sm">{selectedVector.protocolSpecs}</div>
                </div>

                <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-[#7A8FA6]">
                  <span>DEPLOYMENT STATUS: <span className="text-[#00FF88] font-bold">{selectedVector.status}</span></span>
                  <span>SECURITY: <span className="text-[#EDF2F8] font-bold">SOVEREIGN AIR-GAPPED</span></span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedVector(null)}
                  className="bg-[#00C2B3] text-[#040810] font-display font-bold text-[12px] tracking-[1.5px] px-5 py-2 rounded-[4px] hover:bg-[#00FFEB] transition-colors"
                >
                  CLOSE SPECIFICATION
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feature Detail Modal */}
        {selectedFeature && (
          <div
            id="feature-modal-backdrop"
            className="fixed inset-0 bg-[#040810]/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFeature(null)}
          >
            <div
              id="feature-modal-content"
              className="bg-[#0C1628] border border-[#00C2B3]/40 max-w-lg w-full p-6 sm:p-8 rounded-[8px] shadow-[0_0_50px_rgba(0,194,179,0.15)] text-left relative animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 border-b border-[#142238] pb-3">
                <span className="font-mono text-[11px] text-[#00C2B3] tracking-[2px]">
                  [ SYSTEM SPECIFICATION // MOD.{selectedFeature.number} ]
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="text-[#7A8FA6] hover:text-[#EDF2F8] font-mono text-sm px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-display font-bold text-[24px] text-[#EDF2F8] mb-2">
                {selectedFeature.title}
              </h3>

              <p className="font-display font-light text-[15px] text-[#7A8FA6] mb-6 leading-relaxed">
                {selectedFeature.description}
              </p>

              <div className="bg-[#080F1C] border border-[#142238] p-4 rounded-[4px] space-y-2 font-mono text-[12px]">
                <div className="text-[#00C2B3] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>TECHNICAL ARCHITECTURE SPECIFICATION:</span>
                </div>
                <div className="text-[#EDF2F8]/90 leading-relaxed font-sans text-sm">
                  {selectedFeature.technicalSpecs}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="bg-[#00C2B3] text-[#040810] font-display font-bold text-[12px] tracking-[1.5px] px-5 py-2 rounded-[4px] hover:bg-[#00FFEB] transition-colors"
                >
                  CLOSE BRIEFING
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
