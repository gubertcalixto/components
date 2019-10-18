import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { VsKanbanService } from './kanban.service';
import { VsKanbanCard } from './tokens/card.token';
import { VsKanbanList } from './tokens/list.token';

@Component({
  selector: 'vs-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {
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

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe);
  }

  dropCard(event: CdkDragDrop<any>) {
    // console.log(event.previousContainer.data);
    // console.log(event.container.data);
    // console.log(event.previousIndex);
    // console.log(event.currentIndex);

    // if (event.previousContainer === event.container) {
    //   this.moveCardInList(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   this.transferCard(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    // }

    // console.log(event);
  }
  transferCard(oldList: VsKanbanList, newList: VsKanbanList, previousIndex: number, currentIndex: number) {
  }

  moveCardInList(list: VsKanbanList, previousIndex: number, currentIndex: number) {
    // list.cards.splice(currentIndex, 0, list.cards[previousIndex]);
    // previousIndex += currentIndex < previousIndex ? 1 : 0;
    // list.cards.splice(previousIndex, 0);
  }

  listTrackBy(index: number, list: VsKanbanList) {
    return list.id;
  }
}
