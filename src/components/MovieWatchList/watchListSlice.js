import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      const movie = action.payload;
      const existedMovie = state.watchList.find(
        (exist) => exist.id === movie.id
      );

      if (existedMovie) {
        alert("MOVIE ALREADY ADDED");
      } else {
        alert("MOVIE ADD TO THE LIST ");
        state.watchList.push(movie);
      }
    },

    removeMovie: (state, action) => {
      const { movieId } = action.payload;
      const movieIndex = state.watchList.findIndex(
        (item) => item.id === movieId
      );
      if (movieIndex !== -1) {
        state.watchList.splice(movieIndex, 1);
      }
    },
  },
});

export const { addToList, removeMovie } = watchListSlice.actions;
export default watchListSlice.reducer;
