const express = require('express');
const router = express.Router();
const multer = require('multer');
const Upload = require('../models/upload');

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.loadFromPath('./config.json');
aws.config.update({
    signatureVersion: 'v4'
})

var s3 = new aws.S3({})


// var storage = multer.diskStorage({ //multers disk storage settings
//     destination: function (req, file, cb) {
//         cb(null, './upload');
//     },
//     filename: function (req, file, cb) {
//         var datetimestamp = Date.now();
//         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
//     }
// });

// var upload = multer({ //multer settings
//                 storage: storage
//             }).single('file');

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'maltarmusic',
    //acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
   key: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
  })
});

router.post('/', upload.any(), function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
  console.log(req.files);
})

/** API path that will upload the files */
// router.post('/', function(req, res) {
//     upload(req,res,function(err){
//     console.log(req.file);
//         if(err){
//             return res.status(500).json({
//                 msg: 'Upload not saved!'
//             });
//         }else{
//             return res.status(201).json({
//                 msg: 'Upload saved!'
//             });
//         }
//     });
// });

// Exports file so that other files can use this file
module.exports = router;
