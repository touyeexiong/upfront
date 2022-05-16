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
    let id = req.body.id
    let service = req.body.service
    let service_description = req.body.service_description
    let service_price = req.body.price;
    let service_package = req.body.package;
    let queryText = `
    UPDATE "services"
	SET "service_name" = $1,
	"service_description" = $2,
	"service_price" = $3,
    "service_package" = $4
	FROM "appointments"
	WHERE "appointments".id = $5 AND "appointments".service_id = "services".id
	AND "service_name" IS NULL
	;
    `;
    pool.query(queryText, [service, service_description, service_price, service_package, id])
        .then((result) => {
            console.log('we in update log for services', id);
            res.send(req.body);
        }).catch((err) => {
            console.log(err, 'in update router');
            res.sendStatus(err)
        })
})

module.exports = router;