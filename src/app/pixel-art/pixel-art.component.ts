import { Component, OnInit } from '@angular/core';
import { listStateTrigger, routeFadeStateTrigger } from '../shared/animation';
import { ArtService } from './art.service';
import { ArtPiece } from './pixel-art.model';

@Component({
  selector: 'app-pixel-art',
  templateUrl: './pixel-art.component.html',
  styleUrls: ['./pixel-art.component.css'],
  animations: [
    routeFadeStateTrigger,
    listStateTrigger,
  ]
})
export class PixelArtComponent implements OnInit {
  // @HostBinding('@routeFadeState') routeFadeState = true; // not working due to clash of two concurrent animations
  images: ArtPiece[];

  constructor(private artService: ArtService) {
  }

  ngOnInit() {
    this.artService.getImages().subscribe((images) => {
      this.images = images;
    });
  }
}
