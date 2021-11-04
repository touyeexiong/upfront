const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get(`https://sandbox.dev.clover.com/v3/merchants/${process.env.SMOKIN_MERCH_ID}/items?access_token=${process.env.SMOKIN_API_TOKEN}`)
    .then((response) => {        
        res.send(response.data.elements)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;