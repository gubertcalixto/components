import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMaskModule } from 'ngx-mask';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    InputComponent,
    FormsModule
  ]
})
export class InputModule { }
