const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  car: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
  comments: String,
  rate: Number,
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
