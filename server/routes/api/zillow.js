const express = require('express');
const router = express.Router();
const unirest = require("unirest");
const dummyRealtorData = require('../../test-JSON/test.data')

const realtor = unirest("GET", "https://realtor.p.rapidapi.com/properties/v2/list-for-sale");

router.get('/test' , (req,res )=> res.json({msg: 'zillow route works'}));

router.get('/first-call', ( req, res ) =>{
    realtor.query({
        "sort": "relevance",
        "city": "New York City",
        "limit": "200",
        "offset": "0",
        "state_code": "NY"
    });

    realtor.headers({
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "9e73432817mshfcefbb2378b9a57p13073ejsn69cfc0b56830",
        "useQueryString": true
    });


    realtor.end(function (x) {
        if (x.error) throw new Error(x.error);
        return res.json(x.body)
    });
});

router.get('/dummyRealtorData' , ( req, res) => {
   return res.json(dummyRealtorData)
});

module.exports = router;