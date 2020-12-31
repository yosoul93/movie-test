import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.interface'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies!: Movie[];
  imgUrl: string = environment.imgUrl;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
