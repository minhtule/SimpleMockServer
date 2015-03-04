var express = require('express');
var app = express();

app.get('/success', function (req, res) {
  res.json(200, {});
});

app.get('/error', function (req, res) {
  res.json(404, {});
});

app.listen(8000);
