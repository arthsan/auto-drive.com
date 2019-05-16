// const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();


const Upload = require('../models/Car');


// POST route => to create a new project
router.post('/upload', (req, res, next)=> {
  const newCar = new Upload(
    {
      imageUrl: '',
      model: req.body.model,
      brand: req.body.brand,
      transmission: req.body.transmission,
      category: req.body.category,
      rank: {
        rating: req.body.rating,
        year: req.body.year,
        price: req.body.price,
        ipva: req.body.ipva,
        insurance: req.body.insurance,
        horsePower: req.body.horsePower,
        fuelCost: req.body.fuelCost,
        speed: req.body.speed,
        depreciation: req.body.depreciation,
        maintenance: req.body.maintenance,
        warranty: req.body.warranty,
        trunk: req.body.trunk,
      },
      review: req.body.review,
      accessories: {
        security: {
          abs: req.body.abs,
          parkSensor: req.body.parkSensor,
          airBag: req.body.airBag,
          fogLights: req.body.fogLights,
          backupCam: req.body.backupCam,
          alarm: req.body.alarm,
        },
        comfort: {
          airCondit: req.body.airCondit,
          heightSeat: req.body.heightSeat,
          autoPilot: req.body.autoPilot,
          leatherSeat: req.body.leatherSeat,
          sunRoof: req.body.sunRoof,
          steeringWheelAdjust: req.body.steeringWheelAdjust,
          alloyWheel: req.body.alloyWheel,
          headlightSensor: req.body.headlightSensor,
        },
        entertainment: {
          radio: req.body.radio,
          usb: req.body.usb,
          gps: req.body.gps,
          boardPc: req.body.boardPc,
          steeringMultiFunction: req.body.steeringMultiFunction,
          bluetooth: req.body.bluetooth,
        },
      },
    },
  );

  newCar.save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
