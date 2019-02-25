import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {PixelArtComponent} from './pixel-art/pixel-art.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {PostsComponent} from './posts/posts.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'pixel-art', component: PixelArtComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
