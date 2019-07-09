import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseDirective } from './collapse.directive';
import { RemoveCollapseDirective } from './remove-collapse.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgZorroAntdModule } from 'ng-zorro-antd';

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
    NgZorroAntdModule,
    FormsModule
  ]
})
export class SharedModule {
}
