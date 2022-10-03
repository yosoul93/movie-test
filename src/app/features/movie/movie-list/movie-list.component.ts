import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.type'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() public movieList!: Movie[];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
