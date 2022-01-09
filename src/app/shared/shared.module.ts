import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from './shared1/shared1.component';
import { SwitchlayoutComponent } from './switchlayout/switchlayout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Shared1Component,
    SwitchlayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ], exports: [
    Shared1Component,
    SwitchlayoutComponent
  ]
})
export class SharedModule { }
