import {Component, OnInit} from '@angular/core';
import {Animations} from '../../shared/animations';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
  animations: [
    Animations.slideInRight
  ]
})
export class ApplicationsComponent implements OnInit {
  websites = [
    {
      name: 'Kid Connect Accounting', url: 'https://www.kidcon.co.za',
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
      name: 'Bar Graph Generator', url: 'https://rustylloyd.itch.io/bar-graph-generator',
      imageUrl: 'https://img.itch.zone/aW1hZ2UvMjc2MDI2LzEzNDU1MzQucG5n/original/BWZKR3.png',
      details: 'A small bar graph generator in it\'s infancy.'}
    ];
  constructor() { }

  ngOnInit() {
  }
}
