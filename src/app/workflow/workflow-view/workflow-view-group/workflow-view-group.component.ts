import { Component, Input, OnInit } from '@angular/core';
import { WorkflowSearcherGroup } from 'app/workflow/workflow.tokens';

@Component({
  selector: 'app-workflow-view-group',
  templateUrl: './workflow-view-group.component.html',
  styleUrls: ['./workflow-view-group.component.scss']
})
export class WorkflowViewGroupComponent implements OnInit {
  @Input() group: WorkflowSearcherGroup;

  constructor() { }

  ngOnInit() {
  }

}
