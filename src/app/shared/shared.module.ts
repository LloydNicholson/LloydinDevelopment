import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseDirective } from './collapse.directive';
import { RemoveCollapseDirective } from './remove-collapse.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CollapseDirective,
    RemoveCollapseDirective,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ]
})
export class SharedModule {
}
