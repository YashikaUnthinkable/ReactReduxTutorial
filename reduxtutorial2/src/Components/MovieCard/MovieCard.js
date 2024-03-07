import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { data } = props;
  const path = "/movie/"+data.imdbID ; 
  return (
    <div className="card-item" >
      <Link to={path}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} atl={data.Title}></img>
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year} </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
