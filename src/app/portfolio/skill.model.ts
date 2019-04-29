export interface Skill {
  name: string;
  projectType: string;
  experienceLevel: string;
  id?: string;
  projects?: Project[];
}

export interface Project {
  name: string;
  url: string;
}
