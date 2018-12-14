var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var public = path.join(__dirname, '../public');
var index = path.join(__dirname, '../public/index.html');

const PORT = 3002 || process.env.SERVER_PORT;

// viewed at http://localhost:PORT

app.use(express.static(public));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

app.get('/', function(req, res) {
  res.sendFile(index);
});

app.get('/favicon.ico', function(req, res) {
  res.sendFile(favicon);
});

app.get('*', function(req, res) {
  res.send('404 error: That page does not exists!');
});

app.listen(PORT, () => {
  console.log(`michaelbido.com server started at port ${PORT}`);
  console.log(`michaelbido.com server start time: ${new Date().toLocaleString()}`)
});