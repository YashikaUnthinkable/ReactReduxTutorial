import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../Commen/apis/movieapi";
import { APIkey } from "../../Commen/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies ,addShows} from "../../features/movies/MovieSlice";

function Home() {
  const movieText = "Friends";
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));
    dispatch(addMovies(response.data));
  };
  const fetchShows = async ()=>{
    const response = await movieApi
      .get(`?apikey=${APIkey}&s=${movieText}&type=series`)
      .catch((err) => console.log(err));
    dispatch(addShows(response.data));
  }
  useEffect(() => {
    fetchMovies();
    fetchShows();
  },[]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
