import { Component, Input, OnInit } from '@angular/core';
import { hoverStateTrigger } from '../../shared/animation';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  animations: [
    hoverStateTrigger
  ]
})
export class ArtComponent implements OnInit {
  hoverState = 'default';
  @Input() image: { name: string; date: Date; imgUrl: string };

  constructor() {
  }

  ngOnInit() {
  }

}
