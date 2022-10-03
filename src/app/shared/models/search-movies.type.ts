import { Movie } from './movie.type';

export type SearchMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}