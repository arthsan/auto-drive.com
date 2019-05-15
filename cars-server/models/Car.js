const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
  model: String, // model
  brand: String,
  transmission: String,
  category: String,
  rank: {
    id: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
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
  review: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  assessoies: {
    security: {
      abs: Boolean,
      parkSensor: Boolean,
      airBag: Boolean,
      fogLights: Boolean,
      backupCam: Boolean,
      alarm: Boolean,
    },
    confort: {
      airCondit: Boolean,
      heightSeat: Boolean,
      autoPilot: Boolean,
      leatherSeat: Boolean,
      sunRoof: Boolean,
      steeringWheel: Boolean,
      alloyWheel: Boolean,
      headlightSensor: Boolean,
    },
    entertainment: {
      radio: Boolean,
      usb: Boolean,
      gps: Boolean,
      boardPc: Boolean,
      steeringfunction: Boolean,
      bluetooth: Boolean,
    },
  },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
