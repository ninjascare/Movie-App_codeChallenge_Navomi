const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Movies = new Schema({
  name: String,
  image: String,
  rating: String,
  releaseDate: String,
  directors: String
});

module.exports = mongoose.model("Movie", Movies);