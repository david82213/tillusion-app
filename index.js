const express = require('express');
const routes = require('./routes/api');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/tillusion', { useMongoClient: true }, function(err, db){
  if (err) {
    console.log('Unable to connect to the server. Please start the server. Error:', err);
  } else {
    console.log('Connected to Server successfully!');
  }
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use(routes);

// Website you wish to allow to connect
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
});

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
