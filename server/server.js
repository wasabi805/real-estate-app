require('dotenv').config()
const express = require('express');
const app = express();
const Zillow = require('node-zillow');

const zillow = require('./routes/api/zillow');

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/api/zillow', zillow );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at port:${PORT}`)
});