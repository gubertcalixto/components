import { Component } from '@angular/core';

import { CustomKanbanService } from './custom-kanban.service';
import { VsKanbanList } from './kanban/tokens/list.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  service = this.kanbanService;
  constructor(private kanbanService: CustomKanbanService) {
  }
  kanbanList = [
    new VsKanbanList({
      id: 1,
      title: 'Teste',
      icon: 'edit',
      hasAddAction: true,
      hasDeleteAction: true
    }),
    new VsKanbanList({
      id: 2,
      title: 'Teste 2',
      icon: 'edit'
    })
  ] as VsKanbanList[];
}
