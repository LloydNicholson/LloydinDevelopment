import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Animations } from '../shared/animations';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Application, Game, Website } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [Animations.slideInRight]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  websitesSub: Subscription;
  websites: Website[];
  isLoadingWebsites = true;
  applicationsSub: Subscription;
  applications: Application[];
  isLoadingApplications = true;
  gamesSub: Subscription;
  games: Game[];
  isLoadingGames = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.websitesSub = this.dataService
      .getWebsites()
      .subscribe((websites: Website[]) => {
        this.websites = websites;
        this.isLoadingWebsites = false;
      });
    this.applicationsSub = this.dataService
      .getApplications()
      .subscribe((applications: Application[]) => {
        this.applications = applications;
        this.isLoadingApplications = false;
      });
    this.gamesSub = this.dataService.getGames().subscribe((games: Game[]) => {
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
