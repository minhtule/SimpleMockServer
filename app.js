var express = require('express');
var app = express();

app.get('/success', function (req, res) {
  res.status(200).json({});
});

app.get('/error', function (req, res) {
  res.status(404).json({});
});

app.listen(8000);
