import {Component, OnInit} from '@angular/core';
import {Animations} from '../shared/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [Animations.slideInRight]
})
export class ProjectsComponent implements OnInit {
  websites = [
    {
      name: 'Kid Connect Accounting',
      url: 'https://www.kidcon.co.za',
      imageUrl: 'https://lloydindevelopment.com/wp-content/uploads/2018/09/Slug-Thinner.png',
      details: 'Randomly generated accounting exercises created using Vanilla Javascript.'
    },
    {
      name: 'Lloyd in Development',
      url: 'https://www.lloydindevelopment.com',
      imageUrl: 'https://lloydindevelopment.files.wordpress.com/2018/02/blue-house-e1518603633182.png?resize=111%2C111',
      details: 'My old Word Press development site. Notice the loading speed...'
    },
  ];
  applications = [
    {
      name: 'Bar Graph Generator',
      url: 'https://rustylloyd.itch.io/bar-graph-generator',
      imageUrl: 'https://img.itch.zone/aW1hZ2UvMjc2MDI2LzEzNDU1MzQucG5n/original/BWZKR3.png',
      details: 'A small bar graph generator in it\'s infancy.'
    },
    {
      name: 'Ionic Music Artist App',
      url: 'https://palota-ionic-assessment-mar2019-starter-xprrpk.stackblitz.io',
      imageUrl: 'http://diymag.com/media/img/Artists/M/Mumford-and-Sons/_1500x1000_crop_center-center_75/' +
        'mumfordandsons_philsharp_diy_20150423_2047x1365_2.jpg',
      details: 'An dynamic music information app I created using the Ionic framework, http requests and REST API ' +
        '(best viewed on mobile devices).'
    }
  ];
  games = [
    {
      name: 'Noob Trainer',
      url: 'https://rustylloyd.itch.io/noobtrainer2018',
      imageUrl: 'https://lloydindevelopment.com/wp-content/uploads/2018/09/Noob-Trainer-Icon.png',
      details: 'A fun, colourful platformer'
    },
    {
      name: 'Sluggers',
      url: 'https://rustylloyd.itch.io/sluggers',
      imageUrl: 'https://lloydindevelopment.com/wp-content/uploads/2018/09/Screen-Shot-2018-07-17-at-18.36.52.png',
      details: 'A semi-finished platformer'
    },
  ];
  constructor() { }

  ngOnInit() {
  }
}
