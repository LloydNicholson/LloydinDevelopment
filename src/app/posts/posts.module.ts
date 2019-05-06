import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  providers: [PostService]
})
export class PostsModule {

}
