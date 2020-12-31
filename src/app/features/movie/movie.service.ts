import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HeaderUtils } from 'src/app/shared/utils/header-utils';
import { SearchMovies } from 'src/app/shared/models/search-movies.interface';
import { Movie } from 'src/app/shared/models/movie.interface';

@Injectable()

export class MovieService {
  
  tempStoreSearchInput: string = '';
  moviesFavorited: Movie[] = [];
  
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

}