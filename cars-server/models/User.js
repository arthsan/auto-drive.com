const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  image: String,
  car: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
