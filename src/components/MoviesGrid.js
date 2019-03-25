import React,{Component} from 'react';
import {connect} from 'react-redux';
import Movie from './Movie';
import {fetchMovies} from '../store/actions/actions';

class MoviesGrid extends Component{

    componentDidMount(){
        this.props.onFetchingMovies();
    }

    render(){
        return (
            <div>
                {this.props.err ? <h2 style={{ color: "red"}}>{this.props.err.message}</h2> : 
                this.props.movies.map(movie => <Movie movie={movie} key={movie.id}/>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        err: state.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesGrid);