import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { KanbanInternalListService } from '../kanban-internal-list.service';
import { VsKanbanService } from '../kanban.service';
import { VsKanbanCard } from '../tokens/card.token';
import { VsKanbanDataSource } from '../tokens/kanban-data-source';
import { IKanbanInternalListEvent } from '../tokens/kanban-list-event';
import { KanbanInternalListEventEnum } from '../tokens/kanban-list-event.enum';
import { VsKanbanList } from '../tokens/list.token';

@Component({
  selector: 'vs-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanListComponent implements OnInit, OnDestroy {
  private internalService: VsKanbanService;
  private internalPageSize = 5;
  @ViewChild(CdkVirtualScrollViewport, { static: false }) viewPort: CdkVirtualScrollViewport;

  /**
   * Define o template do listHeader\
   * **Default**
   * ```
   * <ng-template #template let-title="title">{{title}}</ng-template>
   *    <div class="list-header">
   *      <h3 class="info">{{list.title}}</h3>
   *      <div *ngIf="list.hasAddAction || list.hasDeleteAction">
   *          <button *ngIf="list.hasAddAction">add</button>
   *          <button *ngIf="list.hasDeleteAction">hasDeleteAction</button>
   *      </div>
   *    </div>
   * </ng-template>
   * ```
   * **Variáveis disponíveis:**
   * - list
   */
  @Input() listHeaderTemplate: TemplateRef<any>;
  /**
   * Define o template do listFooter\
   * **Default** None\
   * **Variáveis disponíveis:**
   * - list
   */
  @Input() listFooterTemplate: TemplateRef<any>;

  @Input() cardHeaderTemplate: TemplateRef<any>;
  @Input() cardBodyTemplate: TemplateRef<any>;
  @Input() cardFooterTemplate: TemplateRef<any>;
  /**
   * Define o template do card ao ser arrastado (float card)\
   * **Default** None\
   * **Variáveis disponíveis:**
   * - card
   */
  @Input() cardDragPlaceholderTemplate: TemplateRef<any>;

  private internalList: VsKanbanList;
  isLoading = true;
  subs: Subscription[] = [];
  @Input()
  public get list(): VsKanbanList {
    return this.internalList;
  }
  public set list(value: VsKanbanList) {
    this.internalList = value;
    this.internalList.id = value.id || value.title;
    if (this.dataSource) {
      this.dataSource.listId = this.internalList.id;
    }
  }
  @Input()
  public get service(): VsKanbanService {
    return this.internalService;
  }
  public set service(value: VsKanbanService) {
    this.internalService = value;
    if (this.dataSource) {
      this.dataSource.kanbanService = value;
    }
  }
  @Input() cardSize = 30;
  @Input()
  public get pageSize() {
    return this.internalPageSize;
  }
  public set pageSize(value) {
    if (value > 0) {
      this.internalPageSize = value;
      if (this.dataSource) {
        this.dataSource.pageSize = value;
      }
    }
  }
  dataSource: VsKanbanDataSource;

  constructor(private internalListService: KanbanInternalListService) {
  }

  ngOnInit() {
    this.dataSource = new VsKanbanDataSource(this.service, this.list.id, this.pageSize);
    this.subs.push(this.internalListService.events.subscribe((event: IKanbanInternalListEvent) => {
      if (event.listId !== this.internalList.id) {
        return;
      }
      if (event.type === KanbanInternalListEventEnum.Add) {
        this.cardAdd(event.data.item, event.data.index);
      } else if (event.type === KanbanInternalListEventEnum.Remove) {
        this.cardRemove(event.data.index);
      }
    }));
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.dataSource.disconnect();
  }

  cardTrackBy(index: number, card: VsKanbanCard) {
    return card ? card.id : index;
  }

  dropCard(event: CdkDragDrop<any>) {
    this.isLoading = true;
    const previousList: VsKanbanList = event.previousContainer.data;
    const newList: VsKanbanList = event.container.data;
    const card: VsKanbanCard = event.item.data.card;
    const previousViewPort: CdkVirtualScrollViewport = (event.item.data.viewport);
    const currentViewPortRange = this.viewPort.getRenderedRange();
    const previousViewPortRange = previousViewPort.getRenderedRange();
    const previousIndex = previousViewPortRange.start + event.previousIndex;
    const currentIndex = currentViewPortRange.start + event.currentIndex;

    this.subs.push(this.service.moveCard(previousList, newList, previousIndex, currentIndex, card).subscribe(res => {
      if (res) {
        this.internalListService.emitMove(previousList.id, newList.id, previousIndex, currentIndex, card);
      }
      this.isLoading = false;
    }, () => this.isLoading = false));
  }

  private cardAdd(card: VsKanbanCard, index: number) {
    if (this.dataSource) {
      this.dataSource.addItem(card, index);
    }
  }

  private cardRemove(index: number) {
    if (this.dataSource) {
      this.dataSource.removeItem(index);
    }
  }

  listAdd(list: VsKanbanList): void {
    this.service.listAddAction(list);
  }

  listDelete(list: VsKanbanList): void {
    this.service.listDeleteAction(list);
  }
}