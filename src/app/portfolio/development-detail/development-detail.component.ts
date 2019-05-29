import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skill.model';
import { hoverStateTrigger } from '../../shared/animation';

@Component({
  selector: 'app-development-detail',
  templateUrl: './development-detail.component.html',
  styleUrls: ['./development-detail.component.css'],
  animations: [hoverStateTrigger]
})
export class DevelopmentDetailComponent implements OnInit {
  @Input() skill: Skill;
  hoverState = 'default';
  constructor() {
  }

  ngOnInit() {
  }

}
