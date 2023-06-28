import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  // {
  //   path: 'flights',
  //   loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  // },
  {
    path: 'home',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
      .then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
