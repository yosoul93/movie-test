import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/shared/models/movie-detail.type';
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

  public animationDirection: string = 'left';
  public loading: boolean = true;
  public movieDetail!: MovieDetail;
  public readonly imgUrl: string = environment.imgUrl;
  public isFavorited!: boolean;
  
  private _unsubscribeAll: Subject<any>;
  
  constructor(
    public _movieService: MovieService,
    private route: ActivatedRoute
  ) { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._movieService.getMovieDetail(params['id'])
        .subscribe((details: MovieDetail) => {
          takeUntil(this._unsubscribeAll),
          this.movieDetail = details;
          this.loading = false;
          // set favorite movie on Page Init
          for (let movieFavorite of this._movieService.moviesFavoritedList) {
            if (movieFavorite.id === this.movieDetail.id) {
              this.isFavorited = true;
            }
          }
        });
    });
  }
  

  toggleFavoriteBtn(): void  {
    this.isFavorited = !this.isFavorited;
    if(this.isFavorited){
      this._movieService.addFavoriteMovie(this.movieDetail)
    } else {
      this._movieService.deleteFavoriteMovie(this.movieDetail.id)
    }
  }

  ngOnDestroy(): void{
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
