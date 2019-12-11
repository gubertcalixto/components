import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { WorkflowItemComponent } from './workflow-item/workflow-item.component';
import { WorkflowComponent } from './workflow.component';

@NgModule({
  declarations: [WorkflowComponent, WorkflowItemComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [WorkflowComponent]
})
export class WorkflowModule { }
