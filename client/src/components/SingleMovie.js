import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import UpdateMovie from "./UpdateMovie";

export default class SingleMovie extends Component {
  state = {
    movielist: [],
    showUpdateForm: false
  };

  handleClick = () => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm
    });
  };

  getAllMovies = () => {
    const movieId = this.props.match.params.movieId;
    axios.get(`/api/movies/${movieId}`).then(res => {
      // console.log(res.data);
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
      <div className="container" style={{ backgroundColor: "#EBEBEB" }}>
        <h1 className="header">{this.state.movielist.name}</h1>

        <img
          className="posterImg"
          src={this.state.movielist.image}
          alt="movie-poster"
        />
        <div className="info">
          <label>Rating:</label>
          <h3>{this.state.movielist.rating}</h3>
          <hr />
          <label>Released Date:</label>
          <h3>{this.state.movielist.releaseDate}</h3>
          <hr />
          <label>Directors:</label>
          <h3>{this.state.movielist.directors}</h3>
          <hr />
          <button onClick={this.handleClick} className="commentButtonStyle">
            {this.state.showUpdateForm ? (
              <button className="btn btn-danger">Cancel</button>
            ) : (
              <button className="btn btn-warning">Edit Movie</button>
            )}
          </button>

          {this.state.showUpdateForm ? <UpdateMovie {...this.props} /> : null}
        </div>
      </div>
    );
  }
}
