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
  locationName: {
    type: String
  },
  description: {
    type: String
  },
  zipCode: {
    type: String
  },
  province: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String,
  },
  address: {
    type: String
  },
  geometry: geoSchema
});

const Location = mongoose.model('location', locationSchema);

module.exports = Location;
