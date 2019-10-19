import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { VsKanbanCard } from './tokens/card.token';
import { VsKanbanList } from './tokens/list.token';

@Injectable({
  providedIn: 'root'
})
export abstract class VsKanbanService {
  constructor() { }

  getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    throw new Error('getCard not implemented');
  }

  moveCard(previousList: VsKanbanList, newList: VsKanbanList,
    previousIndex: number, currentIndex: number, card: VsKanbanCard): Observable<boolean> {
    throw new Error('moveCard not implemented.');
  }

  listAddAction(list: VsKanbanList) {
    throw new Error('listAddAction not implemented');
  }

  listDeleteAction(list: VsKanbanList) {
    throw new Error('listDeleteAction not implemented');
  }
}
