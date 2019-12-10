import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-workflow-item',
  templateUrl: './workflow-item.component.html',
  styleUrls: ['./workflow-item.component.scss']
})
export class WorkflowItemComponent implements OnInit {
  @Input() item: WorkFlowItem;

  constructor() { }

  ngOnInit() {
  }

}

export interface WorkFlowItem {
  icon?: string | number | TemplateRef<any>;
  header?: string | TemplateRef<any>;
  body?: string | TemplateRef<any>;
  footer?: string | TemplateRef<any>;
}
