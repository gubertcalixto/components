import { AfterContentInit, ChangeDetectorRef, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { AbstractControl, FormArrayName, FormGroup, FormGroupDirective, FormGroupName } from '@angular/forms';

import { ComponentBase } from './component-base';

export function resolveBooleanFromInputs(v: string | boolean): boolean {
  return typeof v === 'string' ? Boolean(v === '' || v) : Boolean(v);
}

export abstract class InputBase extends ComponentBase implements OnInit, AfterContentInit {
  public _value: any;
  public _maxLength: number;

  protected loading = true;
  protected _disabled: boolean;
  protected _required: boolean;
  protected formGroup: FormGroup;
  protected arrayName: string;
  protected groupName: string;

  @Input() public placeholder: string;
  @Input() public controlName: string;
  @Output() public valueChange = new EventEmitter<any>();


  @Input('value') get value(): any { return this._value; }
  set value(v: any) {
    this._value = v;
    this.valueChange.emit(v);
  }

  @Input() get required(): boolean | string { return this._required; }
  set required(v: boolean | string) {
    this._required = resolveBooleanFromInputs(v);
  }
  @Input() get disabled(): boolean | string { return this._disabled; }
  set disabled(v: boolean | string) {
    this._disabled = resolveBooleanFromInputs(v);
    if (this.disabled) {
      const field = this.getFieldSelect();
      if (field && !field.disabled) {
        field.disable();
      }
    }
  }
  @Input() get maxLength(): number { return this._maxLength; }
  set maxLength(value: number) {
    if (value < 0) {
      return;
    }
    this._maxLength = value;
  }

  constructor(
    @Optional() protected pFormGroup: FormGroupDirective, @Optional() protected pArrayName: FormArrayName,
    @Optional() protected pGroupName: FormGroupName, protected cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    if (this.value && this.controlName) {
      console.error(`Properties \"value\" and \"controlName\" cannot be implemented together <-- check \"${this.controlName}\" input`);
    }
  }

  /**
   * You should'd call it if you implements ngAfterContentInit method;
   */
  protected configReactiveForm(): void {
    this.formGroup = (this.pFormGroup && this.pFormGroup.form) ? this.pFormGroup.form : undefined;
    this.arrayName = this.pArrayName ? String(this.pArrayName.name) : undefined;
    this.groupName = this.pGroupName ? String(this.pGroupName.name) : undefined;
  }

  ngAfterContentInit(): void {
    this.configReactiveForm();
    this.loading = false;
  }

  protected setValueToReactiveFormField(value: any = this.value): void {
    const field = this.getFieldSelect();
    if (field && value) {
      field.setValue(value);
    }
  }

  protected getFieldSelect(): AbstractControl {
    return (!this.formGroup || !this.controlName) ? undefined :
      this.formGroup.get(
        (this.arrayName ? this.arrayName + '.' : '') +
        (this.groupName ? this.groupName + '.' : '') +
        this.controlName);
  }

  protected modelValueChange(event: any): void {
    this.valueChange.emit(event);
    this.setValueToReactiveFormField(event);
  }
}
