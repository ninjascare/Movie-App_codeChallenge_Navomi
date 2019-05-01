const Movies = require("../models/Movies");

const moviesController = {
  index: (req, res) => {
    Movies.find({}).then(movies => res.send(movies));
  },

  show: (req, res) => {
    const movieId = req.params.movieId;
    Movies.findById(movieId).then(movie => res.send(movie));
  },

  create: (req, res) => {
    Movies.create(req.body).then(newMovie => {
      res.send(newMovie);
    });
  },

  update: (req, res) => {
    const movieId = req.params.movieId;
    Movies.findByIdAndUpdate(movieId, req.body).then(updatedMovie => {
      updatedMovie.save();
      res.send(updatedMovie);
    });
  },

  delete: (req, res) => {
    const movieId = req.params.movieId;
    Movies.findByIdAndRemove(movieId).then(() => {
      res.send(200);
    });
  }
};

module.exports = moviesController;
