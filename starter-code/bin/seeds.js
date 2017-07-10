// Iteration #1
const mongoose = require('mongoose');

const Drone = require('../models/drone');
mongoose.connect('mongodb://localhost/drones-dev');


const myDrones = [
  { droneName : "zeus",
    propellers : 5,
    maxSpeed: 80
  },
  { droneName : "hera",
    propellers : 4,
    maxSpeed : 60
  },
  { droneName : "apollo",
    propellers : 3,
    maxSpeed : 100
  }
];

Drone.create(myDrones, (err, docs) => {
  if(err){
    throw err;
  }
  docs.forEach( ( drone ) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();

});
