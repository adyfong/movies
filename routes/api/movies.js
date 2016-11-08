const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, deleteMovie, updateMovie, getMovieTitle, getAllMoviesWithRatings } = require('../../models/movie');
const sendJSONresp = (req, res) => res.json(res.rows);
// handle all the routes

router.put('/:id', updateMovie, (req, res) => {
  res.json(res.movies)
});

router.get('/:id', getMovie, (req, res) => {
  res.json(res.movies)
});

router.delete('/:id', deleteMovie, (req, res) => {
  res.json(res.movies)
});
router.get('/:title', getMovieTitle, (req, res) => {
  res.json(res.movies)
});

router.get('/', getAllMovies, (req, res) => {
  res.json(res.movies)
});





// get all movies

// Get movies withrating BONUS

// Get single movie

module.exports = router;
