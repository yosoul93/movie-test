import { Movie } from './movie.interface';

export interface SearchMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}