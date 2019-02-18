import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { GamesComponent } from './projects/games/games.component';
import { ApplicationsComponent } from './projects/applications/applications.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PixelArtComponent } from './pixel-art/pixel-art.component';
import { FooterComponent } from './footer/footer.component';
import {CollapseDirective} from './shared/collapse.directive';
import { PostItemComponent } from './posts/post-item/post-item.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'pixel-art', component: PixelArtComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    GamesComponent,
    ApplicationsComponent,
    HomeComponent,
    PostsComponent,
    PortfolioComponent,
    PixelArtComponent,
    FooterComponent,
    CollapseDirective,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
