const mongoose = require('mongoose');

const { Schema } = mongoose;

const quizSchema = new Schema({
  affinity: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  q1: Number,
  q2: { type: Boolean, default: false },
  q3: Number,
  q4: { type: String, enum: ['Work', 'Entertainment', 'Security'] },
  q5: { type: Boolean, default: false },
  q6: { type: Boolean, default: false },
  q7: { type: Boolean, default: false },
  q8: { type: Boolean, default: false },
  q9: Number,
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
