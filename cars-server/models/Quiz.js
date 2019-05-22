const mongoose = require('mongoose');

const { Schema } = mongoose;

const quizSchema = new Schema({
  affinity: Number,
  q1: Number,
  q2: { type: Boolean, default: false },
  q3: Number,
  q4: { type: Boolean, default: false },
  q5: { type: Boolean, default: false },
  q6: { type: Boolean, default: false },
  q7: { type: Boolean, default: false },
  q8: { type: Boolean, default: false },
  q9: { type: Boolean, default: false },
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
