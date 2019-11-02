import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KanbanModule } from 'app/kanban/kanban.module';

import { ExampleKanbanComponent } from './example-kanban.component';

@NgModule({
  declarations: [ExampleKanbanComponent],
  imports: [
    CommonModule,
    KanbanModule,
    RouterModule.forChild([
      { path: '', component: ExampleKanbanComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class ExampleKanbanModule { }
