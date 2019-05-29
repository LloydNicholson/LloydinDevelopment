import { Injectable } from '@angular/core';
import { ArtPiece } from './pixel-art.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private _images: ArtPiece[] = [
    {
      name: 'Thor',
      date: new Date(2018, 7 - 1, 16),
      imgUrl: 'assets/img/Thor_enlarged no_bg.png'
    },
    {
      name: 'Iron Man',
      date: new Date(2018, 7 - 1, 18),
      imgUrl: 'assets/img/Iron Man no_bg.png'
    },
    {
      name: 'Hulk',
      date: new Date(2018, 7 - 1, 23),
      imgUrl: 'assets/img/Hulk_enlarged no_bg.png'
    },
    {
      name: 'Black Widow',
      date: new Date(2018, 7 - 1, 25),
      imgUrl: 'assets/img/Black Widow no_bg.png'
    },
    {
      name: 'Blue House Games',
      date: new Date(2018, 10 - 1, 20),
      imgUrl: 'assets/img/Blue house.png'
    },
    {
      name: 'Orange',
      date: new Date(2018, 6 - 1, 23),
      imgUrl: 'assets/img/Orange large.png'
    },
    {
      name: 'Potion',
      date: new Date(2018, 3 - 1, 12),
      imgUrl: 'assets/img/Potion large.png'
    },
    {
      name: 'Jo\'burg City Skyline',
      date: new Date(2018, 6 - 1, 19),
      imgUrl: 'assets/img/Johannesburg City Skyline.png'
    }
  ];

  getImages(): Observable<ArtPiece[]> {
    return of(this._images); // returning an observable
  }
}
