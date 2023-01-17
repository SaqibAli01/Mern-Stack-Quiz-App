const express = require('express')
const app = express()
const cors = require("cors")

// api used krny sy phaly ye used lazmi kry gy
app.use(express.json());
app.use(cors())
//routes wali file ko get kia ha no 1;
// const product = require('./routes/productRoute');
//url:http://localhost:4000/api/v1/products;
const result = require('./routes/route');
app.use('/api', result);


module.exports = app
