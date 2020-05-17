import React, { Component } from 'react';
import { Card, CardContent, CardActionArea, Typography, Grid, Button} from '@material-ui/core';
import './MovieItem.css';
import Details from '../Details/Details';
import {connect} from 'react-redux';

class MovieItem extends Component {
    componentDidMount() {
        // console.log('in Movie Item')
    }// end 

    handleDetail = (id) => {
        console.log(' in handle detail', this.props.movie.id);
        this.props.dispatch({type: 'GET_DETAIL', payload: this.props.movie});
        // this.props.history.push('/details')
    }
    // Renders the entire MovieItem on the DOM
    render() {
        const poster = this.props.movie.poster;
        const title = this.props.movie.title;
        const description = this.props.movie.description;
        let singlePoster = <img src={poster} alt={title} onClick={() => this.handleDetail(this.props.movie)}/>
        return (
            <div className="postercard">
                <Grid>
                    <Card variant="outlined">
                        <CardActionArea>
                        <div onClick={this.handleDetail}>
                            <CardContent>
                                <div className="postersize">
                                    {singlePoster}
                                </div>
                                <Typography>
                                    <div className="cardtext">
                                        <h3>{this.props.movie.title}</h3>
                                        {description}
                                        </div>
                                </Typography>
                                {/* <div>
                                <Button variant="outlined" size="small" onClick={this.handleDetail}>Details</Button>
                                </div> */}
                            </CardContent>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Details />
            </div> 
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(MovieItem);

{/* <Grid  container direction="column" justify="center" alignItems="flex-start">
<h2>{this.props.movie.title}</h2>
<img src={this.props.movie.poster} alt={this.props.movie.title} />
<p>{this.props.movie.description}</p>
<button onClick={this.handleDetail}>Details</button>
</Grid> */}