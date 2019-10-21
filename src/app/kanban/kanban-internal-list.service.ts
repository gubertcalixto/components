import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { VsKanbanCard } from './tokens/card.token';
import { IKanbanInternalListEvent } from './tokens/kanban-list-event';
import { KanbanInternalListEventEnum } from './tokens/kanban-list-event.enum';

@Injectable({
  providedIn: 'root'
})
export class KanbanInternalListService {
  events = new Subject<any>();
  constructor() { }

  emitAdd(listId: string | number, item: VsKanbanCard, index: number) {
    const event: IKanbanInternalListEvent = {
      listId,
      type: KanbanInternalListEventEnum.Add,
      data: { item, index }
    };
    this.events.next(event);
  }
  emitRemove(listId: string | number, index: number) {
    const event: IKanbanInternalListEvent = {
      listId,
      type: KanbanInternalListEventEnum.Remove,
      data: { index }
    };
    this.events.next(event);
  }
}
