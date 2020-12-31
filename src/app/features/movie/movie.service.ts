import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HeaderUtils } from 'src/app/shared/utils/header-utils';
import { SearchMovies } from 'src/app/shared/models/search-movies.interface';
import { MovieDetails } from 'src/app/shared/models/movie-details.interface';

@Injectable()

export class MovieService {
  
  tempStoreSearchInput: string = '';
  moviesFavoritedList: MovieDetails[] = this.getFavoritedMovie() || [];
  
  constructor(
    private _httpClient: HttpClient,
  ) { }

  searchMovies(query: string): Observable <any> {
    const url = `${environment.url}search/movie?api_key=${environment.apiKey}&query=${query}`;
    return this._httpClient.get<SearchMovies>(url, { headers: HeaderUtils.appendAuthorizationHeader()})
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error)
          return throwError(error);
        })
      );
  }

  getMovieDetails(id: string): Observable <any> {
    const url = `${environment.url}movie/${id}?api_key=${environment.apiKey}`;
    return this._httpClient.get<MovieDetails>(url, { headers: HeaderUtils.appendAuthorizationHeader()})
      .pipe(
        tap(res => res),
        catchError(error => {
          console.log(error)
          return throwError(error);
        })
      );
  }
  
  addFavoriteMovie(movie: MovieDetails) {
    this.moviesFavoritedList.push(movie);
    this.saveFavoritedList();
  }

  deleteFavoriteMovie(movie: MovieDetails) {
    const index = this.moviesFavoritedList.indexOf(movie);
    this.moviesFavoritedList.splice(index, 1);
    this.saveFavoritedList();
  }

  saveFavoritedList() {
    this.setFavoritedMovie('Favorited_Movies', this.moviesFavoritedList);
  }

  // We are using localstorage to store and retrieve Favorited Movie

  setFavoritedMovie(key: string, movie: MovieDetails[]) {
    localStorage.setItem(key, JSON.stringify(movie));
  }

  getFavoritedMovie(): MovieDetails[] {
    return JSON.parse(localStorage.getItem('Favorited_Movies') || '');
  }
}