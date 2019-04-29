import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Skill } from './skill.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  mySkills: Skill[];
  skillsSub: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.skillsSub = this.dataService.getMySkills().subscribe((skills: Skill[]) => {
      this.mySkills = skills;
    });
  }

}
