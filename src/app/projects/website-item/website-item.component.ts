import {Component, Input, OnInit} from '@angular/core';
import {Website} from '../projects.model';

@Component({
  selector: 'app-website-item',
  templateUrl: './website-item.component.html',
  styleUrls: ['./website-item.component.css']
})
export class WebsiteItemComponent implements OnInit {
  @Input() website: Website;
  constructor() { }

  ngOnInit() {
  }

}
