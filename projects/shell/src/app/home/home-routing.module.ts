import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeIndexComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
