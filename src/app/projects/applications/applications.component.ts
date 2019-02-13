import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  websites = [
    {name: 'Kid Connect Accounting', url: 'https://www.kidcon.co.za',
      imageUrl: 'https://www.kidcon.co.za/images/favicon.ico'},
    {name: 'Lloyd in Development',
      url: 'https://www.lloydindevelopment.com',
      imageUrl: 'https://lloydindevelopment.files.wordpress.com/2018/02/blue-house-e1518603633182.png?resize=111%2C111'},
  ];
  applications = [
    {name: 'Bar Graph Generator', url: 'https://rustylloyd.itch.io/bar-graph-generator',
    imageUrl: 'https://img.itch.zone/aW1hZ2UvMjc2MDI2LzEzNDU1MzQucG5n/original/BWZKR3.png'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
