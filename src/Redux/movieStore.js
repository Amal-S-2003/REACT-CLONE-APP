import { configureStore } from "@reduxjs/toolkit";
import movieSlice from './movieSlice/movieSlice'
const movieStore = configureStore({
  reducer: {
    movieReducer: movieSlice,
  },
});
export default movieStore;
