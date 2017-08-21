const express = require('express');
const router = express.Router();
const Location = require('../models/location');

// routes
router.get('/places', function(req, res, next) {
  Location.geoNear({
    type: 'Point',
    coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
  }, {
    maxDistance: req.query.max || 10000000,
    minDistance: req.query.min || 0,
    spherical: true
  }).then(function(locations){
    res.send(locations);
  });
});

router.get('/places/:location', function(req, res, next) {
  Location.findById({_id: req.params.location}).then(function(location){
    res.send(location);
  }).catch(next);
})

// add new location
router.post('/places', function(req, res, next) {
  Location.create(req.body).then(function(location){
    res.send(location);
  }).catch(next);
});

router.put('/places/:location', function(req, res, next){
  Location.findByIdAndUpdate({_id: req.params.location}).then(function(location){
    res.send(location);
  });
})

// delete location and return data in JSON
router.delete('/places/favorite/:favorite', function(req, res, next) {
  // console.log(req.params.favorite);
  Location.findByIdAndRemove({_id: req.params.favorite}).then(function(location){
    res.send(location);
  });
});

module.exports = router;
