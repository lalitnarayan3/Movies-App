import { configureStore } from "@reduxjs/toolkit";
import movieData from "../components/MovieWatchList/watchListSlice";
export const store = configureStore({
  reducer: {
    cart: movieData,
  },
});
