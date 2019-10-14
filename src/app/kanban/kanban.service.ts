import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class KanbanService {

  constructor() { }


  getBoards(): Promise<any> {
    return;
  }

  getBoard(boardId): Promise<any> {
    return;
  }

  addCard(listId, newCard) {
  }

  addList(newList) {
  }

  removeList(listId) {
  }

  removeCard(cardId, listId?) {
  }

  updateBoard() {
  }

  updateCard(newCard) {
  }

  createNewBoard(board) {
  }
  onCardDropped(destinationList: any, card: any, evt: CdkDragDrop<any>): void {
  }

  onCardOut(destinationList: any, card: any, evt: any): void {
  }
}
