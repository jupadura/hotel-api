//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

const express = require('express');
const app = express();

require('dotenv').config();

const routes = require('./api/routes');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

app.listen(process.env.API_PORT);

console.log(process.env.API_ENVIRONMENT + ' API server started on port ' + process.env.API_PORT);

module.exports = app;
