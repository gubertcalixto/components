import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { FormArrayName, FormGroupDirective, FormGroupName } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { resolveBooleanFromInputs } from '@shared/input-base';
import { InputEventsBase } from '@shared/input-events-base';

type MaskType = 'CELL' | 'CPF' | 'CNPJCPF' | 'CNPJ' | 'PHONE' | 'ZIPCODE' | 'DATETIME' | 'CURRENCY' | string;
type FieldType = 'email' | 'number' | 'password' | 'tel' | 'text';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends InputEventsBase implements AfterContentInit, AfterViewInit {
  private _type: FieldType = 'text';
  private _focus: string | boolean;
  private _mask: MaskType;
  private _dropSpecialCharacters = true;
  private _showMaskTyped = false;
  private maskShouldUpdate = false;

  @Input() readonly = false;
  @Input() hintLabel: string;
  @Input() errorMessage: string;
  // @Input() maxInteger: number;
  // @Input() precision = 2;

  currentMask: string;
  @ViewChild(MatInput, { static: false }) input: MatInput;

  // type
  @Input() get type(): FieldType { return this._type; }
  set type(v: FieldType) {
    if (v === 'number') {
      this.mask = '0*.00';
      v = 'text';
    }
    this._type = v;
  }
  // focus
  @Input() get focus() { return this._focus; }
  set focus(v: boolean | string) {
    this._focus = v;
    if (resolveBooleanFromInputs(v) && this.input) {
      this.input.focus();
    }
  }
  // mask
  @Input() get mask(): MaskType { return this._mask; }
  set mask(v: MaskType) {
    this._mask = v;
    this.getCurrentMask();
    this.cd.detectChanges();
  }
  // dropSpecialCharacters
  @Input() get dropSpecialCharacters() { return this._dropSpecialCharacters; }
  set dropSpecialCharacters(v: boolean) {
    this._dropSpecialCharacters = v;
    this.cd.detectChanges();
  }
  // showMaskTyped
  @Input() get showMaskTyped() { return this._showMaskTyped; }
  set showMaskTyped(v: boolean) {
    this._showMaskTyped = v;
    this.cd.detectChanges();
  }

  constructor(
    @Optional() pFormGroup: FormGroupDirective, @Optional() pArrayName: FormArrayName,
    @Optional() pGroupName: FormGroupName, cd: ChangeDetectorRef) {
    super(pFormGroup, pArrayName, pGroupName, cd);
  }

  ngAfterContentInit(): void {
    this.configReactiveForm();
    this.loading = false;
    const field = this.getFieldSelect();
    this.getCurrentMask();

    if (field) {
      this.value = field.value;
      this.disabled = this.disabled || field.disabled;
    }
  }

  ngAfterViewInit(): void {
    if (this.focus) {
      setTimeout(() => this.input.focus(), 1);
    }
  }

  modelValueChange(event: any): void {
    this.valueChange.emit(event);
    this.setValueToReactiveFormField(event);
    if (this.maskShouldUpdate) {
      this.getCurrentMask();
    }
  }

  private getCurrentMask(): void {
    if (this.loading) {
      return;
    }
    this.currentMask = undefined;
    this.maskShouldUpdate = false;
    if (this.mask) {
      const mask = this.mask.toUpperCase();
      const maskMap = new Map([['ZIPCODE', '00000-000'], ['PHONE', '(00) 0000-0000'],
      ['CELL', '(00) 00000-0000'], ['CPF', '000.000.000-00'], ['CNPJ', '00.000.000/0000-00'],
      ['DATE', 'd0/M0/0000'], ['TIME', 'Hh:m0'], ['DATETIME', 'd0/M0/0000 Hh:m0']]);

      if (maskMap.has(mask)) {
        this.currentMask = maskMap.get(mask);
      } else {
        switch (mask) {
          case 'CNPJCPF':
            this.maskShouldUpdate = true;
            this.resolveCpfCnpjMask();
            break;
          case 'CURRENCY':
            this.resolveCurrencyMask();
            break;
          default:
            this.currentMask = this.mask;
            break;
        }
      }
    }
  }

  private resolveCpfCnpjMask(): void {
    const field = this.getFieldSelect();
    if (!field) {
      return;
    }
    const digitContentLength = String(field.value || '').replace(/\D/, '').length;
    // CPF ('000.000.000-00 --> 0')
    // has one more character to mask does not block more than 11 digits and change to CNPJ
    this.currentMask = digitContentLength > 11 ? '00.000.000/0000-00' : '000.000.000-000';
  }

  private resolveCurrencyMask(): void {
    this.currentMask = 'dot_separator.2';
    // this.maxLength =
    //  3 /* R$ */
    //  + this.maxInteger /* Número de casas inteiras */
    //  + Math.floor(this.maxInteger / 3) /* Número de pontos */
    //  + 1 /* Vírgula */
    //  + this.precision /* Casas decimais */
    //  - (this.maxInteger % 3 === 0 ? 1 : 0); /* Se a divisão por 3 resultar em inteiro, remove 1*/
  }
}
