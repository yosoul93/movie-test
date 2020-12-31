import { Component, OnInit, HostBinding } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from 'src/app/shared/models/movie.interface';
import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: Animations,
})
export class MovieComponent implements OnInit {

  inputTouched: boolean = false;
  loading: boolean = false;
  // @HostBinding('@.disabled')
  movies: Movie[] = [];


  
  constructor(
    public _movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  handleSearch(inputValue: string): void {
    this.loading = true;
    this._movieService.searchMovies(inputValue)
      .subscribe((items: Movie[]) => {
        this.movies = items.map(item => item);
        this.inputTouched = true;
        this.loading = false;
      });
  }   

}
