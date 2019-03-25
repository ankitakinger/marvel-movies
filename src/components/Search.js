import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../store/actions/actions';

const search = (props) => {

    const search = (e) => {
        props.onFetching(e.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Select an option below to start searching..." 
                size="50" 
                onChange={search} />
            <br />
            <div id="searches">
                <input type="radio" name="search" value ="title"/>Search by Title <br />
                <input type="radio" name="search" value ="language" />Search by Language <br />
                <input type="radio" name="search" value ="vote" />Search by Rating <br />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onFetching : (search) => dispatch(fetchMovies(search))
    }
}

export default connect(null, mapDispatchToProps)(search);