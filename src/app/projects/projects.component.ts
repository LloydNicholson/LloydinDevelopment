import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  websitesSub: Subscription;
  websites: Project[];
  isLoadingWebsites = true;
  applicationsSub: Subscription;
  applications: Project[];
  isLoadingApplications = true;
  gamesSub: Subscription;
  games: Project[];
  isLoadingGames = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.websitesSub = this.dataService
    .getWebsites()
    .subscribe((websites: Project[]) => {
      this.websites = websites;
      this.isLoadingWebsites = false;
    });
    this.applicationsSub = this.dataService
    .getApplications()
    .subscribe((applications: Project[]) => {
      this.applications = applications;
      this.isLoadingApplications = false;
    });
    this.gamesSub = this.dataService.getGames().subscribe((games: Project[]) => {
      this.games = games;
      this.isLoadingGames = false;
    });
  }

  ngOnDestroy() {
    this.gamesSub.unsubscribe();
    this.applicationsSub.unsubscribe();
    this.websitesSub.unsubscribe();
  }
}
