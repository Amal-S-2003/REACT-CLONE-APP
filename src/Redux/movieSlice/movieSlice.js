import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "30c0a3564f27c51154c2bfdb9e77d9c1";
const apiService = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const fetchMovies = async () => {
  try {
    const response = await apiService.get("movie/popular", {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
};

// const fetchMoviesData = async () => {
//    await fetchMovies();
// };

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovieData: (state, action) => {
      state.movies = fetchMovies();
    },
  },
});
export const { getMovieData } = movieSlice.actions;
export default movieSlice.reducer;
