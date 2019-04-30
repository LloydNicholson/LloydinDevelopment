import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PixelArtComponent } from './pixel-art.component';

const routes: Routes = [
  { path: '', component: PixelArtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixelArtRoutingModule {

}
