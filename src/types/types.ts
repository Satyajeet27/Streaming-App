// Represents an individual result for a movie or TV show
export type Result = {
  backdrop_path: string;
  id: number;
  first_air_date?: string;
  release_date?: string;
  genre_ids: number[]; // Changed 'genre' to 'genre_ids' for consistency with common naming
  adult: boolean;
  media_type: "tv" | "movie";
  origin_country?: string[];
  original_language: string;
  name?: string; // For TV shows
  title?: string; // For movies
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

// Represents a compact version of a show or movie for lists
export type LatestShow = {
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

// Represents the result of a paginated streaming API
export type StreamResults = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

// Represents detailed information about a single movie
export type SingleMovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Record<string, unknown> | null; // Assuming 'belongs_to_collection' can be null or an object
  budget: number;
  genres: Array<{ id: number; name: string }>;
  id: number;
  origin_country?: string[];
  original_language: string;
  name?: string; // For TV shows
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{ iso_639_1: string; name: string }>;
  status: string;
  tagline: string | null;
  title?: string; // For movies
  vote_average: number;
  vote_count: number;
};

export type Person = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
};

export type MovieDetails = {
  id: number;
  cast: Person[];
  crew: Person[];
};
export type TVShowDetails = {
  adult: boolean;
  backdrop_path: string;
  created_by: Array<{
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }>;
  episode_run_time: number[];
  first_air_date: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
  };
  name: string;
  next_episode_to_air: string | null;
  networks: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  seasons: Array<{
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }>;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type MovieGenreList = {
  genres: Array<{
    id: number;
    name: string;
  }>;
};
export type Genre = { id: number; name: string };
export type GenreList = {
  genres: Genre[];
};
