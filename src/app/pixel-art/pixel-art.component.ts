import { Component, OnDestroy, OnInit } from '@angular/core';
import { listStateTrigger } from '../shared/animation';
import { ArtPiece } from './pixel-art.model';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-pixel-art',
  templateUrl: './pixel-art.component.html',
  styleUrls: ['./pixel-art.component.css'],
  animations: [
    listStateTrigger,
  ]
})
export class PixelArtComponent implements OnInit, OnDestroy {
  images: ArtPiece[];
  imagesSub: Subscription;
  isLoading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.imagesSub = this.dataService.getImages()
    .subscribe((images: ArtPiece[]) => {
      this.images = images;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }
}
