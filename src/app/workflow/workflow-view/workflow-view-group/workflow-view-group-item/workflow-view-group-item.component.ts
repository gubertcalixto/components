import { Component, Input, OnInit } from '@angular/core';
import { WorkflowSearcherItem } from 'app/workflow/workflow.tokens';

@Component({
  selector: 'app-workflow-view-group-item',
  templateUrl: './workflow-view-group-item.component.html',
  styleUrls: ['./workflow-view-group-item.component.scss']
})
export class WorkflowViewGroupItemComponent implements OnInit {
  @Input() item: WorkflowSearcherItem;

  constructor() { }

  ngOnInit() {
  }

}
