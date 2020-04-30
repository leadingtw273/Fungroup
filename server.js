const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/article', function (req, res) {
  res.sendFile('./views/ContentManger/Article/index.html');
});

app.get('/advertising', function (req, res) {
  res.sendFile('./views/ContentManger/Advertising/index.html');
});

app.get('/notification', function (req, res) {
  res.sendFile('./views/ContentManger/Notification/index.html');
});

app.get('/terms', function (req, res) {
  res.sendFile('./views/ContentManger/Terms/index.html');
});

app.get('*', function (req, res) {
  res.redirect('/article');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
