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

  emitMove(fromListId: string | number, toListId: string | number, previousIndex: number, currentIndex: number, card: VsKanbanCard): void {
    const removeEvent: IKanbanInternalListEvent = {
      listId: fromListId,
      type: KanbanInternalListEventEnum.Remove,
      data: {
        index: previousIndex
      }
    };
    this.events.next(removeEvent);
    if (fromListId === toListId && currentIndex >= previousIndex) {
      currentIndex -= 1;
    }
    const addEvent: IKanbanInternalListEvent = {
      listId: toListId,
      type: KanbanInternalListEventEnum.Add,
      data: {
        index: currentIndex,
        item: card
      }
    };
    this.events.next(addEvent);
  }
}
