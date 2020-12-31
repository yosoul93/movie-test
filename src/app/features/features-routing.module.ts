import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { MovieFavoritedListComponent } from './movie/movie-favorited-list/movie-favorited-list.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path     : 'movies',
    component: MovieComponent,
  },
  {
    path     : 'movies/favorites',
    component: MovieFavoritedListComponent,
  },
  {
    path     : 'movies/detail/:id',
    component: MovieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {
}
