import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/shared/models/movie-details.interface';
import { Animations } from 'src/app/shared/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  animations: Animations,
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  animationDirection: string = 'left';
  loading: boolean = true;
  movieDetails!: MovieDetails;
  imgUrl: string = environment.imgUrl;
  isFavorited!: boolean;
  
  private _unsubscribeAll: Subject<any>;
  
  constructor(
    public _movieService: MovieService,
    private route: ActivatedRoute
  ) { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._movieService.getMovieDetails(params['id'])
        .subscribe((details: MovieDetails) => {
          takeUntil(this._unsubscribeAll),
          this.movieDetails = details;
          this.loading = false;
          this.checkIsFavorite(this.movieDetails, this._movieService.moviesFavoritedList);
        });
    });
  }

  toggleFavorited(): void  {
    this.isFavorited = !this.isFavorited;
    if(this.isFavorited){
      this._movieService.addFavoriteMovie(this.movieDetails)
    } else {
      this._movieService.deleteFavoriteMovie(this.movieDetails)
    }
  }

  checkIsFavorite(mvoie: MovieDetails, movieFavoriteList: MovieDetails[]): boolean {
    for (let x in movieFavoriteList) {
      if (movieFavoriteList[x].id === mvoie.id) {
        return this.isFavorited = true;
      }
    }
    return this.isFavorited = false;
  }

  ngOnDestroy(): void{
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
