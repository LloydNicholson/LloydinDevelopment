import { Project } from '../projects/projects.model';

export interface Skill {
  name: string;
  skillType: string;
  experienceLevel: string;
  imageUrl: string;
  id?: string;
  projects?: Project[];
}
