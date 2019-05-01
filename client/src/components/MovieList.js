import React, { Component } from "react";
import axios from "axios";

class componentName extends Component {
  state = {
    movielist: []
  };

  getAllMovies = () => {
    axios.get("/api/movies").then(res => {
      console.log(res.data);
    });
  };

  componentDidMount = () => {
    this.getAllMovies();
  };

  render() {
    return (
      <div>
        <h1>Hello from movielist</h1>
      </div>
    );
  }
}

export default componentName;
