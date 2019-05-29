import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../projects.model';
import { hoverStateTrigger } from '../../shared/animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [hoverStateTrigger]
})
export class ProjectComponent implements OnInit {
  @Input() type: 'website' | 'application' | 'game';
  @Input() project: Project;
  hoverState = 'default';

  constructor() {
  }

  ngOnInit() {
  }

}
