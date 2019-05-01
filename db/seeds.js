require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const Movies = require("../models/Movies");

const dead = new Movies({
  name: "DeadPool",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/220px-Deadpool_%282016_poster%29.png",
  rating: "R",
  releaseDate: "February 12, 2016",
  directors: "Tim Miller"
});

const fight = new Movies({
  name: "Fight CLub",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  rating: "R",
  releaseDate: "September 21, 1999",
  directors: "David Fincher"
});

const avengers = new Movies({
  name: "Avengers: Endgame",
  image:
    "https://cnet3.cbsistatic.com/img/xLgPeuq6CW9A2N2V2kKmhMT6h2o=/1092x0/2019/03/14/dd4d8d9c-5f16-4f6b-a7d8-65a00d095c2c/avengers-endgame-poster-square-crop.jpg",
  rating: "PG-13",
  releaseDate: "April 24, 2019 ",
  directors: "Anthony Russo, Joe Russo"
});

const dragon = new Movies({
  name: "Dragon Ball Super: Broly",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/91BwS1BA22L._RI_.jpg",
  rating: "PG",
  releaseDate: "November 14, 2018 ",
  directors: "Tatsuya Nagamine"
});

Movies.remove({})
  .then(() => console.log("Successful Save YAY!!!!!"))
  .then(() => mongoose.connection.close());
