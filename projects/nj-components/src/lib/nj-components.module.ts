import { NgModule } from '@angular/core';
import { NjComponentsComponent } from './nj-components.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

@NgModule({
  declarations: [NjComponentsComponent, BugTrackerComponent],
  imports: [
  ],
  exports: [NjComponentsComponent]
})
export class NjComponentsModule { }
