const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movie");

router.get("/api/movies", moviesController.index);
router.post("/api/movies", moviesController.create);
router.get("/api/movies/:movieId", moviesController.show);
router.patch("/api/movies/:movieId", moviesController.update);
router.delete("/api/movies/:movieId", moviesController.delete);

module.exports = router;
