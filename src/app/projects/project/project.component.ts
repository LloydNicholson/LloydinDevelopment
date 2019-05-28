import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() type: 'website' | 'application' | 'game';
  @Input() project: Project;

  constructor() {
  }

  ngOnInit() {
  }

}
