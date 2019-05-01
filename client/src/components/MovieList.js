import React, { Component } from "react";
import axios from "axios";

export default class movieList extends Component {
  state = {
    movielist: []
  };

  getAllMovies = () => {
    axios.get("/api/movies").then(res => {
      console.log("culo");
      this.setState({
        movielist: res.data
      });
    });
  };

  componentDidMount = () => {
    this.getAllMovies();
  };

  render() {
    const collection = this.state.movielist.map(movie => (
      <div key={movie._id}>
        <img src={movie.image} alt="moviePoster" />
      </div>
    ));
    return (
      <div>
        {collection}
        <h1>Hi</h1>
      </div>
    );
  }
}
