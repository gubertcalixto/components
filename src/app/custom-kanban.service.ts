import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VsKanbanService } from './kanban/kanban.service';
import { VsKanbanCard } from './kanban/tokens/card.token';
import { VsKanbanList } from './kanban/tokens/list.token';

@Injectable({
  providedIn: 'root'
})
export class CustomKanbanService extends VsKanbanService {

  listInternal = [];
  maxCount = 50;

  constructor() {
    super();

    for (let i = 0; i < this.maxCount; i++) {
      this.listInternal.push(new VsKanbanCard({
        id: i,
        title: `Item ${i}`,
        description: `Descrição ${i}`
      }));
    }
  }

  getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    const maxCountToSearch = this.maxCount >= (skipCount + pageSize) ? skipCount + pageSize : this.maxCount;
    const listToReturn = this.listInternal.slice(skipCount, maxCountToSearch);

    return of({ items: listToReturn, totalCount: this.maxCount });
  }

  moveCard(previousList: VsKanbanList, newList: VsKanbanList,
    previousIndex: number, currentIndex: number, card: VsKanbanCard): Observable<boolean> {
    this.listInternal.splice(previousIndex, 1);
    if (currentIndex >= previousIndex) {
      currentIndex -= 1;
    }
    this.listInternal.splice(currentIndex, 0, card);
    return of(true);
  }

  listAddAction(list: VsKanbanList) {
    console.log(`Add para ${list.title}`);
  }

  listDeleteAction(list: VsKanbanList) {
    console.log(`Delete para ${list.title}`);
  }
}
