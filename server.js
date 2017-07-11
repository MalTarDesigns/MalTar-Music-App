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
const multer = require('multer');

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

const users = require('./routes/users');
const messages = require('./routes/messages');
const beats = require('./routes/beats');
const uploads = require('./routes/uploads');
const blogs = require('./routes/blogs');

// Port Number
var port = 5000;

/************************
        MIDDLEWARE
*************************/
// CORS Middleware
app.use(cors()); // allows us to make a request to your api from a different domain name

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Passport Middleware - https://www.npmjs.com/package/passport-jwt
app.use(passport.initialize()); // allows you to authenticate and protect certian routes with a token
app.use(passport.session());

require('./config/passport')(passport);

//Route Paths
app.use('/users', users); // connects to the users.js file in the routes folder
app.use('/api/v1', messages);
app.use('/api/v1', beats);
app.use('/upload', uploads);
app.use('/blogs', blogs);

// Index Route
app.get('/', function (req, res) {
  res.send('Invalid Endpoint')
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html')); // All other routes get sent to the index.html
});

// Start Server
var server = app.listen(port, () => {
    console.log('Go to localhost ' + port + ' in your browser');
});




