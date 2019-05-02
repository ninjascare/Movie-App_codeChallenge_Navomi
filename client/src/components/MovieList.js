import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import AddNewMovie from "./AddNewMovie";

export default class movieList extends Component {
  state = {
    movielist: []
  };

  handleDelete = movieId => {
    axios.delete(`/api/movies/${movieId}`).then(() => {
      const deletedMovie = [...this.state.movielist];
      const filtered = deletedMovie.filter(movie => {
        return movie._id !== movieId;
      });
      this.setState({
        movielist: filtered
      });
    });
  };

  getAllMovies = () => {
    axios.get("/api/movies").then(res => {
      console.log(res.data);
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
      <div key={movie._id} className="movieData">
        <Link to={`/movies/${movie._id}`}>
          <img className="posters" src={movie.image} alt="moviePoster" />
        </Link>
        <button onClick={() => this.handleDelete(movie._id)}>
          Delete Movie
        </button>
      </div>
    ));

    return (
      <div className="con">
        <h1>Movielist</h1>
        <div className="hs">{collection}</div>
        <br />
        <AddNewMovie {...this.props} />
      </div>
    );
  }
}
