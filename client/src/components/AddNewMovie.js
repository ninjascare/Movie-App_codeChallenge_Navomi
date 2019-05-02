import React, { Component } from "react";
import axios from "axios";

export default class AddNewMovie extends Component {
  state = {
    newMovie: {
      name: "",
      image: "",
      rating: "",
      releaseDate: "",
      directors: ""
    }
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const updatedNewMovie = { ...this.state.newMovie };
    updatedNewMovie[e.target.name] = e.target.value;
    this.setState({ newMovie: updatedNewMovie });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/movies", this.state.newMovie).then(res => {
      this.props.history.go(`/movies`);
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add new Movie
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="name">Title:</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newMovie.name}
                      type="text"
                      name="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="image">Image:</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newMovie.image}
                      type="text"
                      name="image"
                    />
                  </div>
                  <div>
                    <label htmlFor="rating">Rating:</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newMovie.rating}
                      type="text"
                      name="rating"
                    />
                  </div>
                  <div>
                    <label htmlFor="releaseDate">Release Date:</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newMovie.releaseDate}
                      type="text"
                      name="releaseDate"
                    />
                  </div>
                  <div>
                    <label htmlFor="directors">Directors:</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newMovie.directors}
                      type="text"
                      name="directors"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add new Movie
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
