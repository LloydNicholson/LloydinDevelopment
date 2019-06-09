import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Project } from './projects.model';
import { listStateTrigger } from '../shared/animation';
import { ProjectData } from '../shared/data.model';

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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataSub = this.dataService
    .getData()
    .subscribe((data: ProjectData) => {
      data.websites.subscribe((websites: Project[]) => {
        this.websites = websites;
        this.isLoading = false;
      });
      data.games.subscribe((games: Project[]) => {
        this.games = games;
        this.isLoading = false;
      });
      data.applications.subscribe((apps: Project[]) => {
        this.applications = apps;
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
