import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    NgxMaskModule.forRoot(),

    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule) },
      { path: '**', redirectTo: '' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
