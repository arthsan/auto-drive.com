const mongoose = require('mongoose');

const { Schema } = mongoose;

const quizSchema = new Schema({
  affinity: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  q1: { type: Number, default: 2000000 },
  q2: { type: Boolean, default: false },
  q3: { type: Number, default: 3000 },
  q4: { type: String, enum: ['Work', 'Entertainment', 'Security'] },
  q5: { type: Boolean, default: false },
  q6: { type: Boolean, default: false },
  q7: { type: Boolean, default: false },
  q8: { type: Boolean, default: false },
  q9: { type: Number, default: 50 },
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
