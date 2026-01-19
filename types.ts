
export type Language = 'EN' | 'HI' | 'BN';

export interface ProjectStep {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  type: string;
  duration: string;
  engagement: string;
  thumbnail: string;
  videoUrl: string;
  beforeImg: string;
  afterImg: string;
  tools: string[];
  process: {
    goal: string;
    challenges: string;
    results: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  logo: string;
}

export interface ContentStrings {
  heroTitle: string;
  heroSub: string;
  viewProjects: string;
  skillsTitle: string;
  toolsTitle: string;
  howIWork: string;
  contactTitle: string;
  disclaimer: string;
  allRights: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  processGoal: string;
  processChallenges: string;
  processTools: string;
  processResults: string;
}
