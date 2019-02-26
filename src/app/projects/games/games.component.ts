import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../../shared/logging.service';
import {Animations} from '../../shared/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [
    Animations.slideInRight,
  ]
})
export class GamesComponent implements OnInit {
  games = [
    {name: 'Noob Trainer',
      url: 'https://rustylloyd.itch.io/noobtrainer2018',
      imageUrl: 'https://lloydindevelopment.com/wp-content/uploads/2018/09/Noob-Trainer-Icon.png',
    details: 'A fun, colourful platformer'},
    {name: 'Sluggers',
      url: 'https://rustylloyd.itch.io/sluggers',
      imageUrl: 'https://lloydindevelopment.com/wp-content/uploads/2018/09/Screen-Shot-2018-07-17-at-18.36.52.png',
      details: 'A semi-finished platformer'},
  ];
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.games.forEach((game) => {
      this.loggingService.logAnyChange(game.name);
    });
  }
}
