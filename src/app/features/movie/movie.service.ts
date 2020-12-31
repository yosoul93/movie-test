import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HeaderUtils } from 'src/app/shared/utils/header-utils';
import { SearchMovies } from 'src/app/shared/models/search-movies.interface';
import { MovieDetail } from 'src/app/shared/models/movie-detail.interface';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()

export class MovieService {
  
  storeSearchInput: string = '';
  moviesFavoritedList: MovieDetail[] = this.getFavoritedMovie() || [];
  isPageReload: boolean = false;
  previousNavigationUrl: string = '';
  currentNavigationUrl: string = '/movies';

  constructor(
    private _httpClient: HttpClient,
    private router: Router
  ) { 
    // detect when the user reload the page
    // get previous and current navigation url
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.previousNavigationUrl = this.currentNavigationUrl;
        this.currentNavigationUrl = event.url;
        if (event.id === 1 && event.url === event.urlAfterRedirects) {
          this.isPageReload = true;
        } else {
          this.isPageReload = false;
        }
      })
      
  }

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

  getMovieDetail(id: string): Observable <any> {
    const url = `${environment.url}movie/${id}?api_key=${environment.apiKey}`;
    return this._httpClient.get<MovieDetail>(url, { headers: HeaderUtils.appendAuthorizationHeader()})
      .pipe(
        tap(res => res),
        catchError(error => {
          console.log(error)
          return throwError(error);
        })
      );
  }
  
  addFavoriteMovie(movie: MovieDetail): void {
    this.moviesFavoritedList.push(movie);
    this.saveFavoritedList();
  }

  deleteFavoriteMovie(movieId: number): void {
    const index = this.moviesFavoritedList.map(x => x.id).indexOf(movieId);
    this.moviesFavoritedList.splice(index, 1);
    this.saveFavoritedList();
  }

  saveFavoritedList(): void {
    this.setFavoritedMovie('Favorited_Movies', this.moviesFavoritedList);
  }

  // We are using localstorage to store and retrieve Favorited Movie

  setFavoritedMovie(key: string, movie: MovieDetail[]): void {
    localStorage.setItem(key, JSON.stringify(movie));
  }

  getFavoritedMovie(): MovieDetail[] {
    return JSON.parse(localStorage.getItem('Favorited_Movies') || 'null');
  }
}