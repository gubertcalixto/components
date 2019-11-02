import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples.routing';

@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
