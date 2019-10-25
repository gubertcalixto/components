import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { InputModule } from 'app/input/input.module';
import { KanbanModule } from 'app/kanban/kanban.module';

import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleKanbanComponent } from './example-kanban/example-kanban.component';
import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples.routing';

@NgModule({
  declarations: [ExamplesComponent, ExampleKanbanComponent, ExampleInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatTabsModule,
    MatButtonModule,

    InputModule,
    KanbanModule,

    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
