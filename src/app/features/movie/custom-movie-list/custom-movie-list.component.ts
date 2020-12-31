import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-movie-list',
  templateUrl: './custom-movie-list.component.html',
  styleUrls: ['./custom-movie-list.component.scss']
})
export class CustomMovieListComponent implements OnInit {

  @Input() movies!: any[];
  imgUrl: string = environment.imgUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
