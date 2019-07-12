import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Skill } from './skill.model';
import { Subscription } from 'rxjs';
import { listStateTrigger } from '../shared/animation';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/store/auth.reducer';
import { AppState } from '../store/app.reducer';
import { startLoading, stopLoading } from '../store/app.action';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    listStateTrigger
  ]
})
export class PortfolioComponent implements OnInit, OnDestroy {
  mySkills: Skill[];
  skillsSub: Subscription;
  isLoading = false;

  constructor(
      private dataService: DataService,
      private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('app').subscribe((state) => {
      this.isLoading = state.isLoading;
    });

    this.store.dispatch(startLoading());
    this.skillsSub = this.dataService
    .getMySkills()
    .subscribe((skills: Skill[]) => {
      this.mySkills = skills;
      this.store.dispatch(stopLoading());
    });
  }

  ngOnDestroy() {
    this.skillsSub.unsubscribe();
  }
}
