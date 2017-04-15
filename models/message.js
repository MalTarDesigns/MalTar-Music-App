const mongoose = require('mongoose');

// Message Schema - https://www.youtube.com/watch?v=XxNZMI5V3t4
const MessageSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);