import * as types from './actionTypes';
import axios from 'axios';

export const fetchedMovies = (movies,search,option) => {
    return {
        type: types.FETCH_MOVIES,
        movies,
        search,
        option
    }
}


export const fetchMovies = (search,option) => {
    return dispatch => {
        axios.get('https://api.themoviedb.org/4/list/1?page=1&api_key=bd0830ad7ef334b313907c035d767bd1')
            .then( movies => {
                let result = movies.data.results;
                dispatch(fetchedMovies(result,search,option));
            })
            .catch( e => {
                dispatch(fetchFailed(e));
            });
    }
}

export const fetchFailed = (err) => {
    return {
        type: types.FETCH_FAILED,
        err
    }
}

export const fetchedMovieDetails = (movie) => {
    return {
        type: types.FETCH_MOVIE_DETAILS,
        movie
    }
}

export const fetchMovieDetails = (id) => {
    return dispatch => {
        axios.get('https://api.themoviedb.org/4/list/1?page=1&api_key=bd0830ad7ef334b313907c035d767bd1')
        .then(movies => {
            const allMovies = movies.data.results;
            let movie;
            for(let i=0; i<allMovies.length; i++){
                if(parseInt(id) === allMovies[i].id){
                    movie = allMovies[i];
                    break;
                }
            }
            dispatch(fetchedMovieDetails(movie));
        })
        .catch(e => {
            dispatch(fetchFailed(e));
        });
    }
}