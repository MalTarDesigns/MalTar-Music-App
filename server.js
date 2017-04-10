// MEAN Stack Reference: https://youtu.be/DQ9pZ2NKXRo

/************************
        MODULES
*************************/
// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // https://www.npmjs.com/package/cors
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

/************************
        CONNECTION
*************************/
// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', function(){
  console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', function(err){
  console.log('Database error --> ' + err);
});

/************************
        VARIABLES
*************************/
const app = express();

const users = require('./routes/users')

// Port Number
var port = 5000;

/************************
        MIDDLEWARE
*************************/
// CORS Middleware
app.use(cors()); // allows us to make a request to your api from a different domain name

// Body Parser Middleware
app.use(bodyParser.json()); // parses incoming resquest body

// Passport Middleware - https://www.npmjs.com/package/passport-jwt
app.use(passport.initialize()); // allows you to authenticate and protect certian routes with a token
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users); // connects to the users.js file in the routes folder

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public'))); // 

// Index Route
app.get('/', function (req, res) {
  res.send('Invalid Endpoint')
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html')); // All other routes get sent to the index.html
});

// Start Server
var server = app.listen(port, function(){
    console.log('Go to localhost ' + port + ' in your browser');
});





