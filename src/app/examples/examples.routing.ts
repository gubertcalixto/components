import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      { path: 'timeline', loadChildren: () => import('./example-timeline/example-timeline.module').then(m => m.ExampleTimelineModule) },
      { path: 'input', loadChildren: () => import('./example-input/example-input.module').then(m => m.ExampleInputModule) },
      { path: 'button', loadChildren: () => import('./example-button/example-button.module').then(m => m.ExampleButtonModule) },
      { path: 'loader', loadChildren: () => import('./example-loader/example-loader.module').then(m => m.ExampleLoaderModule) },
      { path: 'kanban', loadChildren: () => import('./example-kanban/example-kanban.module').then(m => m.ExampleKanbanModule) },
      { path: '**', redirectTo: 'input' }
    ]
  },
  { path: '**', redirectTo: 'examples' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
