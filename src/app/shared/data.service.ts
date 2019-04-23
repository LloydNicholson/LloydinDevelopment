import { Injectable } from '@angular/core';
import { Application, Game, ProjectData, Website } from '../projects/projects.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _projectData = new BehaviorSubject<ProjectData>(
      {
        websites: [
          new Website(
              'Kid Connect Accounting',
              'https://www.kidcon.co.za',
              'https://lloydindevelopment.com/wp-content/uploads/2018/09/Slug-Thinner.png',
              'Randomly generated accounting exercises created using Vanilla Javascript.'
          ),
          new Website(
              'Lloyd in Development',
              'https://www.lloydindevelopment.com',
              'https://lloydindevelopment.files.wordpress.com/2018/02/blue-house-e1518603633182.png?resize=111%2C111',
              'My old Word Press development site. Notice the loading speed...'
          )
        ],
        applications: [
          new Application(
              'Bar Graph Generator',
              'https://rustylloyd.itch.io/bar-graph-generator',
              'https://img.itch.zone/aW1hZ2UvMjc2MDI2LzEzNDU1MzQucG5n/original/BWZKR3.png',
              'A small bar graph generator in it\'s infancy.'
          ),
          new Application(
              'Ionic Music Artist App',
              'https://palota-ionic-assessment-mar2019-starter-xprrpk.stackblitz.io',
              'http://diymag.com/media/img/Artists/M/Mumford-and-Sons/_1500x1000_crop_center-center_75/' +
              'mumfordandsons_philsharp_diy_20150423_2047x1365_2.jpg',
              'A dynamic music information app I created using the Ionic framework, http requests and REST API (best viewed on mobile devices).'
          )
        ],
        games: [
          new Game(
              'Noob Trainer',
              'https://rustylloyd.itch.io/noobtrainer2018',
              'https://lloydindevelopment.com/wp-content/uploads/2018/09/Noob-Trainer-Icon.png',
              'A fun, colourful platformer'
          ),
          new Game(
              'Sluggers',
              'https://rustylloyd.itch.io/sluggers',
              'https://lloydindevelopment.com/wp-content/uploads/2018/09/Screen-Shot-2018-07-17-at-18.36.52.png',
              'A semi-finished platformer'
          )
        ]
      }
  );


  get projectData(): Observable<ProjectData> {
    return this._projectData.asObservable();
  }

  constructor(private httpClient: HttpClient) {
  }

  addProjects() {

  }
}
