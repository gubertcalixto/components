import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from 'app/spinner/loader.module';

import { ExampleLoaderComponent } from './example-loader.component';

@NgModule({
  declarations: [ExampleLoaderComponent],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild([
      { path: '', component: ExampleLoaderComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class ExampleLoaderModule { }
