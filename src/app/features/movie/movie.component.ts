import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from 'src/app/shared/models/movie.type';
import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: Animations,
})
export class MovieComponent implements OnInit {
  
  animationDirection: string = 'right';
  inputTouched: boolean = false;
  loading: boolean = false;
  movieList: Movie[] = [];

  constructor(
    public _movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  handleSearch(inputValue: string): void {
    this.loading = true;
    this._movieService.searchMovies(inputValue)
      .subscribe((items: Movie[]) => {
        this.movieList = items.map(item => item);
        this.inputTouched = true;
        this.loading = false;
      });
  }   

}
