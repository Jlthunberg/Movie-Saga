import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

class MovieList extends Component {
  componentDidMount() {
    console.log('in Movie List', this.props.reduxState.moviesReducer)
  }
  // Renders the entire MovieList on the DOM
  render() {
    return (
      <div className="MovieList">
        <ul>
          {this.props.reduxState.moviesReducer.map((movie) => {
            return (
              <MovieItem key={movie.title} movie={movie} dispatch={this.props.dispatch} />
            )
          })}
        </ul>

      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(MovieList);