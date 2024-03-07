import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../Commen/apis/movieapi";
import { APIkey } from "../../Commen/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import "./MovieDetatils.scss";
import {
  addSearchedMovie,
  removeSearchMovie,
} from "../../features/movies/MovieSlice";
import { useSelector } from "react-redux";
import { getSearchedMovie } from "../../features/movies/MovieSlice";

function MovieDetails() {
  const { imdbId } = useParams();
  const movie = useSelector(getSearchedMovie);
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apikey=${APIkey}&i=${imdbId}&Plot=full`)
      .catch((err) => console.log(err));
    dispatch(addSearchedMovie(response.data));
  };
  console.log(imdbId);
  useEffect(() => {
    fetchMovies();
    return () => {
      dispatch(removeSearchMovie());
    };
  }, []);
  if (movie) {
    return (
      <div className="movie-section">
        {Object.keys(movie).length === 0?
        <div>....loading</div>:<>
        <div className="section-left">
          <div className="movie-title">{movie.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"></i> : {movie.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
              {movie.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film"></i> : {movie.Runtime}
            </span>
            <span>
              Year <i className="fa-regular fa-calendar-minus"></i> : {movie.Year}
            </span>
          </div>
          <div className="movie-plot">{movie.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{movie.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{movie.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{movie.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{movie.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{movie.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </>
      }
        
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default MovieDetails;
