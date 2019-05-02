import React, { Component } from "react";

export default class AddNewMovie extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add new Movie
        </button>
        {/* </Link> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div>
                    <label>Title:</label>
                    <input
                      //     onChange={this.handleChange}
                      //     value={this.state.newUser.name}
                      type="text"
                      name="name"
                    />
                  </div>
                  <div>
                    <label>Image:</label>
                    <input
                      //     onChange={this.handleChange}
                      //     value={this.state.newMovie.image}
                      type="text"
                      name="image"
                    />
                  </div>
                  <div>
                    <label>Rating:</label>
                    <input
                      //     onChange={this.handleChange}
                      //     value={this.state.newMovie.rating}
                      type="text"
                      name="rating"
                    />
                  </div>
                  <div>
                    <label>Release Date:</label>
                    <input
                      //     onChange={this.handleChange}
                      //     value={this.state.newMovie.releaseDate}
                      type="text"
                      name="releaseDate"
                    />
                  </div>
                  <div>
                    <label>Directors:</label>
                    <input
                      //     onChange={this.handleChange}
                      //     value={this.state.newMovie.directors}
                      type="text"
                      name="directors"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
