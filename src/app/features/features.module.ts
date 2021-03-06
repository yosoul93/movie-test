import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { MovieService } from './movie/movie.service';
import { SearchInputComponent } from './movie/search-input/search-input.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieFavoritedListComponent } from './movie/movie-favorited-list/movie-favorited-list.component';
import { CustomMovieListComponent } from './movie/custom-movie-list/custom-movie-list.component';

@NgModule({
  imports: [FeaturesRoutingModule,SharedModule],
  declarations: [
    SearchInputComponent,
    MovieListComponent,
    MovieComponent, 
    MovieDetailComponent, 
    MovieFavoritedListComponent, 
    CustomMovieListComponent
  ],
  providers: [MovieService]
})
export class FeaturesModule {
}
