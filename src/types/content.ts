export interface Profile {
  fullName: string;
  jobTitle: string;
  location: string;
  introduction: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  details: string[];
}

export interface Certification {
  id: string;
  period: string;
  title: string;
}

export interface TechWatchItem {
  id: string;
  title: string;
  source: string;
  url: string;
  summary: string;
}

export interface AboutBlock {
  id: string;
  title: string;
  paragraphs: string[];
}
