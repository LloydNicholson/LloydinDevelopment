import {Component, OnInit} from '@angular/core';
import {Animations} from '../shared/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [Animations.slideInRight]
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
