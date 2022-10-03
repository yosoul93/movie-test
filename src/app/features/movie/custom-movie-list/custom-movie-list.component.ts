import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-movie-list',
  templateUrl: './custom-movie-list.component.html',
  styleUrls: ['./custom-movie-list.component.scss']
})
export class CustomMovieListComponent implements OnInit {

  @Input() public movies!: any[];
  public readonly imgUrl: string = environment.imgUrl;
  public readonly minStrLen: number = 25;
  public readonly maxStrLen: number = 95;
  
  constructor() { }

  ngOnInit(): void {
  }

}
