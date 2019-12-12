import { Component, ContentChildren, HostBinding, Input, isDevMode, QueryList, ViewEncapsulation } from '@angular/core';

import { TimelineItemComponent } from './timeline-item/timeline-item.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.theme.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent {
  @Input() public color = '#2D323E';
  @Input() public inverseCount: boolean;
  @Input() public noResultImage: string;

  @Input()
  @HostBinding('class.alternate')
  public alternate: boolean;

  @ContentChildren(TimelineItemComponent) private internalItems: QueryList<TimelineItemComponent>;
  public get items(): TimelineItemComponent[] {
    return this.internalItems
      .toArray()
      .filter(item => Boolean(item));
  }

  public replaceBrokenImage(item: TimelineItemComponent): void {
    if (item.image && this.noResultImage) {
      if (item.image !== this.noResultImage) {
        item.image = this.noResultImage;
      } else {
        item.image = undefined;
        if (isDevMode()) {
          console.warn('defaultImage is broken');
        }
      }
    }
  }
}
