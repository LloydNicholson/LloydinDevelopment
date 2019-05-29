import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostService } from './post.service';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    PostsComponent,
    AboutMeComponent,
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  providers: [PostService]
})
export class PostsModule {

}
