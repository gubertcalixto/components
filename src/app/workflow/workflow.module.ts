import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkflowItemComponent } from './workflow-item/workflow-item.component';
import { WorkflowPlaceholderComponent } from './workflow-placeholder/workflow-placeholder.component';
import { WorkflowComponent } from './workflow.component';

@NgModule({
  declarations: [WorkflowComponent, WorkflowItemComponent, WorkflowPlaceholderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WorkflowComponent
  ]
})
export class WorkflowModule { }
