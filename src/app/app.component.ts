import { Component, ViewEncapsulation } from '@angular/core';

import { WorkflowItem } from './workflow/workflow.tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public items: WorkflowItem[] = [
    {
      icon: 1,
      title: 'Header',
      body: 'make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      iconBackgroundColor: '#67ab49',
      footer: 'footer',
      isActive: true,
      iconCallback: (item) => this.itemClicked(item),
      titleCallback: (item) => this.itemClicked(item)
    },
    {
      icon: '+',
      iconBackgroundColor: '#59afe1',
      title: 'Placeholder',
      isPlaceholder: true,
      iconCallback: (item) => this.placeholderClick(item),
      titleCallback: (item) => this.placeholderClick(item)
    },
    {
      icon: 2,
      title: 'Header 2',
      body: 'body 2',
      iconBackgroundColor: '#f79232',
      footer: 'footer 2',
      iconCallback: (item) => this.itemClicked(item),
      titleCallback: (item) => this.itemClicked(item)
    }
  ];
  public endItem: WorkflowItem = {
    icon: 'X',
    title: 'FIM',
    iconCallback: (item) => this.finalComponentClick(item),
    titleCallback: (item) => this.finalComponentClick(item)
  };
  public selectedItem = this.items[0];

  private clearAllActiveItemsFromWorkflow() {
    this.items.filter(i => i.isActive).forEach(i => i.isActive = false);
  }

  public placeholderClick(item: WorkflowItem): void {
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      const newItem: WorkflowItem = {
        icon: this.items.length,
        title: `Header ${this.items.length}`,
        body: `body ${this.items.length}`,
        iconBackgroundColor: '#67ab49',
        isActive: true,
        iconCallback: (i) => this.itemClicked(i),
        titleCallback: (i) => this.itemClicked(i)
      };
      this.selectedItem = newItem;
      this.clearAllActiveItemsFromWorkflow();
      this.items.splice(index, 0, newItem);
    }
  }

  public itemClicked(item: WorkflowItem) {
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      this.clearAllActiveItemsFromWorkflow();
      item.isActive = true;
      this.selectedItem = item;
    }
  }

  finalComponentClick(item: any) {
    console.log('fim');
  }
}
