import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ],
  exports: []
})
export class ProjectsModule {
}
