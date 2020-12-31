import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFavoritedListComponent } from './movie-favorited-list.component';

describe('MovieFavoritedListComponent', () => {
  let component: MovieFavoritedListComponent;
  let fixture: ComponentFixture<MovieFavoritedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFavoritedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFavoritedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
