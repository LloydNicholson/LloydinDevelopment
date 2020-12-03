import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [PostsComponent, AboutMeComponent],
  imports: [SharedModule, PostsRoutingModule],
  providers: [],
})
export class PostsModule {}
