import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeFadeStateTrigger } from './shared/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeFadeStateTrigger]
})
export class AppComponent implements OnInit {
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';

  constructor() {
  }

  ngOnInit() {
  }

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData.animation;
    if (!routeData) {
      return 'homePage';
    } else {
      return routeData.page;
    }
  }
}
