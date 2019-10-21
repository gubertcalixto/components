import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VsKanbanService } from './kanban/kanban.service';
import { VsKanbanCard } from './kanban/tokens/card.token';
import { VsKanbanList } from './kanban/tokens/list.token';

@Injectable({
  providedIn: 'root'
})
export class CustomKanbanService extends VsKanbanService {

  getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    const maxCount = 50;

    const newList = [];
    const maxCountToSearch = maxCount >= (skipCount + pageSize) ? skipCount + pageSize : maxCount;
    for (let i = skipCount; i < maxCountToSearch; i++) {
      newList.push(new VsKanbanCard({
        id: `${listId} ${i}`,
        title: `${listId} ${i}`,
        description: `${listId} ${i} desc`
      }));
    }
    return of({
      items: newList,
      totalCount: maxCount
    });
  }

  moveCard(previousList: VsKanbanList, newList: VsKanbanList,
    previousIndex: number, currentIndex: number, card: VsKanbanCard): Observable<boolean> {
    return of(true);
  }

  listAddAction(list: VsKanbanList) {
    console.log(`Add para ${list.title}`);
  }

  listDeleteAction(list: VsKanbanList) {
    console.log(`Delete para ${list.title}`);
  }
}
