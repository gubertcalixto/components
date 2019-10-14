import { Component } from '@angular/core';

import { VsKanbanList } from './kanban/tokens/list.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  kanbanList = [
    {
      title: 'Teste',
      hasAddAction: true,
      hasDeleteAction: false
    },
    {
      title: 'Teste 2',
      hasAddAction: false,
      hasDeleteAction: true
    }
  ] as VsKanbanList[];
}
