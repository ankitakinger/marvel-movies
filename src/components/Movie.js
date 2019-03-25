import React from 'react';
import {Link} from 'react-router-dom';

const GRID_BASE_URL = "http://image.tmdb.org/t/p/w185";

const movie = (props) => (
    <Link to={`/${props.movie.id}`} >
        <img src={`${GRID_BASE_URL}${props.movie.poster_path}`} alt={props.movie.original_title} />
    </Link>
);

export default movie;