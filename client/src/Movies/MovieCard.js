import React from 'react';
import {Link} from 'react-router-dom';


const MovieCard = props => {
  return (
    <section className="movie-card">
      <Link to={`/movie/${props.movie.id}`}>
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
    </section>
  )
};

export default MovieCard;
