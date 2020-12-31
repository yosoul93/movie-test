import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/shared/animations';
import { MovieDetails } from 'src/app/shared/models/movie-details.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-favorited-list',
  templateUrl: './movie-favorited-list.component.html',
  styleUrls: ['./movie-favorited-list.component.scss'],
  animations: Animations,
})
export class MovieFavoritedListComponent implements OnInit {
  
  animationDirection!: string;
  moviesFavoritedList: MovieDetails[] = [];
  
  constructor(
    public _movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.animationDirection = this._movieService.previousNavigationUrl.includes('detail') ? 'right' : 'left';
    this.moviesFavoritedList = this._movieService.moviesFavoritedList;
  }

}
