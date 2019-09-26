import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
  private permissions: string | string[] = [];
  private logicalOp: 'OR' | 'AND' = 'AND';
  private isHidden = true;
  private isLoading = true;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.updateView();
  }

  @Input()
  set hasPermission(val: any[]) {
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set hasPermissionOp(permop: any) {
    this.logicalOp = permop;
    this.updateView();
  }


  private updateView() {
    if (this.isLoading) {
      return;
    }
    if (this.permissions) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.isHidden = false;
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }
}
