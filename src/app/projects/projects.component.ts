import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Project } from './projects.model';
import { listStateTrigger } from '../shared/animation';
import { ProjectData } from '../shared/data.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { startLoading, stopLoading } from '../store/app.action';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  isLoading = true;
  websites: Project[];
  applications: Project[];
  games: Project[];
  dataSub: Subscription;

  constructor(private dataService: DataService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('app').subscribe((state) => {
      this.isLoading = state.isLoading;
    });
    this.store.dispatch(startLoading());

    this.dataSub = this.dataService
    .getData()
    .subscribe((data: ProjectData) => {
      data.websites.subscribe((websites: Project[]) => {
        this.websites = websites;
        this.store.dispatch(stopLoading());
      });

      data.games.subscribe((games: Project[]) => {
        this.games = games;
        this.store.dispatch(stopLoading());
      });

      data.applications.subscribe((apps: Project[]) => {
        this.applications = apps;
        this.store.dispatch(stopLoading());
      });
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
