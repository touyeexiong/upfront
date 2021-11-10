const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/post', (req,res) => {
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
    }) .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;