import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { InputModule } from 'app/input/input.module';
import { KanbanModule } from 'app/kanban/kanban.module';
import { LoaderModule } from 'app/spinner/loader.module';

import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleKanbanComponent } from './example-kanban/example-kanban.component';
import { ExampleLoaderComponent } from './example-loader/example-loader.component';
import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples.routing';

@NgModule({
  declarations: [ExamplesComponent, ExampleKanbanComponent, ExampleInputComponent, ExampleLoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatTabsModule,
    MatButtonModule,

    InputModule,
    KanbanModule,
    LoaderModule,

    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
