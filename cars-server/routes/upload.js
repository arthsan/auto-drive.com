// const mongoose = require('mongoose');
const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');


const router = express.Router();

const Quiz = require('../models/Quiz');

const Upload = require('../models/Car');

// GET ROUTE
router.get('/api/cars', (req, res, next) => {
  Upload.find()
    .then((uploadFromDB) => {
      res.status(200).json(uploadFromDB);
    })
    .catch(err => next(err));
});

// POST route => to create a new project
router.post('/api/cars/create', (req, res, next) => {
  const newCar = new Upload(
    {
      imageUrl: req.body.imageUrl,
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
          parkSensor: false,
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
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});


// QUIZ FORM
router.get('/api/quiz/:id', (req, res, next) => {
  console.log(req.params.id);
  Quiz.findOne({ user: req.params.id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/api/quiz/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  console.log('dasdkjalkjsd', req.body);
  const {
    q1, q2, q3, q4, q5, q6, q7, q8, q9,
  } = req.body.quizInfo;

  Quiz.findOneAndUpdate({ user: req.params.id }, {
    $set: {
      q1, q2, q3, q4, q5, q6, q7, q8, q9,
    },
  })
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/api/quizform', (req, res, next) => {
  const newQuiz = new Quiz(
    {
      // affinity: req.body,
      user: req.body.user,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      q7: req.body.q7,
      q8: req.body.q8,
      q9: req.body.q9,
    },
  );

  newQuiz.save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.patch('/api/user-update/:id', (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.id }, { quiz: req.body.quizId })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
