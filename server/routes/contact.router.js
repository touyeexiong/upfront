const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/post', (req, res) => {
    console.log(req.body);

    const postal_code = req.body.postal;
    const email = req.body.email;

    const queryText =
        `INSERT INTO "contact_information"
    ("postal_code", "email")
    VALUES ($1, $2)
    `;
    pool.query(queryText, [postal_code, email])
        .then((result) => {
            res.sendStatus(200)            
        }).catch((err) => {
            console.log(err, "in contact router");
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    console.log('we getting things', req.params);
    let email = req.params;
    let queryText =
        `
    SELECT *
    FROM "contact"
    WHERE "email" = $1;
    `;
    pool.query(queryText, [email])
        .then((result) => {
            res.send(result.rows)
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    
})

module.exports = router;