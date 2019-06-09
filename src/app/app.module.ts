import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';

import { CollapseDirective } from './shared/collapse.directive';
import { RemoveCollapseDirective } from './shared/remove-collapse.directive';

import { DataService } from './shared/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthComponent } from './auth/auth.component';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PixelArtModule } from './pixel-art/pixel-art.module';
import { PostsModule } from './posts/posts.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompletedCoursesComponent } from './completed-courses/completed-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    AuthComponent,
    CompletedCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PixelArtModule,
    PostsModule,
    PortfolioModule,
    ProjectsModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
