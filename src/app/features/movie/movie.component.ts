import { Component, OnInit } from '@angular/core';
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
  movies: Movie[] = [];

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  handleSearch(inputValue: string): void {
    this.loading = true;
    this._movieService.searchMovies(inputValue)
      .subscribe((items: Movie[]) => {
        console.log("item:", items)
        this.movies = items.map(item => item);
        this.inputTouched = true;
        this.loading = false;
      });
  }   

}
