import { AfterContentInit, ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { AbstractControl, FormArrayName, FormGroup, FormGroupDirective, FormGroupName } from '@angular/forms';

function resolveBooleanFromInputs(v: string | boolean): boolean { return typeof v === 'string' ? Boolean(v === '' || v) : Boolean(v); }

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements AfterContentInit {
  private _type: 'text' | 'email' | 'password' | 'number' | 'tel' = 'text';
  private _required: boolean;
  private _disabled: boolean;
  private _focus: boolean;

  // #region FORM
  formGroup: FormGroup;
  arrayName: string;
  groupName: string;
  @Input() controlName: string;
  value: any;
  // #endregion FORM

  // #region PREFIX SUFFIX
  // @Input() prefix: string;
  // @Input() iconPrefix: string;
  // @Input() isPrefixClickable = true;
  // @Input() suffix: string;
  // @Input() iconSuffix: string;
  // @Input() isSuffixClickable = true;
  // #endregion PREFIX SUFFIX

  // #region FIELD BASE
  @Input() placeholder: string;
  @Input() readonly = false;
  @Input() maxLength: number;
  @Input()
  public get focus() { return this._focus; }
  public set focus(v: boolean | string) { this._focus = resolveBooleanFromInputs(v); }
  @Input()
  public get type(): 'text' | 'email' | 'password' | 'number' | 'tel' { return this._type; }
  public set type(v: 'text' | 'email' | 'password' | 'number' | 'tel') {
    if (v === 'number') { this.mask = this.mask || '0*.00'; v = 'text'; } this._type = v;
  }
  @Input()
  public get required(): boolean | string { return this._required; }
  public set required(v: boolean | string) { this._required = resolveBooleanFromInputs(v); }
  @Input()
  public get disabled(): boolean | string { return this._disabled; }
  public set disabled(v: boolean | string) {
    this._disabled = resolveBooleanFromInputs(v);
    if (this.disabled) { const field = this.getFieldSelect(); if (field && !field.disabled) { field.disable(); } }
  }
  // #endregion FIELD BASE

  @Input() tooltip: string;
  @Input() tooltipPosition = 'below';

  @Input() hintLabel: string;
  @Input() errorMessage: string;

  currentMask: string;
  @Input() mask: 'CNPJCPF' | 'CNPJ' | 'CPF' | 'PHONE' | 'CELL' | 'ZIPCODE' | 'DATETIME' | 'CURRENCY' | string;
  @Input() dropSpecialCharacters = true;
  @Input() showMaskTyped = false;
  // @Input() maxInteger: number;
  // @Input() precision = 2;

  constructor(private pFormGroup: FormGroupDirective, @Optional() private pArrayName: FormArrayName, @Optional() private pGroupName: FormGroupName) { }

  ngAfterContentInit(): void {
    this.formGroup = this.pFormGroup.form;
    if (this.pArrayName) { this.arrayName = this.pArrayName.name; }
    if (this.pGroupName) { this.groupName = String(this.pGroupName.name); }

    const field = this.getFieldSelect();
    this.getCurrentMask();
    if (!field) { return; }
    this.value = field.value;
    this.disabled = this.disabled || field.disabled;
  }

  private getFieldSelect(): AbstractControl {
    if (!this.formGroup || !this.controlName) { return; }
    return this.formGroup.get(
      (this.arrayName ? this.arrayName + '.' : '') +
      (this.groupName ? this.groupName + '.' : '') +
      this.controlName);
  }

  valueChange(event: any): void {
    const field = this.getFieldSelect();
    if (!field) { return; }
    field.setValue(event);
  }

  private getCurrentMask(): void {
    if (!this.mask) { this.currentMask = undefined; return; }
    this.type = 'text';
    const mask = this.mask.toUpperCase();
    const maskMap = new Map([['ZIPCODE', '00000-000'], ['PHONE', '(00) 0000-0000'], ['CELL', '(00) 00000-0000'], ['CPF', '000.000.000-00'], ['CNPJ', '00.000.000/0000-00'], ['DATE', 'd0/M0/0000'], ['TIME', 'Hh:m0'], ['DATETIME', 'd0/M0/0000 Hh:m0']]);

    if (maskMap.has(mask)) {
      this.currentMask = maskMap.get(mask);
      return;
    } else if (mask === 'CNPJCPF') {
      this.resolveCpfCnpjMask();
    } else if (mask === 'CURRENCY') {
      this.resolveCurrencyMask();
    } else {
      this.currentMask = this.mask;
    }
  }

  private resolveCpfCnpjMask(): void {
    const field = this.getFieldSelect();
    if (!field) { return; }
    const digitContentOnly = String(field.value).replace(/\D/, '');
    this.currentMask = (digitContentOnly && digitContentOnly.length > 11) ? '00.000.000/0000-00' : '000.000.000-00';
  }

  private resolveCurrencyMask(): void {
    this.currentMask = 'dot_separator.2';
    // this.maxLength =
    //   3 /* R$ */
    //   + this.maxInteger /* Número de casas inteiras */
    //   + Math.floor(this.maxInteger / 3) /* Número de pontos */
    //   + 1 /* Vírgula */
    //   + this.precision /* Casas decimais */
    //   - (this.maxInteger % 3 === 0 ? 1 : 0); /* Se a divisão por 3 resultar em inteiro, remove 1*/
  }
}
