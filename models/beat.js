const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Beat Schema
const BeatSchema = mongoose.Schema({
    title: String,
    producer: String,
    artworkUrl: String,
    genre: String,
    price: Number,
    url: String,
    likes: Number
});

const Beat = module.exports = mongoose.model('Beat', BeatSchema);