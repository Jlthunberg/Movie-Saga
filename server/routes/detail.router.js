const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('in detail router:', req.body);
    let id = req.params.id;
    let queryText = `SELECT * FROM "movies"
    JOIN "movie_genre" ON "movies".id = "movie_genre".movies_id
    JOIN "genres" ON "movie_genre".genres_id = "genres".id WHERE "id" = $1;`;
    
    pool.query(queryText, [id])
        .then(result => {
            res.send(result.rows[0]);
        })
        .catch(error => {
            console.log('error getting that movie', error)
            res.sendStatus(500);
        })
})

module.exports = router;
