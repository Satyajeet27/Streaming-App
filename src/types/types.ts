export type ResultsProps = {
  backdrop_path: string;
  id: number;
  first_air_date?: string;
  release_date?: string;
  genre: number[];
  adult: boolean;
  media_type: "tv" | "movie";
  origin_country: string[];
  original_language: string;
  name?: string;
  title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
export type LatestShowType = {
  id: number;
  first_air_date?: string;
  release_date?: string;
  media_type: "tv" | "movie";
  name?: string;
  title?: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type TrendingAll = {
  page: number;
  results: ResultsProps[];
  totalPages: number;
  totalResults: number;
};

export type SingleMovie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  id: number;
  origin_country: string[];
  original_language: string;
  name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
};
