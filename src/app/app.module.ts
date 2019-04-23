import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CollapseDirective } from './shared/collapse.directive';
import { RemoveCollapseDirective } from './shared/remove-collapse.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PixelArtComponent } from './pixel-art/pixel-art.component';
import { FooterComponent } from './footer/footer.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { ApplicationItemComponent } from './projects/application-item/application-item.component';
import { GameItemComponent } from './projects/game-item/game-item.component';
import { WebsiteItemComponent } from './projects/website-item/website-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DevelopmentDetailComponent } from './portfolio/development-detail/development-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    HomeComponent,
    PostsComponent,
    PortfolioComponent,
    PixelArtComponent,
    FooterComponent,
    CollapseDirective,
    PostItemComponent,
    RemoveCollapseDirective,
    ApplicationItemComponent,
    GameItemComponent,
    WebsiteItemComponent,
    DevelopmentDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
