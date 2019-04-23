import { Component, OnDestroy, OnInit } from '@angular/core';
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
  websiteData: Website[];
  applicationData: Application[];
  gameData: Game[];
  dataSub: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataSub = this.dataService.projectData.subscribe(
        project => {
          this.websiteData = project.websites;
          this.applicationData = project.applications;
          this.gameData = project.games;
        }
    );
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
