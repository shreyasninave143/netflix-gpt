import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        moviesListGpt: null,
        moviesDataGpt: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMoviesDataListGpt: (state, action) => {
            const { moviesListGpt, moviesDataGpt } = action.payload;
            state.moviesListGpt = moviesListGpt;
            state.moviesDataGpt = moviesDataGpt;
        }
    }
});
export const { toggleGptSearchView, addMoviesDataListGpt } = gptSlice.actions;
export default gptSlice.reducer;