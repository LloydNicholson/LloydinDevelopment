import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { GameItemComponent } from './game-item/game-item.component';
import { WebsiteItemComponent } from './website-item/website-item.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ApplicationItemComponent,
    GameItemComponent,
    WebsiteItemComponent
  ],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ],
  exports: []
})
export class ProjectsModule {
}
