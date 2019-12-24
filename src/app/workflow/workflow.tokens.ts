export class WorkflowItem {
  public icon?: string | number;
  public iconBackgroundColor?: string;
  public iconCallback?: (item?: WorkflowItem) => void;
  public title?: string;
  public titleCallback?: (item?: WorkflowItem) => void;
  public body?: string;
  public footer?: string;
  public children?: WorkflowItem[] = [];
  public isPlaceholder?: boolean;
  public isActive?= false;
  public hasIconAnimation?= false;

  constructor(data?: WorkflowItem) {
    if (data) {
      this.icon = data.icon;
      this.iconBackgroundColor = data.iconBackgroundColor;
      this.title = data.title;
      this.body = data.body;
      this.footer = data.footer;
      this.children = data.children || [];
      this.isPlaceholder = data.isPlaceholder;
      this.isActive = data.isActive;
      this.hasIconAnimation = data.hasIconAnimation;
    }
  }
}

export class WorkflowSearcher {
  public icon?: string;
  public title?: string;
  public description?: string;
  public groups?: WorkflowSearcherGroup[] = [];
  public hasSearch?= true;

  constructor(data?: WorkflowSearcher) {
    if (data) {
      this.icon = data.icon;
      this.title = data.title;
      this.description = data.description;
      this.groups = data.groups || [];
      this.hasSearch = typeof data.hasSearch === 'boolean' ? data.hasSearch : true;
    }
  }
}

export class WorkflowSearcherGroup {
  public icon?: string;
  public title?: string;
  public description?: string;
  public items?: WorkflowSearcherItem[] = [];

  constructor(data?: WorkflowSearcherGroup) {
    if (data) {
      this.icon = data.icon;
      this.title = data.title;
      this.description = data.description;
      this.items = data.items || [];
    }
  }
}

export class WorkflowSearcherItem {
  public icon?: string;
  public title?: string;
  public description?: string;

  constructor(data?: WorkflowSearcherItem) {
    if (data) {
      this.icon = data.icon;
      this.title = data.title;
      this.description = data.description;
    }
  }
}
