import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Skill } from './skill.model';
import { Subscription } from 'rxjs';
import { listStateTrigger } from '../shared/animation';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    listStateTrigger
  ]
})
export class PortfolioComponent implements OnInit {
  mySkills: Skill[];
  skillsSub: Subscription;
  isLoading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.skillsSub = this.dataService
    .getMySkills()
    .subscribe((skills: Skill[]) => {
      this.mySkills = skills;
      this.isLoading = false;
    });
  }
}
