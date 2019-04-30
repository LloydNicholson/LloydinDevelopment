import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

}
