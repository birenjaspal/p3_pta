var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var Users = require('../models/users.js');
var Events = require('../models/events.js');

//===============================================================================

router.get('/events', function(req, res){
   Events.find({}, function(err, getEvents){
       res.json(getEvents);
   });
});
