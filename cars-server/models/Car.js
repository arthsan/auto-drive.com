const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
  model: String, // model
  brand: String,
  transmission: { type: String, enum: ['Automatic', 'Manual'] },
  category: String,
  image: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
  rank: {
    rating: Number,
    year: Number,
    price: Number,
    ipva: Number,
    insurance: Number,
    horsePower: Number,
    fuelCost: Number,
    speed: Number,
    depreciation: Number,
    maintenance: Number,
    warranty: Number,
    trunk: Number,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  accessories: {
    security: {
      abs: Boolean,
      parkSensor: Boolean,
      airBag: Boolean,
      fogLights: Boolean,
      backupCam: Boolean,
      alarm: Boolean,
    },
    comfort: {
      airCondit: Boolean,
      heightSeat: Boolean,
      autoPilot: Boolean,
      leatherSeat: Boolean,
      sunRoof: Boolean,
      steeringWheelAdjust: Boolean,
      alloyWheel: Boolean,
      headlightSensor: Boolean,
    },
    entertainment: {
      radio: Boolean,
      usb: Boolean,
      gps: Boolean,
      boardPc: Boolean,
      steeringMultiFunction: Boolean,
      bluetooth: Boolean,
    },
  },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
