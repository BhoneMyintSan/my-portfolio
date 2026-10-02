export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  headline: string;
  bio: string;
  avatar: string;
  resumeUrl: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface SkillGroup {
  id: "analysis" | "visualization" | "data" | "workflow" | "ai" | "web";
  title: string;
  skills: readonly string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: "Data & Analytics" | "Web Development" | "UI/UX Design" | "Desktop App" | "Game Development";
  technologies: readonly string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  pdfUrl?: string;
  featured: boolean;
  challenge: string;
  approach: readonly string[];
  outcome: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  isCurrent: boolean;
  description: string;
  highlights: readonly string[];
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  duration: string;
  status: string;
  gpa?: string;
  honors?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLinks;
  skillGroups: readonly SkillGroup[];
  projects: readonly Project[];
  experience: readonly Experience[];
  education: readonly Education[];
  languages: readonly Language[];
  strengths: readonly string[];
  metrics: {
    reviewsAnalyzed: string;
    eventParticipantsSupported: string;
  };
}
