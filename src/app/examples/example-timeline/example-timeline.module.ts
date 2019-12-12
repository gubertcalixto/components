import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineModule } from 'app/timeline/timeline.module';

import { ExampleTimelineComponent } from './example-timeline.component';



@NgModule({
  declarations: [ExampleTimelineComponent],
  imports: [
    CommonModule,
    TimelineModule,
    RouterModule.forChild([
      { path: '', component: ExampleTimelineComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
})
export class ExampleTimelineModule { }
