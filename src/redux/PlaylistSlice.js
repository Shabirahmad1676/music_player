import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      let exist = state.find(
        (song) => song.songsIndex == action.payload.songsIndex
      );
      if (exist) {
        return;
      } else {
        state.push(action.payload);
      }
    },

    RemoveSong: (state, action) => {
      return state.filter(
        (song) => (song.songsIndex !== action.payload)
      );
    },
  },
});

export const { addSong, RemoveSong } = playlistSlice.actions;
export default playlistSlice.reducer;
