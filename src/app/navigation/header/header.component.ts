import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';
  @Output() toggledSidenav = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit() {
  }

  onToggle() {
    this.toggledSidenav.emit(true);
  }
}
