import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class MovieItem extends Component {
    componentDidMount() {
        console.log('in Movie Item')
    }
    // Renders the entire MovieItem on the DOM
    render() {
        return (
            <div>
                <Card>
                        <CardMedia
                        image={this.props.movie.poster}
                        />
                </Card>
                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} alt={this.props.movie.title} />
                <p>{this.props.movie.description}</p>
            </div> 
        );
    }
}

export default MovieItem;