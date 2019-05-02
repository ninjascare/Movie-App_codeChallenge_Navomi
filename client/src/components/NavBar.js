import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/movies">
              Movie List
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
