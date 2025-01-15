import {
  GenreList,
  MovieDetails,
  MovieGenreList,
  SingleMovieDetails,
  StreamResults,
  TVShowDetails,
} from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_TMDB_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const streamingApi = createApi({
  reducerPath: "streaming-api",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      headers.set("Content-type", "application/json");
      headers.set("Authorization", `Bearer ${apiKey}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    trendingAll: builder.query<StreamResults, string>({
      query: () => "trending/all/day",
    }),
    getTrendingMovies: builder.query<StreamResults, string>({
      query: () => "trending/movie/day?language=en-US",
    }),
    getPopularMovies: builder.query<StreamResults, string>({
      query: () => "movie/top_rated",
    }),
    getUpcomingMovies: builder.query<StreamResults, string>({
      query: () => "movie/upcoming",
    }),

    getlatestMovies: builder.query<StreamResults, string>({
      query: () => "movie/now_playing",
    }),
    getlatestTvShows: builder.query<StreamResults, string>({
      query: () => "tv/on_the_air",
    }),
    getTrendingTvShows: builder.query<StreamResults, string>({
      query: () => "trending/tv/day",
    }),
    getPopularTvShows: builder.query<StreamResults, string>({
      query: () => "tv/top_rated",
    }),

    getMovieById: builder.query<SingleMovieDetails, number>({
      query: (id: number) => `movie/${id}`,
    }),
    getTvSeriesById: builder.query<TVShowDetails, number>({
      query: (id: number) => `tv/${id}`,
    }),
    getMovieCreditsById: builder.query<MovieDetails, number>({
      query: (id: number) => `movie/${id}/credits`,
    }),
    getSimilarMovies: builder.query<StreamResults, number>({
      query: (id: number) => `movie/${id}/similar`,
    }),
    getSimilarTvShows: builder.query<StreamResults, number>({
      query: (id: number) => `tv/${id}/similar`,
    }),
    getMovieGenreList: builder.query<MovieGenreList, string>({
      query: () => `genre/movie/list`,
    }),
    getMoviesandTvShowsBySearch: builder.query<StreamResults, string>({
      query: (name: string) =>
        `search/multi?query=${name}&include_adult=true&language=en-US&media_type=&page=1`,
    }),
    getMovieGenre: builder.query<GenreList, string>({
      query: () => "genre/movie/list",
    }),
    getTvShowGenre: builder.query<GenreList, string>({
      query: () => "genre/tv/list",
    }),
  }),
});

export const {
  useTrendingAllQuery,
  useGetlatestMoviesQuery,
  useGetlatestTvShowsQuery,
  useGetMovieByIdQuery,
  useGetSimilarMoviesQuery,
  useGetMovieCreditsByIdQuery,
  useGetTvSeriesByIdQuery,
  useGetSimilarTvShowsQuery,
  useGetMovieGenreListQuery,
  useGetTrendingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetTrendingTvShowsQuery,
  useGetPopularTvShowsQuery,
  useGetMoviesandTvShowsBySearchQuery,
  useGetMovieGenreQuery,
  useGetTvShowGenreQuery,
} = streamingApi;
