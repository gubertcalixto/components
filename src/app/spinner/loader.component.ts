import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ComponentBase } from '@shared/component-base';

type LoaderType = 'spinner' | 'bar';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent extends ComponentBase implements OnInit {
  @Input() color = 'primary';
  @Input() diameter: number | string = 50;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() type: LoaderType = 'spinner';
  @Input() value: number | string;
  @Input() weight: number | string;

  ngOnInit() {
  }

}
