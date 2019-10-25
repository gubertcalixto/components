import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanListComponent } from './kanban-list/kanban-list.component';
import { KanbanComponent } from './kanban.component';

@NgModule({
  declarations: [KanbanComponent, KanbanListComponent, KanbanCardComponent],
  imports: [
    CommonModule,

    DragDropModule,
    ScrollingModule,

    // VsButtonModule,
    // VsIconModule
  ],
  exports: [KanbanComponent]
})
export class KanbanModule { }
