import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-development-detail',
  templateUrl: './development-detail.component.html',
  styleUrls: ['./development-detail.component.css']
})
export class DevelopmentDetailComponent implements OnInit {
  @Input() skill: Skill;
  constructor() {
  }

  ngOnInit() {
  }

}
