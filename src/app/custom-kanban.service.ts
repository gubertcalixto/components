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

  listInternal2 = [];
  maxCount2 = 5;

  constructor() {
    super();

    for (let i = 0; i < this.maxCount; i++) {
      this.listInternal.push(new VsKanbanCard({
        id: i,
        title: `Item ${i}`,
        description: `Descrição ${i}`
      }));
    }
    for (let i = 0; i < this.maxCount2; i++) {
      this.listInternal2.push(new VsKanbanCard({
        id: i,
        title: `Item ${i} - 2`,
        description: `Descrição ${i} - 2`
      }));
    }
  }

  getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    if (listId === 1) {
      const maxCountToSearch = this.maxCount >= (skipCount + pageSize) ? skipCount + pageSize : this.maxCount;
      const listToReturn = this.listInternal.slice(skipCount, maxCountToSearch);

      return of({ items: listToReturn, totalCount: this.maxCount });
    } else {
      const maxCountToSearch = this.maxCount2 >= (skipCount + pageSize) ? skipCount + pageSize : this.maxCount2;
      const listToReturn = this.listInternal2.slice(skipCount, maxCountToSearch);

      return of({ items: listToReturn, totalCount: this.maxCount2 });
    }
  }

  moveCard(previousList: VsKanbanList, newList: VsKanbanList,
    previousIndex: number, currentIndex: number, card: VsKanbanCard): Observable<boolean> {
    if (previousList.id === 1) {
      this.maxCount -= 1;
      this.listInternal.splice(previousIndex, 1);
    } else {
      this.maxCount2 -= 1;
      this.listInternal2.splice(previousIndex, 1);
    }
    if (newList.id === 1) {
      this.maxCount += 1;
      this.listInternal.splice(currentIndex, 0, card);
    } else {
      this.maxCount2 += 1;
      this.listInternal2.splice(currentIndex, 0, card);
    }
    return of(true);
  }

  listAddAction(list: VsKanbanList) {
    console.log(`Add para ${list.title}`);
  }

  listDeleteAction(list: VsKanbanList) {
    console.log(`Delete para ${list.title}`);
  }
}
