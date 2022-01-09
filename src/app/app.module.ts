import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout1Module } from './layout/layout1/layout1.module';
import { Layout2Module } from './layout/layout2/layout2.module';
import { Layout3Module } from './layout/layout3/layout3.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    Layout1Module,
    Layout2Module,
    Layout3Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
