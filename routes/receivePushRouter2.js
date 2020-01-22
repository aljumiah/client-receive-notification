const express = require('express');
const bodyParser = require('body-parser');

const receivePushRouter2 = express.Router();


receivePushRouter2.use(bodyParser.json());

receivePushRouter2.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})

.post((req, res, next) => {
    res.end('received Push (receivePushRouter2) with body: ' + JSON.stringify(req.body) );
    console.log('POST: received Push (receivePushRouter2) with body: ' + JSON.stringify(req.body))
})


module.exports = receivePushRouter2;