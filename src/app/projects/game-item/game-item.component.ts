import {Component, Input, OnInit} from '@angular/core';
import {Animations} from '../../shared/animations';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  @Input() game: {name: string, url: string, imageUrl: string, details: string};
  constructor() { }

  ngOnInit() {
  }

}
