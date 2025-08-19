export interface Personal {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  location: string;
  summary: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  role: string;
  category: ProjectCategory;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
  github: string;
  demo: string | null;
  image: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  developerTools: Skill[];
  librariesTools: Skill[];
}

export interface Education {
  university: string;
  degree: string;
  graduationDate: string;
  gpa: string;
  relevantCoursework: string[];
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Stats {
  yearsExperience: number;
  projectsCompleted: number;
  openSourceContributions: number;
  hackathonsWon: number;
}

export interface ResumeData {
  personal: Personal;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education;
  awards: Award[];
  stats: Stats;
}

export type ProjectCategory = 'Web' | 'Mobile' | 'AI/ML' | 'OSS' | 'Hackathon' | 'Academic';
