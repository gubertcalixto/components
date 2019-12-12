import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material';

import { TimelineItemBodyComponent } from './timeline-item/timeline-item-body/timeline-item-body.component';
import { TimelineItemFooterComponent } from './timeline-item/timeline-item-footer/timeline-item-footer.component';
import { TimelineItemHeaderComponent } from './timeline-item/timeline-item-header/timeline-item-header.component';
import { TimelineItemIconComponent } from './timeline-item/timeline-item-icon/timeline-item-icon.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent,
    TimelineItemHeaderComponent,
    TimelineItemBodyComponent,
    TimelineItemFooterComponent,
    TimelineItemIconComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [
    TimelineComponent,
    TimelineItemComponent,
    TimelineItemHeaderComponent,
    TimelineItemBodyComponent,
    TimelineItemFooterComponent,
    TimelineItemIconComponent
  ]
})
export class TimelineModule { }

export {
  TimelineComponent,
  TimelineItemComponent,
  TimelineItemHeaderComponent,
  TimelineItemBodyComponent,
  TimelineItemFooterComponent,
  TimelineItemIconComponent
};
