import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import { HashRouter, Route } from 'react-router-dom';
import Edit from '../Edit/Edit';
import Details from '../Details/Details';

class App extends Component {
  componentDidMount() {
    console.log('in App');
    this.props.dispatch({ type: 'GET_MOVIES' });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" render={ (props) => <MovieList {...props} dispatch={this.props.dispatch}/>} />
          <Route exact path="/details" component={Details}/>
          <Route path="/edit" component={Edit} />
        </HashRouter>


      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(App);
