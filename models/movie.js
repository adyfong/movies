const db = require('../lib/dbConnect');

// Your middleware MUST allow limit and offset to be sent
// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;


// implement get all movies
function getAllMovies(req, res, next) {
   db.query('SELECT * FROM movies;')
     .then((movies)  => {
      res.movies = movies;
      next();
  })
    .catch(error => next(error));
 }


function getMovie(req, res, next) {
// implement get single movie
  let idname = parseInt(req.params.id);

  db.query('SELECT * FROM movies WHERE id=$1', idname)
   .then((movies)  => {
   res.movies =movies;
   next();
   })
   .catch(error => next(error));
}


function getMovieTitle(req, res, next) {
// implement get single movie
  let idtitle = (req.params.title);

  db.query('SELECT * FROM movies WHERE title=$1', idtitle)
   .then((movies)  => {
   res.movies =movies;
   next();
   })
   .catch(error => next(error));
}


function updateMovie(req, res, next) {
// implement update

req.body.mid = Number.parseInt(req.params.id);

db.none(`UPDATE movies SET title=$1 WHERE id=$2`, [req.body.title, req.body.mid])
.then(function (){
  res.status(200)
  .json({
      status: 'success',
      message: 'Updated Movie'
  });
 })
   .catch(error => next(error));
}

function deleteMovie(req, res, next) {
// implement delete

req.body.id = Number.parseInt(req.params.id);

  db.none(`
    DELETE FROM movies
    WHERE id = $1
    `, [req.body.id])
    .then(function() {
      res.status(200)
      .json({
      status: 'success',
      message: 'Deleted Movie'
      })
    })
    .catch(error => next(error));

}







// BONUS
function getAllMoviesWithRatings(req, res, next) {

}

module.exports = {
  getAllMovies,
  getMovie,
  getMovieTitle,
  updateMovie,
  deleteMovie,
  getAllMoviesWithRatings
};
