import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

// components
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

// services
import { BugTrackerService } from './bug-tracker/bug-tracker.service';
import { InputFloatComponent } from './input-float/input-float.component';

@NgModule({
  declarations: [
    BugTrackerComponent,
    InputFloatComponent
  ],
  providers: [
    BugTrackerService
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , CommonModule
    , DragDropModule
  ],
  exports: [
    BugTrackerComponent
  ]
})
export class NjComponentsModule { }
