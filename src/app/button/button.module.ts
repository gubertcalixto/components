import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
