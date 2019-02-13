import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = [
    {name: 'Noob Trainer', url: 'https://rustylloyd.itch.io/noobtrainer2018',
      imageUrl: ''},
    {name: 'Sluggers', url: 'https://rustylloyd.itch.io/sluggers',
      imageUrl: ''},
  ];
  constructor() { }

  ngOnInit() {
  }

}
