import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movie List</Link>
        <Link to="/movies/:movieId">movie show</Link>
      </div>
    );
  }
}
