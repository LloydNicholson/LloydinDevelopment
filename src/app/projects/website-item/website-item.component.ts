import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-website-item',
  templateUrl: './website-item.component.html',
  styleUrls: ['./website-item.component.css']
})
export class WebsiteItemComponent implements OnInit {
  @Input() website: {name: string, url: string, imageUrl: string, details: string};
  constructor() { }

  ngOnInit() {
  }

}
