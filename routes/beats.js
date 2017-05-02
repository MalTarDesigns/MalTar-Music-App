const express = require('express');
const router = express.Router();
const Beat = require('../models/beat');

// Save beat
router.post('/beat', (req, res, next) => {
     var beat = new Beat({
        title: req.body.title,
        producer: req.body.producer,
        artworkUrl: req.body.artworkUrl,
        genre: req.body.genre,
        price: req.body.price,
        url: req.body.url,
        likes: req.body.likes
    });
    beat.save((err, result) => {
        if(err){
            return res.status(500).json({
                msg: 'Beat not saved!'
            });
        }else{
            return res.status(201).json({
                msg: 'Beat saved!'
            });
        }
    });
});

// Get All beats
router.get('/beats', (req, res, next) => {
      Beat.find(function(err, messages){
        if(err){
            res.send(err);
        }
        res.json(messages);
    });
});

// Delete beat
router.delete('/beat/:id', (req, res, next) => {
    Beat.remove({_id: req.params.id}, (err, result) => {
        if(err){
            return res.status(500).json({
                msg: 'Something went wrong!'
            });
        } else {
            return res.status(200).json({
                msg: 'Deleted Beat!'
            });
        }
    });
});

// Exports file so that other files can use this file
module.exports = router;
