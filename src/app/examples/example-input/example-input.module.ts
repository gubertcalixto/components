import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { InputModule } from 'app/input/input.module';

import { ExampleInputComponent } from './example-input.component';

@NgModule({
  declarations: [ExampleInputComponent],
  imports: [
    CommonModule,

    InputModule,
    ReactiveFormsModule,
    MatButtonModule,

    RouterModule.forChild([
      { path: '', component: ExampleInputComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class ExampleInputModule { }
