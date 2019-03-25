import React,{Component} from 'react';
import {connect} from 'react-redux';
import Movie from './Movie';
import {fetchMovies} from '../store/actions/actions';

class MoviesGrid extends Component{

    state = {
        isLoading: true
    }

    componentDidMount(){
        this.props.fetchMovies();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.movies === this.props.movies){
            this.setState({
                isLoading: true
            })
        }
        else{
            this.setState({
                isLoading: false
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.isLoading ? <h2 style={{color:"green", fontSize: '40px'}}>Loading...</h2> :
                this.props.err ? <h2 className="Danger">{this.props.err.message}</h2> : 
                (this.props.movies) instanceof Array ?
                this.props.movies.map(movie => <Movie movie={movie} key={movie.id}/>) :
                <h2 className="Danger">{this.props.movies}</h2>
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