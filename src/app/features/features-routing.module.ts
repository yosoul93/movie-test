import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path     : 'movie',
    component: MovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {
}
