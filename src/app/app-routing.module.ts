import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {   
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./features/features.module')
      .then(m => m.FeaturesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
