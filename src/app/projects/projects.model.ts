export interface Website {
  name: string;
  url: string;
  imageUrl: string;
  description: string;
  id?: string;
}

export interface Application {
  name: string;
  url: string;
  imageUrl: string;
  description: string;
  id?: string;
}

export interface Game {
  name: string;
  url: string;
  imageUrl: string;
  description: string;
  id?: string;
}


export class ProjectData {
  constructor(
      public websites: Website[],
      public games: Game[],
      public applications: Application[]
  ) {
  }
}

// export interface Skill {
//   name: string;
//   experienceLevel: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
//   projectType: 'Website' | 'Game' | 'Application' | 'Hybrid';
//   projects?: Array<{name: string, url: string}>;
// }
