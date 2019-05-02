import React, { Component } from "react";
import axios from "axios";

export default class UpdateMovie extends Component {
  state = {
    movie: []
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    axios.get(`/api/movies/${movieId}`).then(res => {
      console.log(res.data);
      this.setState({
        movie: res.data
      });
    });
  }

  handleChange = e => {
    const updatedMovie = { ...this.state.movie };
    updatedMovie[e.target.name] = e.target.value;
    this.setState({
      movie: updatedMovie
    });
  };

  handleUpdate = movieId => {
    const updatedMovie = this.state.movie;
    axios.patch(`/api/movies/${movieId}`, updatedMovie).then(() => {
      console.log("Updated Movie");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={() => this.handleUpdate(this.state.movie._id)}>
          <div>
            <label htmlFor="name">Title:</label>
            <input
              onChange={this.handleChange}
              value={this.state.movie.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              onChange={this.handleChange}
              value={this.state.movie.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              onChange={this.handleChange}
              value={this.state.movie.rating}
              type="text"
              name="rating"
            />
          </div>
          <div>
            <label htmlFor="releaseDate">Release Date:</label>
            <input
              onChange={this.handleChange}
              value={this.state.movie.releaseDate}
              type="text"
              name="releaseDate"
            />
          </div>
          <div>
            <label htmlFor="directors">Directors:</label>
            <input
              onChange={this.handleChange}
              value={this.state.movie.directors}
              type="text"
              name="directors"
            />
            <br />
            <button className="btn btn-success" type="submit">
              Update!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
