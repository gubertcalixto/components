import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'app/button/button.module';

import { ExampleButtonComponent } from './example-button.component';

@NgModule({
  declarations: [ExampleButtonComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: ExampleButtonComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class ExampleButtonModule { }
