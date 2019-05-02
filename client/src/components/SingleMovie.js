import React, { Component } from "react";
import axios from "axios";

export default class SingleMovie extends Component {
  state = {
    movielist: []
  };

  getAllMovies = () => {
    const movieId = this.props.match.params.movieId;
    axios.get(`/api/movies/${movieId}`).then(res => {
      console.log(res.data);
      this.setState({
        movielist: res.data
      });
    });
  };

  componentDidMount() {
    this.getAllMovies();
  }
  render() {
    return (
      <div>
        <h1>{this.state.movielist.name}</h1>
        <img src={this.state.movielist.image} alt="movie-poster" />
        <h3>{this.state.movielist.rating}</h3>
        <h3>{this.state.movielist.releaseDate}</h3>
        <h3>{this.state.movielist.directors}</h3>
      </div>
    );
  }
}
