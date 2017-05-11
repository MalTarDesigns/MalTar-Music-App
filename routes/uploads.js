const express = require('express');
const router = express.Router();
const multer = require('multer');

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
router.post('/', function(req, res) {
    upload(req,res,function(err){
  console.log(req.file);
        if(err){
            return res.status(500).json({
                msg: 'Upload not saved!'
            });
        }else{
            return res.status(201).json({
                msg: 'Upload saved!'
            });
        }
    });
});

// Exports file so that other files can use this file
module.exports = router;
