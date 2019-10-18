import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

import { VsKanbanService } from '../kanban.service';
import { VsKanbanCard } from '../tokens/card.token';
import { VsKanbanDataSource } from '../tokens/kanban-data-source';
import { VsKanbanList } from '../tokens/list.token';

@Component({
  selector: 'vs-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanListComponent implements OnInit {
  private internalService: VsKanbanService;
  private internalPageSize = 5;

  /**
   * Define o template do listHeader\
   * **Default**
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
  @Input() cardDragPlaceholderTemplate: TemplateRef<any>;

  private internalList: VsKanbanList;
  @Input()
  public get list(): VsKanbanList {
    return this.internalList;
  }
  public set list(value: VsKanbanList) {
    this.internalList = value;
    if (this.dataSource) {
      this.dataSource.listId = value.id || value.title;
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

  constructor() { }

  ngOnInit() {
    this.dataSource = new VsKanbanDataSource(this.service, this.list.id, this.pageSize);
  }

  cardTrackBy(index: number, card: VsKanbanCard) {
    return card ? card.id : index;
  }

  scrollChange(indexLoaded: number) {
    // console.log('pesquisa ' + indexLoaded);
  }

}
