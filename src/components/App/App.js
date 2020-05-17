import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList'

class App extends Component {
  componentDidMount(){
    console.log('in App');
    this.props.dispatch({type: 'GET_MOVIES'});
}
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Home Movie Page</p>
        <MovieList dispatch = {this.props.dispatch} />
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ( { reduxState } );

export default connect(putStateOnProps)(App);
