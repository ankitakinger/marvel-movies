import * as types from '../actions/actionTypes';

const initialStore = {
    movies: [],
    movie: null,
    err: null
}

const reducer = (state=initialStore, action) => {
    switch(action.type){
        case types.FETCH_MOVIES:
            let result = action.movies;
            if(action.search){
                if(action.option === 'title'){
                    result = result.filter((movie) => {
                        return ((movie.original_title).toUpperCase()).match(action.search.toUpperCase());
                    });
                }
                else if(action.option === 'language'){
                    result = result.filter((movie) => {
                        return ((movie.original_language).toUpperCase()).match(action.search.toUpperCase().substr(0,2));
                    });
                }
                else if(action.option === 'vote'){
                    result = result.filter((movie) => {
                        return movie.vote_average === parseFloat(action.search);
                    });
                }
                if(result.length === 0){
                    result = "Your search '" + action.search + "' doesn't match any results!!"; 
                }
            }
            return {
                ...state,
                movies: result
            }
        case types.FETCH_MOVIE_DETAILS:
            return {
                ...state,
                movie: action.movie
            }
        case types.FETCH_FAILED:
            return {
                ...state,
                err: action.err
            }
        default:
            return state;
    }
}

export default reducer;

