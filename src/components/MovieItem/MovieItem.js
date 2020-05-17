import React, { Component } from 'react';

class MovieItem extends Component {
    componentDidMount() {
        console.log('in Movie Item')
    }
    // Renders the entire MovieItem on the DOM
    render() {
        return (
            <div className="MovieItem">
                <img src={this.props.movie.poster} />
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}

export default MovieItem;