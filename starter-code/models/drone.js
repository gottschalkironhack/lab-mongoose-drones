const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATING THE DRONE SCHEMA / BLUEPRINT
const droneSchema = new Schema({
  //Schema
  droneName : String,
  propellers: Number,
  maxSpeed: Number

});
//CREATING THE DRONE MODEL // MY COLLECTION --> access /show content of this collection through Drone.find()
const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
