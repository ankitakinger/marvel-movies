import React,{Component} from 'react';
import {connect} from 'react-redux';
import Movie from './Movie';
import {fetchMovies} from '../store/actions/actions';

class MoviesGrid extends Component{

    componentDidMount(){
        this.props.fetchMovies();
    }

    render(){
        return (
            <div>
                {this.props.err ? <h2 style={{ color: "red"}}>{this.props.err.message}</h2> : 
                (this.props.movies) instanceof Array ?
                this.props.movies.map(movie => <Movie movie={movie} key={movie.id}/>) :
                <h2 style={{color: 'red'}}>{this.props.movies}</h2>
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
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesGrid);