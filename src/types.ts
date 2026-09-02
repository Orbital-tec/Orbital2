export interface StatItem {
  id: string;
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}

export interface MissionPillar {
  title: string;
  monoCode: string;
  description: string;
}

export interface RoadmapPhase {
  id: string;
  phase: string;
  timeframe: string;
  status: 'ACTIVE' | 'UPCOMING';
  title: string;
  milestones: string[];
}

export interface FocusCard {
  id: string;
  number: string;
  title: string;
  body: string;
  tags: string[];
}

export interface PlatformFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  technicalSpecs: string;
  category: 'SATELLITE & UAV' | 'CCTV & SENSORS' | 'CIVILIAN MESH' | 'AI & INFRASTRUCTURE' | 'TACTICAL DISPATCH' | 'CIVILIAN' | 'AI' | 'DEFENSE' | 'INFRASTRUCTURE';
  sourceType?: 'SATELLITE' | 'DRONE' | 'NANODRONE' | 'CCTV' | 'ACOUSTIC' | 'MESH_RELAY' | 'CIVILIAN_TELEMETRY' | 'CELLULAR_GSM';
  badge?: string;
}

export interface IngestionVector {
  id: string;
  title: string;
  code: string;
  tagline: string;
  description: string;
  africanContext: string;
  protocolSpecs: string;
  iconName: string;
  status: 'ACTIVE' | 'CALIBRATING' | 'EXPANDING';
}

export interface ComplianceBadge {
  id: string;
  title: string;
  status: string;
  standardType: string;
  description: string;
}

export interface IntelDispatch {
  id: string;
  dispatchNumber: string;
  date: string;
  category: 'Development Update' | 'Security Analysis' | 'Community' | 'Press' | 'Neural Architecture';
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  content: string[];
}
