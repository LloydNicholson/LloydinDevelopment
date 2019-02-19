import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';
  isShown = false;
  constructor() {}

  ngOnInit() {
  }

  onToggleShow() {
    this.isShown = !this.isShown;
  }
}
