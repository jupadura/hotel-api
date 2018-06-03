//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const routes = require('./api/routes');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

app.listen(port);

console.log('API server started on: ' + port);

module.exports = app;
