import { NgModule } from '@angular/core';
import { PixelArtComponent } from './pixel-art.component';
import { SharedModule } from '../shared/shared.module';
import { PixelArtRoutingModule } from './pixel-art-routing.module';

@NgModule({
  declarations: [
    PixelArtComponent
  ],
  imports: [
    SharedModule,
    PixelArtRoutingModule
  ]
})
export class PixelArtModule {

}
