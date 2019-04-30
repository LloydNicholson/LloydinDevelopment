import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
}
