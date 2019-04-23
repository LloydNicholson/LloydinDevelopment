export class Website {
  constructor(
      public name: string,
      public url: string,
      public imageUrl: string,
      public description: string
  ) {
  }
}

export class Application {
  constructor(
      public name: string,
      public url: string,
      public imageUrl: string,
      public description: string
  ) {
  }
}

export class Game {
  constructor(
      public name: string,
      public url: string,
      public imageUrl: string,
      public description: string
  ) {
  }
}

export class ProjectData {
  constructor(
      public websites: Website[],
      public games: Game[],
      public applications: Application[]
  ) {
  }
}

export class Skill {
  constructor(
      public name: string,
      public experienceLevel: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner',
      public projectType: 'Website' | 'Game' | 'Application' | 'Hybrid',
      public projects?: Array<{name: string, url: string}>
  ) {
  }

}
// export interface Skill {
//   name: string;
//   experienceLevel: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
//   projectType: 'Website' | 'Game' | 'Application' | 'Hybrid';
//   projects?: Array<{name: string, url: string}>;
// }
