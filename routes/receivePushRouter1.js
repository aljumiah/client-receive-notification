const express = require('express');
const bodyParser = require('body-parser');

const receivePushRouter1 = express.Router();


receivePushRouter1.use(bodyParser.json());

receivePushRouter1.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})

.post((req, res, next) => {
    res.end('received Push (receivePushRouter1) with body: ' + JSON.stringify(req.body) );
    console.log('POST: received Push (receivePushRouter1) with body: ' + JSON.stringify(req.body))
})


module.exports = receivePushRouter1;