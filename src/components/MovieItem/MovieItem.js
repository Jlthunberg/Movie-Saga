import React, { Component } from 'react';

class MovieItem extends Component {
    componentDidMount() {
        console.log('in Movie Item')
    }// end 

    handleDetail = () => {
        console.log(' in handle detail');
        // this.props.dispatch()
        // this.props.history.push('/details')
    }
    // Renders the entire MovieItem on the DOM
    render() {
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} alt={this.props.movie.title} />
                <p>{this.props.movie.description}</p>
                <button onClick={this.handleDetail}>Details</button>
            </div> 
        );
    }
}

export default MovieItem;