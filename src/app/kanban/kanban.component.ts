import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { VsKanbanService } from './kanban.service';
import { VsKanbanCard } from './tokens/card.token';
import { VsKanbanList } from './tokens/list.token';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanComponent implements OnDestroy {
  cardList: VsKanbanCard[] = [];
  cardDragDelay = 0;
  subs: Subscription[] = [];

  /**
   * Define o template do header\
   * **Default** None
   */
  @Input() headerTemplate: TemplateRef<any>;
  /**
   * Define o template do footer\
   * **Default** None
   */
  @Input() footerTemplate: TemplateRef<any>;

  @Input() listHeaderTemplate: TemplateRef<any>;
  @Input() listFooterTemplate: TemplateRef<any>;
  @Input() cardHeaderTemplate: TemplateRef<any>;
  @Input() cardBodyTemplate: TemplateRef<any>;
  @Input() cardFooterTemplate: TemplateRef<any>;
  @Input() cardDragPlaceholderTemplate: TemplateRef<any>;

  @Input() lists: VsKanbanList[] = [];
  @Input() service: VsKanbanService;
  /**
   * Angular CDK Experimental (v9 probably) will no longer need it
   * Use the minimum height of your cards
   */
  @Input() cardSize = 30;
  @Input() pageSize = 15;

  constructor(breakpointObserver: BreakpointObserver) {
    this.subs.push(breakpointObserver.observe([Breakpoints.HandsetPortrait])
      .subscribe(match => this.cardDragDelay = match.matches ? 250 : 0));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe);
  }
}
