const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3001;

const app = express();
const bodyParser = require('body-parser');

const receivePushRouter1 = require('./routes/receivePushRouter1');
const receivePushRouter2 = require('./routes/receivePushRouter2');


app.use('/receivePush1', receivePushRouter1);
app.use('/receivePush2', receivePushRouter2);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Receive Push on Server running at http://${hostname}:${port}/`);
});