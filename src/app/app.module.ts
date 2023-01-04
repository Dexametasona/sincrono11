import { CompSinc11Module } from './comp-sinc11/comp-sinc11.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompSinc11Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
