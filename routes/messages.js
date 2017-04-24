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

// Get All Message
router.get('/messages', (req, res, next) => {
    Message.find(function(err, messages){
        if(err){
            res.send(err);
        }
        res.json(messages);
    });
});

// Delete Message
router.delete('/message/:id', (req, res, next) => {
    Message.remove({_id: req.params.id}, (err, result) => {
        if(err){
            return res.status(500).json({
                msg: 'Something went wrong!'
            });
        } else {
            return res.status(200).json({
                msg: 'Deleted Message!'
            });
        }
    });
});

// Exports file so that other files can use this file
module.exports = router;
