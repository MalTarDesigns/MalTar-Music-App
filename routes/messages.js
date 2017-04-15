const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Save Message
router.post('/message', (req, res, next) => {
    var message = new Message({
        content: req.body.content
    });
    message.save((err, result) => {
        if(err){
            return res.status(500).json({
                msg: 'Data not saved!'
            });
        }else{
            return res.status(201).json({
                msg: 'Data saved!'
            });
        }
    });
});

// Exports file so that other files can use this file
module.exports = router;
