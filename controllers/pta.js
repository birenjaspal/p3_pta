var express = require('express');
var router = express.Router();
<<<<<<< HEAD
// var bcrypt = require('bcrypt');
var Users = require('../models/users.js');
// var session = require('express-session');

=======
var Events = require('../models/events.js')
>>>>>>> 8108fa12619ed424550cdca4dee9ea774bcf646f
//insert routes here

//GET ROUTE=================================================================================
router.get('/events', function(req, res){
    Events.find({}, function(err, foundEvents){
        res.json(foundEvents);
    });
});

//POST ROUTE=================================================================================
router.post('/events', function(req, res){
    Events.create(req.body, function(err, createdEvent){
        res.json(createdEvent);
    });
});


//DELETE ROUTE ==============================================================================
router.delete('/events/:id', function(req, res){
    Events.findByIdAndRemove(req.params.id, function(err, deletedEvent){
        res.json(deletedEvent);
    });
});


//UPDATE ROUTE================================================================================
router.put('/events/:id', function(req, res){
    Events.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedEvent){
        res.json(updatedEvent);
    });
});


module.exports = router;
