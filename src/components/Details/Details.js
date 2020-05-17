import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  // Renders the entire Details on the DOM
  render() {
    return (
      <div className="Details">
        <p>Details</p>
        <button>Back to List</button>
        <button>Edit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(Details);