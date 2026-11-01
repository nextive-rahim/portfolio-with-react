
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  features: string[];
  link?: string;
}

export interface AppLink {
  name: string;
  platform: 'Play Store' | 'App Store' | 'Softonic';
  url: string;
}

export interface StoreApp {
  name: string;
  icon: string;
  url: string;
  store: 'App Store' | 'Play Store' | 'Mac App Store';
  note?: string;
  website?: string;
}

/**
 * A single shipped product. Most products ship on Android AND iOS,
 * and many also have a companion web platform.
 */
export interface Product {
  name: string;
  description: string;
  tags: string[];
  /** Google Play listing */
  play?: string;
  /** Optional label override for the `play` button (e.g. "Softonic") */
  playLabel?: string;
  /** Apple App Store listing */
  appStore?: string;
  /** Companion web platform */
  web?: string;
  /** Icon for the product (Play or App Store artwork) */
  icon: string;
  /** iOS App Store id, used for the App Store link */
  appStoreId?: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  coreSkills: SkillCategory[];
  experience: Experience[];
  education: {
    degree: string;
    institution: string;
    completed: string;
    major: string;
  };
  majorProjects: Project[];
  appLinks: AppLink[];
  strengths: string[];
  products: Product[];
}
