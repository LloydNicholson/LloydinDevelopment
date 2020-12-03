import { Project } from '../projects/projects.model';
import { Observable } from 'rxjs';

export interface ProjectData {
  applications: Observable<Project[]>;
  websites: Observable<Project[]>;
  games: Observable<Project[]>;
}
