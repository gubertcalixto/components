import { Component, Input } from '@angular/core';

import { WorkflowItem } from '../workflow.tokens';

@Component({
  selector: 'app-workflow-item',
  templateUrl: './workflow-item.component.html',
  styleUrls: ['./workflow-item.component.scss', 'workflow-item-placeholder.scss']
})
export class WorkflowItemComponent {
  @Input() item: WorkflowItem;
}
