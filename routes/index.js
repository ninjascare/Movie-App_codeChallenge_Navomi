const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movie");

router.get('/api/movies', moviesController.index)
