import React, { Component } from 'react';
import { Card, CardContent, CardActionArea, Typography, Grid, Button } from '@material-ui/core';

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
        const poster = this.props.movie.poster;
        const title = this.props.movie.title;
        const description = this.props.movie.description;
        let singlePoster = <img src={poster} alt={title} />
        return (
            <div className="margin">
                <Grid item>
                    <Card className="postercard">
                        <CardActionArea>
                            <CardContent>
                                <div className="postersize">
                                    {singlePoster}
                                </div>
                                <Typography>
                                    <div className="font">
                                        <h3>{this.props.movie.title}</h3>
                                        {description}
                                        <Button variant="outlined" color="primary" size="small" onClick={this.handleDetail}>Details</Button>
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </div> 
        );
    }
}

export default MovieItem;

{/* <Grid  container direction="column" justify="center" alignItems="flex-start">
<h2>{this.props.movie.title}</h2>
<img src={this.props.movie.poster} alt={this.props.movie.title} />
<p>{this.props.movie.description}</p>
<button onClick={this.handleDetail}>Details</button>
</Grid> */}