const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//basic GET route for movieList
router.get('/', (req, res) => {
    console.log('in GET movies')
    const queryText= `SELECT * FROM movies ORDER BY id ASC;`;
    pool.query(queryText)
    .then((result) => {
      console.log('got movies', result.rows)
      res.send(result.rows);
    }) .catch( (error ) =>{
      console.log(error)
      alert('error getting movies');
      res.sendStatus(500);
    })
  });
module.exports = router;