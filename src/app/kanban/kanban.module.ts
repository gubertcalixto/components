import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { KanbanComponent } from './kanban.component';

@NgModule({
  declarations: [KanbanComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ScrollingModule,


    MatButtonModule,
    MatIconModule
  ],
  exports: [KanbanComponent]
})
export class KanbanModule { }
