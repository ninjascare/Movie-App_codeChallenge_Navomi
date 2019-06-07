import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    /* jshint ignore:start */
    return (
      <div>
        <h1>Welcome to the movie generator! </h1>
        <h3>Press Go to continue</h3>
        <Link to="/movies">
          <button className="btn btn-success">Go!</button>
        </Link>
      </div>
    );
    /* jshint ignore:end */

  }
}
