// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();
// var path = require('path');

// app.use(logfmt.requestLogger());

// app.get('/', function(req, res) {
//   res.send('./dist');
// });

// app.configure(function(){
//     app.use(express.bodyParser());
//     app.use(express.static(path.join(__dirname, './dist')));
// });

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
//   console.log("Server started on " + port);
// });

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  // res.send('./dist');
  express.static(__dirname + './dist');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});