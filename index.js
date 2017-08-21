const express = require('express');
const routes = require('./routes/api');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/tillusion', { useMongoClient: true });
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

// initialize routes
app.use(routes);

// error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({
    error: err.message
  });
});

// listen for requests
app.listen(process.env.port || 3000, function() {
  console.log('app is now listening...');
});