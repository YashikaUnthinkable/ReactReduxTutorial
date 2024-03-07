import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
    shows: {},
    searchedMovie: {}
}
const MovieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovies: (state, {payload})=>{
            state.movies = payload;
        },
        addShows: (state, {payload})=>{
            state.shows = payload;
        },
        addSearchedMovie : (state, {payload})=>{
            state.searchedMovie = payload;
        },
        removeSearchMovie: (state)=>{
            state.searchedMovie = {};
        }
    },
});

export const {addMovies, addSearchedMovie, removeSearchMovie, addShows} = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSearchedMovie = (state)=>state.movies.searchedMovie;
export default MovieSlice.reducer;
