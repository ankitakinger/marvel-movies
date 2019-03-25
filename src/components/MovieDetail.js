import React,{Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';
import {fetchMovieDetails} from '../store/actions/actions';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component{

    componentDidMount(){
        this.props.onFetchingDetails(this.props.match.params.id);
    }

    render(){
        let movie_details = null;
        if(this.props.movie)
            movie_details = (
                <div>
                    <div 
                        id="backdrop"
                        style={{
                            backgroundImage: `url(${BACKDROP_PATH}${this.props.movie.backdrop_path})`
                            }}  alt="backdrop"></div>
                    <div id="overlap">
                        <img 
                            src={`${POSTER_PATH}${this.props.movie.poster_path}`} 
                            alt={this.props.movie.original_title}
                            id="poster" />
                        <div>
                            <h1>{(this.props.movie.original_title).toUpperCase()}</h1>
                            <div>
                                <span id="adult">{this.props.movie.adult ? 'A' : 'U/A'}</span> 
                                <span>  {this.props.movie.original_language === 'en' ? "ENGLISH" : "HINDI"}</span>
                            </div>
                            <br />
                            <StarRatingComponent 
                                starCount={10} 
                                value={this.props.movie.vote_average} 
                                name="rating"
                                emptyStarColor="white"/>
                            <h3>Release Date: {this.props.movie.release_date}</h3>
                            <p>{this.props.movie.overview}</p>
                        </div>
                        </div>
                </div>
            );
        return (
            this.props.movie !== undefined ? 
                movie_details : 
                <div style={{margin: "20%", fontSize: "50px", color: "cyan"}}>{!this.props.err ?
                    "Movie does not exist!!"
                    : "Loading..."}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie,
        err: state.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingDetails: (id) => dispatch(fetchMovieDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);