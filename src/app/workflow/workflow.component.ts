import { Component, HostBinding, Input } from '@angular/core';

import { WorkflowItem } from './workflow.tokens';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent {
  private internalEndItem: WorkflowItem;

  @HostBinding('class.has-final') noFinalItem = true;

  @Input() items: WorkflowItem[] = [];
  @Input()
  public get endItem(): WorkflowItem { return this.internalEndItem; }
  public set endItem(value: WorkflowItem) { this.internalEndItem = value; this.noFinalItem = !Boolean(value); }
}
