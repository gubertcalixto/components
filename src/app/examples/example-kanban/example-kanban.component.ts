import { Component, OnInit } from '@angular/core';
import { VsKanbanList } from 'app/kanban/tokens/list.token';

import { CustomKanbanService } from './custom-kanban.service';

@Component({
  selector: 'app-example-kanban',
  templateUrl: './example-kanban.component.html',
  styleUrls: ['./example-kanban.component.scss']
})
export class ExampleKanbanComponent implements OnInit {
  service = this.kanbanService;
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

  constructor(private kanbanService: CustomKanbanService) {
  }

  ngOnInit() {
  }

}
