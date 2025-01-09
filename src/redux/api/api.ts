import {
  MovieDetails,
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
    getlatestMovies: builder.query<StreamResults, string>({
      query: () => "movie/now_playing?language=en-US&page=1",
    }),
    getlatestTvShows: builder.query<StreamResults, string>({
      query: () => "tv/on_the_air",
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
} = streamingApi;
