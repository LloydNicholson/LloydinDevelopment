import { NgModule } from '@angular/core';

import { PortfolioComponent } from './portfolio.component';
import { DevelopmentDetailComponent } from './development-detail/development-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [
    PortfolioComponent,
    DevelopmentDetailComponent,
  ],
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {

}
