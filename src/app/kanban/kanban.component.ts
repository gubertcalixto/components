import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { VsKanbanList } from './tokens/list.token';

/**
 * Define o template do omponent C\
 * Default None
 */
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {
  cardList = Array.from({ length: 20000 }).map((_, i) => `Item #${i}`);
  cardDragDelay = 0;
  subs: Subscription[] = [];

  /**
   * Define o template do Template header\
   * Default None
   */
  @Input() headerTemplate: TemplateRef<any>;

  /**
   * Define o template do Template listHeader\
   * Default
   * ```
   * <ng-template #template let-title="title">{{title}}</ng-template>
   *    <div class="vs-kanban-list-header">
   *      <h3 class="vs-kanban-info">{{list.title}}</h3>
   *      <div *ngIf="list.hasAddAction || list.hasDeleteAction">
   *          <button *ngIf="list.hasAddAction">add</button>
   *          <button *ngIf="list.hasDeleteAction">hasDeleteAction</button>
   *      </div>
   *    </div>
   * </ng-template>
   * ```
   */
  @Input() listHeaderTemplate: TemplateRef<any>;
  /**
   * Define o template do Template cardHeader\
   * Default
   * ```
   * <ng-template #template let-title="title">{{title}}</ng-template>
   * ```
   */
  @Input() cardHeaderTemplate: TemplateRef<any>;
  /**
   * Define o template do Template cardBody\
   * Default
   * ```
   * <ng-template #template let-description="description">{{description}}</ng-template>
   * ```
   */
  @Input() cardBodyTemplate: TemplateRef<any>;
  /**
   * Define o template do Template cardFooter\
   * Default None
   */
  @Input() cardFooterTemplate: TemplateRef<any>;
  /**
   * Define o template do Template listFooter\
   * Default None
   */
  @Input() listFooterTemplate: TemplateRef<any>;
  /**
   * Define o template do Template footer\
   * Default None
   */
  @Input() footerTemplate: TemplateRef<any>;

  @Input() lists: VsKanbanList[] = [];
  @Input() service: any;
  /**
   * Angular CDK Experimental will no longer need it
   * Use the minimum height of your cards
   */
  @Input() cardSize = 30;
  @Input() pageSize = 5;
  @Input() showListTotalCount = false;

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
    console.log(event.previousContainer.data);
    console.log(event.container.data);
    console.log(event.previousIndex);
    console.log(event.currentIndex);


    console.log(event);
  }

  listTrackBy(index: number) {
    // TODO: may use list.id
    return index;
  }
  cardTrackBy(index: number, t) {
    // TODO: may use card.id
    return index;
  }

  log(event) {
    console.log(event);
  }

  scrollChange(indexLoaded: number) {
    this.log('pesquisa ' + indexLoaded);
  }
}
