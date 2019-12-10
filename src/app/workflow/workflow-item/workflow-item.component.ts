import { Component, EventEmitter, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-workflow-item',
  templateUrl: './workflow-item.component.html',
  styleUrls: ['./workflow-item.component.scss']
})
export class WorkflowItemComponent implements OnInit {
  @Input() item: WorkflowItem;
  @Input() isPlaceholder = false;
  @Input() iconClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}

export interface WorkflowItem {
  icon?: string | number | TemplateRef<any>;
  iconBackgroundColor?: string;
  header?: string | TemplateRef<any>;
  body?: string | TemplateRef<any>;
  footer?: string | TemplateRef<any>;
}
