import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html'
})
export class TimelineItemComponent {
  @ViewChild(TemplateRef, { static: true }) public content: TemplateRef<any>;
  @ViewChild('iconTemplate', { static: true }) public iconTemplate: TemplateRef<any>;
  @Input() icon: string;
  @Input() iconTooltip: string;
  @Input() image: string;
}
