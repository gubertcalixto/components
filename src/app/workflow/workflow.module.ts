import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { WorkflowItemComponent } from './workflow-item/workflow-item.component';
import {
  WorkflowViewGroupItemComponent,
} from './workflow-view/workflow-view-group/workflow-view-group-item/workflow-view-group-item.component';
import { WorkflowViewGroupComponent } from './workflow-view/workflow-view-group/workflow-view-group.component';
import { WorkflowViewComponent } from './workflow-view/workflow-view.component';
import { WorkflowComponent } from './workflow.component';

@NgModule({
  declarations: [
    WorkflowComponent,
    WorkflowItemComponent,
    WorkflowViewComponent,
    WorkflowViewGroupComponent,
    WorkflowViewGroupItemComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    WorkflowComponent,
    WorkflowViewComponent
  ]
})
export class WorkflowModule { }
