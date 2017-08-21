const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const geoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

// create location schema and model
const locationSchema = new Schema({
  name: {
    type: String
  },
  geometry: geoSchema
});

const Location = mongoose.model('location', locationSchema);

module.exports = Location;
