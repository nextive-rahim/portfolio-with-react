
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
}
