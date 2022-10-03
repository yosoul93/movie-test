export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: [{id: number, name: string}];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [{id: number, name: string, logo_path: string, }];
  production_countries: [{id: number, name: string, logo_path: string, }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [{name: string}];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
