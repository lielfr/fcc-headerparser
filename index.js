var express = require('express');
var acceptLanguage = require('accept-language');
var app = express();

app.get('*', function(request, response) {
  console.log(request.headers);
  var toReturn = {};
  toReturn.ipaddress = request.connection.remoteAddress;
  toReturn.language = acceptLanguage.get(request.headers['accept-language']);
  toReturn.software = request.headers['user-agent'].split('(')[1].split(')')[0];
  response.send(JSON.stringify(toReturn));
});

app.listen(process.env.PORT, function() {
  console.log('Running on port '+process.env.PORT);
});
