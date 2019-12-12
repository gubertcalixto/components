import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {
  navLinks = [
    { path: '/examples/timeline', label: 'Timeline' },
    { path: '/examples/input', label: 'Input' },
    { path: '/examples/button', label: 'Button' },
    { path: '/examples/loader', label: 'Loader' },
    { path: '/examples/kanban', label: 'Kanban' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
