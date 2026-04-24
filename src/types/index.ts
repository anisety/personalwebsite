export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  location: string;
  summary: string;
  avatar: string;
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
  graduationDate?: string;
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

/** Bloomberg-style window mnemonics; edit strings only in resume.json */
export interface PaneLabels {
  hero: string;
  heroCube?: string;
  about: string;
  skills: string;
  experience: string;
  projects: string;
  systems: string;
  education: string;
  contact: string;
  alerts?: string;
}

export interface SystemsTradingProject {
  slug: string;
  title: string;
  tags: string[];
  url: string;
  animation: 'lob' | 'feed' | 'arena' | 'backtester';
}

export interface TerminalSkills {
  languages: string[];
  systemsArchitecture: string[];
  dataQuant: string[];
  toolsPlatforms: string[];
}

export interface ProjectsResearchTerminalItem {
  title: string;
  tech: string;
  date: string;
  details: string;
}

export interface HonorsActivitiesTerminalActivity {
  name: string;
  role: string;
  location: string;
  dates: string;
}

export interface HonorsActivitiesTerminal {
  honors: string[];
  activities: HonorsActivitiesTerminalActivity[];
}

export interface ResumeData {
  personal: Personal;
  experience: Experience[];
  projects: Project[];
  systemsTradingProjects: SystemsTradingProject[];
  skills: Skills;
  education: Education;
  awards: Award[];
  stats: Stats;
  terminalSkills: TerminalSkills;
  projectsResearchTerminal: ProjectsResearchTerminalItem[];
  honorsActivitiesTerminal: HonorsActivitiesTerminal;
  paneLabels: PaneLabels;
}

export type ProjectCategory = 'Web' | 'Mobile' | 'AI/ML' | 'OSS' | 'Hackathon' | 'Academic';
