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
//const uploads = require('./routes/uploads');
const messages = require('./routes/messages');
const beats = require('./routes/beats');

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
app.use(bodyParser.json()); // parses incoming resquest body

// Passport Middleware - https://www.npmjs.com/package/passport-jwt
app.use(passport.initialize()); // allows you to authenticate and protect certian routes with a token
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users); // connects to the users.js file in the routes folder
//app.use('/uploads', uploads);
app.use('/api/v1', messages);
app.use('/api/v1', beats);

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


// Works on the server side but not in dev with angular ??? find out why and put this in another file ... wouldn't work in routes file ??
//File Upload
//********************* */
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
                storage: storage
            }).single('file');

/** API path that will upload the files */
app.post('/upload', function(req, res) {
    upload(req,res,function(err){
  console.log(req.file);
        if(err){
              res.json({error_code:1,err_desc:err});
              return;
        }
          res.json({error_code:0,err_desc:null});
    });
});






