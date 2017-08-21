const express = require('express');
const router = express.Router();
const Location = require('../models/location');

// routes
router.get('/places', function(req, res, next) {
  console.log('GET requests');
  res.send({type: 'GET'});
});

// add new location
router.post('/places', function(req, res, next) {
  Location.create(req.body).then(function(location){
    res.send(location);
  }).catch(next);
});

// delete location and return data in JSON
router.delete('/places/favorite/:favorite', function(req, res, next) {
  // console.log(req.params.favorite);
  Location.findByIdAndRemove({_id: req.params.favorite}).then(function(location){
    res.send(location);
  });
});

module.exports = router;
