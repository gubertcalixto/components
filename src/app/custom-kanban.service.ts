import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VsKanbanService } from './kanban/kanban.service';
import { VsKanbanCard } from './kanban/tokens/card.token';

@Injectable({
  providedIn: 'root'
})
export class CustomKanbanService extends VsKanbanService {

  getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    const maxCount = 100;

    const newList = [];
    const maxCountToSearch = maxCount >= (skipCount + pageSize) ? skipCount + pageSize : maxCount;
    if (listId === 1) {
      for (let i = skipCount; i < maxCountToSearch; i++) {
        newList.push(new VsKanbanCard({
          id: `${listId} ${i}`,
          title: `${listId} ${i}`,
          description: `${listId} ${i} desc`
        }));
      }
    } else {
      for (let i = skipCount; i < maxCountToSearch; i++) {
        newList.push(new VsKanbanCard({
          id: `else ${listId} ${i}`,
          title: `else ${listId} ${i}`,
          description: `else ${listId} ${i} desc`
        }));
      }
    }
    return of({
      items: newList,
      totalCount: maxCount
    });
  }
}
