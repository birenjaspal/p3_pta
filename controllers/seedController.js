var express = require('express');
var router = express.Router();
var eventsInfo = require('../models/events.js');

var newEventInfo = [{
    name: 'asdf',
    location: 'qwer',
    date: 07/15/1999,
    isAttending: 'qwrf'
}];

router.get('/', function(req, res) {
    eventsInfo.create(newEventInfo, function(err) {
        if (err) {
            console.log(err);
            res.send('Error seeding database');
        } else {
            console.log('SEED EXECUTED');
            // res.redirect(‘/events’)
        }
    });
});

module.exports = router;
