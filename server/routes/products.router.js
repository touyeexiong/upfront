const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    let queryText = `
    SELECT * FROM "products";
    `
    pool.query(queryText)
    .then((result) => {
        console.log('we in products result', result.rows);
        res.send(result.rows)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);        
    })
})


module.exports = router;