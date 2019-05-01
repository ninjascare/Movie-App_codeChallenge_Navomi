const Movies = require("../models/Movies");

const moviesController = {
  index: (req, res) => {
    Movies.find({}).then(movies => res.send(movies));
  },

  show: (req, res) => {
    const movieId = req.params.movieId;
    Movies.findById(movieId).then(movie => res.send(movie));
  }
};

module.exports = moviesController;
