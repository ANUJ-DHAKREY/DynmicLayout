import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Lay1compComponent } from './component/lay1comp/lay1comp.component';



@NgModule({
  declarations: [
    Layout1Component,
    Lay1compComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    Layout1Component
  ]
})
export class Layout1Module { }
