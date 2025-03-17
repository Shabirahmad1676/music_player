import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    likedSong: (state, action) => {
      let exist = state.find(
        (song) => song.songsIndex == action.payload.songsIndex
      );
      if (exist) {
        return;
      } else {
        state.push(action.payload);
      }
    },

    unlikeSong: (state, action) => {
      return state.filter(
        (song) => (song.songsIndex !== action.payload)
      );
    },
  },
});

export const { likedSong, unlikeSong } = likedSlice.actions;
export default likedSlice.reducer;
