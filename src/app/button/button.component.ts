import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentBase } from '@shared/component-base';


type ButtonModelType = 'basic' | 'fab' | 'flat' | 'icon' | 'mini_fab' | 'raised' | 'stroked';
type ButtonType = 'default' | 'save' | 'cancel';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends ComponentBase implements OnInit {
  public static buttonClasses = new Map<string, string>([
    ['basic', 'mat-button-base'],
    ['fab', 'mat-fab mat-fab-button'],
    ['flat', 'mat-flat-button'],
    ['icon', 'mat-icon-button'],
    ['mini_fab', 'mat-mini-fab mat-button-base'],
    ['raised', 'mat-raised-button'],
    ['stroked', 'mat-stroked-button'],
  ]);
  public internalIcon: string;
  public internalModel = 'mat-flat-button';
  public matRippleColor: 'rgba(0,0,0,.87)' | 'rgba(255,255,255,.87)' = 'rgba(0,0,0,.87)';

  @Input() color: string;
  @Input() type: ButtonType = 'default';
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() tabIndex: string;
  @Input()
  public get model(): string {
    return this.internalModel;
  }
  public set model(value: ButtonModelType | string) {
    this.internalModel = ButtonComponent.buttonClasses.has(value) ?
      ButtonComponent.buttonClasses.get(value) :
      'mat-flat-button';
  }
  @Input()
  public get icon(): string {
    return this.internalIcon;
  }
  public set icon(value: string) {
    this.internalIcon = value;
    if (Boolean(value)) {
      this.model = 'icon';
    }
  }

  constructor() { super(); }

  ngOnInit() {
  }

}
