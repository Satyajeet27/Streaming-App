import { SingleMovie, TrendingAll } from "@/types/types";
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
    trendingAll: builder.query<TrendingAll, string>({
      query: () => "trending/all/day",
    }),
    latestMovies: builder.query<TrendingAll, string>({
      query: (name: "Movies" | "Tv") => {
        if (name === "Movies") {
          return "movie/now_playing?language=en-US&page=1";
        } else {
          return "tv/on_the_air";
        }
      },
    }),
    getMoviesById: builder.query<SingleMovie, string>({
      query: (id: string) => `movie/${id}`,
    }),
    getSimilarMovies: builder.query<TrendingAll, number>({
      query: (id: number) => `movie/${id}/similar`,
    }),
    getSimilarTvShows: builder.query<TrendingAll, number>({
      query: (id: number) => `tv/${id}/similar`,
    }),
  }),
});

export const {
  useTrendingAllQuery,
  useLatestMoviesQuery,
  useGetMoviesByIdQuery,
  useGetSimilarMoviesQuery,
} = streamingApi;
