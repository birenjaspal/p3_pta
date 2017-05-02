var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var Users = require('../models/users.js');
var Events = require('../models/events.js');

//insert routes here

//GET ROUTE=================================================================================
router.get('/', function(req, res){
    Events.find({}, function(err, foundEvents){
        res.json(foundEvents);
    });
});

//POST ROUTE=================================================================================
router.post('/', function(req, res){
    Events.create(req.body, function(err, createdEvent){
        res.json(createdEvent);
    });
});


//DELETE ROUTE ==============================================================================
router.delete('/:id', function(req, res){
    Events.findByIdAndRemove(req.params.id, function(err, deletedEvent){
        res.json(deletedEvent);
    });
});


//UPDATE ROUTE================================================================================
router.put('/:id', function(req, res){
    Events.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedEvent){
        res.json(updatedEvent);
    });
});


module.exports = router;
