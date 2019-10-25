import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleKanbanComponent } from './example-kanban/example-kanban.component';
import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'input', component: ExampleInputComponent },
  { path: 'kanban', component: ExampleKanbanComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
