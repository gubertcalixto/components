import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item-header',
  templateUrl: './timeline-item-header.component.html'
})
export class TimelineItemHeaderComponent {
  @Input() label: string;
}
