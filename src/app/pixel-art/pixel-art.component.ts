import { Component, OnDestroy, OnInit } from '@angular/core';
import { listStateTrigger } from '../shared/animation';
import { ArtPiece } from './pixel-art.model';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { startLoading, stopLoading } from '../store/app.action';

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

  constructor(
      private dataService: DataService,
      private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('app').subscribe((state) => {
      this.isLoading = state.isLoading;
    });

    this.store.dispatch(startLoading());
    this.imagesSub = this.dataService.getImages()
    .subscribe((images: ArtPiece[]) => {
      this.images = images;
      this.store.dispatch(stopLoading());
    });
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }
}
