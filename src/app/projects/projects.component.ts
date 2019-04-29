import { Component, EventEmitter, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Animations } from '../shared/animations';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Application, Game, Website } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [Animations.slideInRight],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit, OnDestroy {
  websitesSub: Subscription;
  websites: Website[];
  applicationsSub: Subscription;
  applications: Application[];
  gamesSub: Subscription;
  games: Game[];
  isLoading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.websitesSub = this.dataService.getWebsites().subscribe((websites: Website[]) => {
      this.websites = websites;
      this.isLoading = false;
    });
    this.applicationsSub = this.dataService.getApplications().subscribe((applications: Application[]) => {
      this.applications = applications;
      this.isLoading = false;
    });
    this.gamesSub = this.dataService.getGames().subscribe((games: Game[]) => {
      this.games = games;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.gamesSub.unsubscribe();
    this.applicationsSub.unsubscribe();
    this.websitesSub.unsubscribe();
  }
}
