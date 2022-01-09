import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout3Component } from './layout3.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Lay3compComponent } from './component/lay3comp/lay3comp.component';



@NgModule({
  declarations: [
    Layout3Component,
    Lay3compComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    Layout3Component
  ]
})
export class Layout3Module { }
