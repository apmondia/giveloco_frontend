var express = require('express');
var url = require('url');
var proxy = require('proxy-middleware');

var server = express();
var API_URL = process.env.API_URL || 'http://localhost:3000/';

server.set('port', (process.env.PORT || 5000));
//here we serve static assets
server.use(express.static(__dirname + '/dist'));
//here we proxy the api
server.use('/api', proxy(url.parse(API_URL)));
//here we configure a catch-all to serve the index
server.use(function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

server.listen(server.get('port'), function() {
  console.log("Node app is running at localhost:" + server.get('port'));
});

// Proxy settings for connecting to API
// process.env.API_URL is an environment variable set on Heroku
