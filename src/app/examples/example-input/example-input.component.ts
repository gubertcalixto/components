import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-input',
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleInputComponent implements OnInit {
  formGroup: FormGroup;
  teste = 'valor';

  controlName = 'email';
  placeholder = '123';
  readonly = false;
  maxLength: number = undefined;
  focus = true;
  type = 'text';
  required = false;
  disabled = false;
  tooltip = undefined;
  tooltipPosition = 'below';
  hintLabel = 'hintLabel';
  errorMessage: string = undefined;
  mask: string = undefined;
  dropSpecialCharacters = true;
  showMaskTyped = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  placeholderChange() { this.placeholder = this.placeholder === '123' ? 'p2' : '123'; }
  readonlyChange() { this.readonly = !this.readonly; }
  maxLengthChange() { this.maxLength = this.maxLength === 10 ? undefined : 10; }
  focusChange() { this.focus = !this.focus; }
  typeChange() { this.type = this.type === 'text' ? 'password' : 'text'; }
  requiredChange() { this.required = !this.required; }
  disabledChange() { this.disabled = !this.disabled; }
  tooltipChange() { this.tooltip = this.tooltip === 't1' ? 't2' : 't1'; }
  tooltipPositionChange() { this.tooltipPosition = this.tooltipPosition === 'above' ? 'below' : 'above'; }
  hintLabelChange() { this.hintLabel = this.hintLabel === 'hintLabel' ? 'h2' : 'hintLabel'; }
  errorMessageChange() { this.errorMessage = this.errorMessage === 'e1' ? 'e2' : 'e1'; }
  maskChange() { this.mask = this.mask === undefined ? 'CNPJCPF' : undefined; }
  dropSpecialCharactersChange() { this.dropSpecialCharacters = !this.dropSpecialCharacters; }
  showMaskTypedChange() { this.showMaskTyped = !this.showMaskTyped; }
}
