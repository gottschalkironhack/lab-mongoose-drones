const express = require('express');

const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
      if (err) {
        next(err);
      } else {
        console.log(drones);
        res.render('drones/index', { drones } );
      }
    });

});

router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {

  const newDroneInfo = {
   droneName  : req.body.droneName,
   propellers : req.body.propellers,
   maxSpeed   : req.body.maxSpeed
  }
  // connect through model to collection by instanciating my Drone model -> here naming newDrone
  const newDrone = new Drone( newDroneInfo );
  newDrone.save( ( err ) => {
    if(err){
      return next( err );
    }else{

        res.redirect('/drones');
    }

  });

});

module.exports = router;
