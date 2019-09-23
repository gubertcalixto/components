import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormArrayName, FormGroup, FormGroupDirective, FormGroupName } from '@angular/forms';
import { MatInput } from '@angular/material/input';

function resolveBooleanFromInputs(v: string | boolean): boolean { return typeof v === 'string' ? Boolean(v === '' || v) : Boolean(v); }
type maskType = 'CELL' | 'CPF' | 'CNPJCPF' | 'CNPJ' | 'PHONE' | 'ZIPCODE' | 'DATETIME' | 'CURRENCY' | string;
type fieldType = 'email' | 'number' | 'password' | 'tel' | 'text';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements AfterContentInit, AfterViewInit {
  _value: any;
  _maxLength: number;
  private _type: fieldType = 'text';
  private _required: boolean;
  private _disabled: boolean;
  private _mask: maskType;
  private _dropSpecialCharacters = true;
  private _showMaskTyped = false;
  private _focus: string | boolean;
  private loading = true;
  private maskShouldUpdate = false;

  // #region FORM
  private formGroup: FormGroup;
  private arrayName: string;
  private groupName: string;
  @Input() controlName: string;
  @Output() valueChange = new EventEmitter();

  @Input('value') get value(): any { return this._value; }
  set value(v: any) { this._value = v; this.valueChange.emit(v); }
  // #endregion FORM

  // #region FIELD BASE
  @Input() placeholder: string;
  @Input() readonly = false;
  @Input() get maxLength(): number { return this._maxLength; }
  set maxLength(value: number) { if (value <= 0) { return; } this._maxLength = value; }
  @Input() get focus() { return this._focus; }
  set focus(v: boolean | string) { this._focus = v; if (resolveBooleanFromInputs(v) && this.input) { this.input.focus(); } }
  @Input() get type(): fieldType { return this._type; }
  set type(v: fieldType) { if (v === 'number') { this.mask = '0*.00'; v = 'text'; } this._type = v; }
  @Input() get required(): boolean | string { return this._required; }
  set required(v: boolean | string) { this._required = resolveBooleanFromInputs(v); }
  @Input() get disabled(): boolean | string { return this._disabled; }
  set disabled(v: boolean | string) {
    this._disabled = resolveBooleanFromInputs(v);
    if (this.disabled) { const field = this.getFieldSelect(); if (field && !field.disabled) { field.disable(); } }
  }
  // #endregion FIELD BASE

  @Input() tooltip: string;
  @Input() tooltipPosition = 'below';

  @Input() hintLabel: string;
  @Input() errorMessage: string;
  @Input() get mask(): maskType { return this._mask; }
  set mask(v: maskType) { this._mask = v; this.getCurrentMask(); this.cd.detectChanges(); }
  @Input() get dropSpecialCharacters() { return this._dropSpecialCharacters; }
  set dropSpecialCharacters(v) { this._dropSpecialCharacters = v; this.cd.detectChanges(); }
  @Input() get showMaskTyped() { return this._showMaskTyped; }
  set showMaskTyped(v) { this._showMaskTyped = v; this.cd.detectChanges(); }

  currentMask: string;
  @ViewChild(MatInput, { static: false }) input: MatInput;
  // @Input() maxInteger: number;
  // @Input() precision = 2;

  // #region PREFIX SUFFIX
  // @Input() prefix: string;
  // @Input() iconPrefix: string;
  // @Input() isPrefixClickable = true;
  // @Input() suffix: string;
  // @Input() iconSuffix: string;
  // @Input() isSuffixClickable = true;
  // #endregion PREFIX SUFFIX

  constructor(@Optional() private pFormGroup: FormGroupDirective, @Optional() private pArrayName: FormArrayName,
    @Optional() private pGroupName: FormGroupName, private cd: ChangeDetectorRef) { }

  ngAfterContentInit(): void {
    if (this.pFormGroup && this.pFormGroup.form) { this.formGroup = this.pFormGroup.form; }
    if (this.pArrayName) { this.arrayName = String(this.pArrayName.name); }
    if (this.pGroupName) { this.groupName = String(this.pGroupName.name); }
    this.loading = false;
    const field = this.getFieldSelect();
    if (this.value && this.controlName) {
      console.error(`Properties \"value\" and \"controlName\" cannot be implemented together <-- check \"${this.controlName}\" input`);
    }
    this.getCurrentMask();

    if (field) {
      this.value = field.value;
      this.disabled = this.disabled || field.disabled;
    }
  }

  ngAfterViewInit(): void {
    if (this.focus) { setTimeout(() => this.input.focus(), 1); }
  }

  private getFieldSelect(): AbstractControl {
    if (!this.formGroup || !this.controlName) { return; }
    return this.formGroup.get(
      (this.arrayName ? this.arrayName + '.' : '') +
      (this.groupName ? this.groupName + '.' : '') +
      this.controlName);
  }

  private setValueToField(value: any = this.value): void {
    const field = this.getFieldSelect();
    if (field && value) {
      field.setValue(value);
    }
  }

  modelValueChange(event: any): void {
    this.valueChange.emit(event);
    this.setValueToField(event);
    if (this.maskShouldUpdate) {
      this.getCurrentMask();
    }
  }

  private getCurrentMask(): void {
    if (this.loading) { return; }
    this.currentMask = undefined;
    this.maskShouldUpdate = false;
    if (this.mask) {
      const mask = this.mask.toUpperCase();
      const maskMap = new Map([['ZIPCODE', '00000-000'], ['PHONE', '(00) 0000-0000'], ['CELL', '(00) 00000-0000'], ['CPF', '000.000.000-00'], ['CNPJ', '00.000.000/0000-00'], ['DATE', 'd0/M0/0000'], ['TIME', 'Hh:m0'], ['DATETIME', 'd0/M0/0000 Hh:m0']]);
      if (maskMap.has(mask)) {
        this.currentMask = maskMap.get(mask);
      } else if (mask === 'CNPJCPF') {
        this.maskShouldUpdate = true;
        this.resolveCpfCnpjMask();
      } else if (mask === 'CURRENCY') {
        this.resolveCurrencyMask();
      } else {
        this.currentMask = this.mask;
      }
    }
  }

  private resolveCpfCnpjMask(): void {
    const field = this.getFieldSelect();
    if (!field) { return; }
    const digitContentLength = String(field.value || '').replace(/\D/, '').length;
    // CPF ('000.000.000-00 --> 0')
    // has one more character to mask does not block more than 11 digits and change to CNPJ
    this.currentMask = digitContentLength > 11 ? '00.000.000/0000-00' : '000.000.000-000';
  }

  private resolveCurrencyMask(): void {
    this.currentMask = 'dot_separator.2';
    // this._maxLength =
    //  3 /* R$ */
    //  + this.maxInteger /* Número de casas inteiras */
    //  + Math.floor(this.maxInteger / 3) /* Número de pontos */
    //  + 1 /* Vírgula */
    //  + this.precision /* Casas decimais */
    //  - (this.maxInteger % 3 === 0 ? 1 : 0); /* Se a divisão por 3 resultar em inteiro, remove 1*/
  }
}
