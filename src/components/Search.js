import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../store/actions/actions';

const search = (props) => {

    let option;

    const search = (e) => {
        searchOptionSelected();
        props.fetchMovies(e.target.value,option);
    }

    const searchOptionSelected = () => {
        const radios = document.getElementsByTagName('input');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                option = radios[i].value; 
            }
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Select an option below to start searching..." 
                size="50" 
                onChange={search} />
            <br />
            <div>Search by : <br />
                <input type="radio" className="select" name="search" value ="title" checked onChange={searchOptionSelected}/>Title
                <input type="radio" className="select" name="search" value ="language" onChange={searchOptionSelected} />Language
                <input type="radio" className="select" name="search" value ="vote" onChange={searchOptionSelected} />Rating
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies : (search,option) => dispatch(fetchMovies(search,option))
    }
}

export default connect(null, mapDispatchToProps)(search);