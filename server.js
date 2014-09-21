var express = require('express');
var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(__dirname + '/dist'));

// server.get('/', function(request, response) {
//   response.send('Hello World!');
// });

server.listen(server.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

// To be implemented...

// var connect = require('connect');
// var url = require('url');
// var proxy = require('proxy-middleware');

// var app = connect();
// app.use('/api', proxy(url.parse('https://example.com/endpoint')));

var url = require('url');
var proxy = require('proxy-middleware');
server.use('/api', proxy(url.parse('http://api-dev.taliflo.com/')));