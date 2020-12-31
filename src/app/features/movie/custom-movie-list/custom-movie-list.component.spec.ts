import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMovieListComponent } from './custom-movie-list.component';

describe('CustomMovieListComponent', () => {
  let component: CustomMovieListComponent;
  let fixture: ComponentFixture<CustomMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
