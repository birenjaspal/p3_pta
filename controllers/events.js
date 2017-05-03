var express = require('express');
var router = express.Router();
var Events = require('../models/events.js');

router.get('/', function(req, res){
    Events.find({}, function(err, foundEvent){
        res.json(foundEvent);
    });
});

router.post('/', function(req, res){
    Events.create(req.body, function(err, createdEvent){
        res.json(createdEvent);
    });
});

router.put('/:id', function(req, res){
    //                       find this guy
    //                                  update it to this
    //                                         callback gets updated model
    //                                                            callback function
    Events.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedEvent){
        res.json(updatedEvent);
    });
});

router.delete('/:id', function(req, res){
    Events.findByIdAndRemove(req.params.id, function(err, deletedEvent){
        res.json(deletedEvent);
    });
});

module.exports = router;
