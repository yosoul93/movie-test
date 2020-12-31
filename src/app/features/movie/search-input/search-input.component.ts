import { Component, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Animations } from 'src/app/shared/animations';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  animations: Animations,
})

export class SearchInputComponent implements AfterViewInit, OnDestroy {

  @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _movieService: MovieService
  ) { 
   
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngAfterViewInit(): void {
    // when we navigate, we will set this
    if(this._movieService.tempStoreSearchInput) {
      this.inputElement.nativeElement.value = this._movieService.tempStoreSearchInput;
      setTimeout(() => {
        this.search.next(this._movieService.tempStoreSearchInput);
      });
    }
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged()
      )
      .subscribe(value => {
        let text: string | any = value;
        if (text){
          this._movieService.tempStoreSearchInput = text;
          this.search.next(text);
        } 
      });
  }

  ngOnDestroy(): void{
      // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
