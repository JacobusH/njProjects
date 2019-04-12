import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// library module
import { NjComponentsModule } from 'nj-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , AppRoutingModule
    , NjComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
