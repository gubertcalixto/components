import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { WorkflowSearcher } from '../workflow.tokens';

@Component({
  selector: 'app-workflow-view',
  templateUrl: './workflow-view.component.html',
  styleUrls: ['./workflow-view.component.scss']
})
export class WorkflowViewComponent implements OnInit {
  @Input() item: WorkflowSearcher;
  @Input() actionsTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
