import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../store/actions/actions';

class Search extends Component {

    state = {
        selectedType: 'title',
        search: ''
    }

    search = (e) => {
        this.setState({
            search: e.target.value
        }, () => this.getMoviesBySearchText());
    }

    searchOptionSelected = (type) => {
        this.setState({
            selectedType: type,
            search: ''
        }, () => this.getMoviesBySearchText());
    }

    getMoviesBySearchText = () => {
        this.props.fetchMovies(this.state.search,this.state.selectedType);
    }

    render() {

    return (
        <div>
            <input 
                type="text" 
                placeholder="Select an option below to start searching..." 
                size="50"
                value={this.state.search}
                onChange={this.search} />
            <br />
            <div>Search by : <br />
                <input 
                    type="radio" 
                    className="select" 
                    name="search"
                    checked={this.state.selectedType === 'title'} 
                    onChange={() => this.searchOptionSelected('title')}/>Title
                <input 
                    type="radio" 
                    className="select" 
                    name="search"
                    checked={this.state.selectedType === 'language'}
                    onChange={(e) => this.searchOptionSelected('language')} />Language
                <input 
                    type="radio" 
                    className="select" 
                    name="search" 
                    checked={this.state.selectedType === 'vote'}
                    onChange={() => this.searchOptionSelected('vote')} />Rating
            </div>
        </div>
    );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies : (search,option) => dispatch(fetchMovies(search,option))
    }
}

export default connect(null, mapDispatchToProps)(Search);