var express = require('express');

var app = express.createServer(express.logger());

var string = fs.readfilesync(index.html, encoding='utf8');

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
