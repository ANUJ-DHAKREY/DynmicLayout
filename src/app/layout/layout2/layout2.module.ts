import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout2Component } from './layout2.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Lay2compComponent } from './component/lay2comp/lay2comp.component';



@NgModule({
  declarations: [
    Layout2Component,
    Lay2compComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    Layout2Component
  ]
})
export class Layout2Module { }
