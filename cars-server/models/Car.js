const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
  model: String, // model
  brand: String,
  transmission: { type: String, enum: ['Automatic', 'Manual'] },
  category: String,
  imageUrl: String,
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
      abs: { type: Boolean, default: false },
      parkSensor: { type: Boolean, default: false },
      airBag: { type: Boolean, default: false },
      fogLights: { type: Boolean, default: false },
      backupCam: { type: Boolean, default: false },
      alarm: { type: Boolean, default: false },
    },
    comfort: {
      airCondit: { type: Boolean, default: false },
      heightSeat: { type: Boolean, default: false },
      autoPilot: { type: Boolean, default: false },
      leatherSeat: { type: Boolean, default: false },
      sunRoof: { type: Boolean, default: false },
      steeringWheelAdjust: { type: Boolean, default: false },
      alloyWheel: { type: Boolean, default: false },
      headlightSensor: { type: Boolean, default: false },
    },
    entertainment: {
      radio: { type: Boolean, default: false },
      usb: { type: Boolean, default: false },
      gps: { type: Boolean, default: false },
      boardPc: { type: Boolean, default: false },
      steeringMultiFunction: { type: Boolean, default: false },
      bluetooth: { type: Boolean, default: false },
    },
  },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
