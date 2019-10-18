import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class VsKanbanService {

  constructor() { }

  getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    throw new Error('getCard not implemented');
  }
}
