import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule {

}
