import * as types from './actionTypes';
import axios from 'axios';

export const fetchedMovies = (movies) => {
    return {
        type: types.FETCH_MOVIES,
        movies
    }
}


export const fetchMovies = (search,op) => {
    return dispatch => {
        const radios = document.getElementsByTagName('input');
        let option;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                option = radios[i].value; 
            }
        }
        axios.get('https://api.themoviedb.org/4/list/1?page=1&api_key=bd0830ad7ef334b313907c035d767bd1')
            .then( movies => {
                let result = movies.data.results;
                if(search){
                    if(option === 'title'){
                        result = result.filter((movie) => {
                            return ((movie.original_title).toUpperCase()).match(search.toUpperCase());
                        });
                    }
                    if(option === 'language'){
                        result = result.filter((movie) => {
                            return ((movie.original_language).toUpperCase()).match(search.toUpperCase().substr(0,2));
                        });
                    }
                    if(option === 'vote'){
                        result = result.filter((movie) => {
                            return movie.vote_average === parseFloat(search);
                        });
                    }
                }
                dispatch(fetchedMovies(result));
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