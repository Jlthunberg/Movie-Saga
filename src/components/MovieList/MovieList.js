import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

class MovieList extends Component {
  componentDidMount() {
    console.log('in Movie List', this.props.reduxState.moviesReducer)
  }
  // Renders the entire MovieList on the DOM
  render() {
    return (
      <div >
        <Grid >
          {this.props.reduxState.moviesReducer.map((movie, index) => {
            return (
              <MovieItem key={index} movie={movie} dispatch={this.props.dispatch} />
            )
          })}
        </Grid>

      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(MovieList);