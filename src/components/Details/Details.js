import React, { Component } from 'react';

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

export default Details;