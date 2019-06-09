import { Component, Input, OnInit } from '@angular/core';
import { hoverStateTrigger } from '../../shared/animation';
import { ArtPiece } from '../pixel-art.model';

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
  @Input() image: ArtPiece;

  constructor() {
  }

  ngOnInit() {
  }

}
