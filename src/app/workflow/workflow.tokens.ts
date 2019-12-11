export class WorkflowItem {
  public icon?: string | number;
  public iconBackgroundColor?: string;
  public iconCallback?: (item?: WorkflowItem) => void;
  public title?: string;
  public titleCallback?: (item?: WorkflowItem) => void;
  public body?: string;
  public footer?: string;
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
      this.isPlaceholder = data.isPlaceholder;
      this.isActive = data.isActive;
      this.hasIconAnimation = data.hasIconAnimation;
    }
  }
}
