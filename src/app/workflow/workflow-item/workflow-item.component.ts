import { Component, Input, OnInit } from '@angular/core';

import { WorkflowItem } from '../workflow.tokens';


@Component({
  selector: 'app-workflow-item',
  templateUrl: './workflow-item.component.html',
  styleUrls: ['./workflow-item.component.scss', 'workflow-item-placeholder.scss']
})
export class WorkflowItemComponent implements OnInit {
  @Input() item: WorkflowItem;

  constructor() { }

  ngOnInit() {
  }

}


