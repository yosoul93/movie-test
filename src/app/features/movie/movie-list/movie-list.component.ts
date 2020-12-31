import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.interface'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movieList!: Movie[];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
