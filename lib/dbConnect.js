const pgp = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS
};

const db = pgp(config);


// function getAllMovies(req, res, next) {
//    db.query('SELECT * FROM movies;')
//      .then((tasks)  => {
//       res.rows =tasks;
//       next();
//   })
//     .catch(error => next(error));
//  },

// //CREATE
// function addTask(req, res, next) {
//     db.one(`
//       INSERT INTO task (name, description)
//       VALUES ($/name/, $/desc/)
//       RETURNING *;
//       `, req.body)
//      .then((task) => {
//       res.rows = task;
//       next();
//      })
//  },

//  deleteTask(req, res, next) {
//    req.body.tID = Number.parseInt(req.params.taskID);
//    db.none(`
//     DELETE FROM task
//     WHERE id = $1
//     `, [req.body.tID])
//     .then(() => {
//       next();
//     })
//     .catch(error => next(error));
//    },








module.exports = db;
