import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';

  constructor() {
  }

  ngOnInit() {
  }
}
