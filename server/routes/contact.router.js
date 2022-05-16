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
    RETURNING id
    `;
    pool.query(queryText, [postal_code, email])


        .then((result) => {
            let resID = result.rows[0];
            console.log(resID)
            res.send(resID)
        }).catch((err) => {
            console.log(err, "in contact router");
            res.sendStatus(500);
        })
})
module.exports = router;