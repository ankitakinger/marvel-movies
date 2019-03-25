import React, { Component } from 'react';
import Search from './Search';
import MoviesGrid from './MoviesGrid';
import MovieDetail from './MovieDetail';
import {Switch,Link,Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1 className="title">The Marvel Universe</h1>
        </Link>
        <Switch>
          <Route exact path="/" render={() => (
            <div>
              <Search />
              <MoviesGrid />
            </div>
          )}/>
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
