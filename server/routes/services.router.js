const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/type/post', (req, res) => {
    console.log('we in type post', req.body);
    let id = req.body.id;
    let type = req.body.type;
    let queryText = `
	WITH first_insert AS (
		INSERT INTO "services" 
		("property_type")
		VALUES ($1)
		RETURNING id
		)
		INSERT INTO "appointments"
		("contact_id", "service_id")
		VALUES ($2, (SELECT id from first_insert)
		)
        RETURNING id
		;
        `;
        pool.query(queryText, [type, id])
        .then((result) => {
            console.log('we in post log', result.rows[0]);
            let appID = result.rows[0];
            res.send(appID)
        }).catch((err) => {
            console.log(err, "in post router");
            
            res.sendStatus(500);
        })
})

router.put('/type/update', (req, res) => {
    console.log('we in services router', req.body);
    
})

module.exports = router;