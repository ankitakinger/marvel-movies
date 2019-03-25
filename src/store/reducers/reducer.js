import * as types from '../actions/actionTypes';

const initialStore = {
    movies: [],
    movie: null,
    err: null
}

const reducer = (state=initialStore, action) => {
    switch(action.type){
        case types.FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies
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

