export interface SimplifiedMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: boolean;
  vote_count: boolean;
}

export interface GetPopularMoviesResponse {
  page: number;
  results: SimplifiedMovie[];
}

export type MovieDetails = {
  budget: number;
  belongs_to_collection: null;
  genres: SimpleGenre[];
  homepage: string;
  imdb_id: string;
  originCountry: string[];
  production_companies: ProductionCompany[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokeLanguage[];
  status: string;
  tagline: string;
  title: string;
} & Omit<SimplifiedMovie, "genre_ids">;

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface SpokeLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface SimpleGenre {
  id: number;
  name: string;
}
