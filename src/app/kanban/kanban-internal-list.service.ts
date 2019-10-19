import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { VsKanbanCard } from './tokens/card.token';

export enum KanbanInternalListEventEnum {
  add = 0
}

export interface IKanbanInternalListEvent {
  listId: string | number;
  type: KanbanInternalListEventEnum;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class KanbanInternalListService {
  events = new Subject<any>();
  constructor() { }

  emitAdd(listId: string | number, item: VsKanbanCard, index: number) {
    const event: IKanbanInternalListEvent = {
      listId,
      type: KanbanInternalListEventEnum.add,
      data: {
        item, index
      }
    };
    this.events.next(event);
  }
}
