const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  image: String,
  role: { type: String, enum: ['ADMIN', 'GUEST'], default: 'GUEST' },
  car: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  quiz: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
