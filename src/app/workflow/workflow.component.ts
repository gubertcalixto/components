import { Component, OnInit } from '@angular/core';

import { WorkflowItem } from './workflow-item/workflow-item.component';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  items: WorkflowItem[] = [
    {
      icon: 1,
      header: 'Header',
      body: 'make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      iconBackgroundColor: '#67ab49',
      footer: 'footer',
    },
    {
      icon: 2,
      header: 'Header 2',
      body: 'body 2',
      iconBackgroundColor: '#f79232',
      footer: 'footer 2',
    }
  ];
  itemPlaceholder: WorkflowItem = {
    icon: '+',
    iconBackgroundColor: '#59afe1',
    header: 'Placeholder'
  }

  constructor() { }

  ngOnInit() {
  }

}
