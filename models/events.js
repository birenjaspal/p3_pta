var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    name: String,
    location: String,
    date: String,
    isAttending: String
});

var Events = mongoose.model('Event', eventSchema);

module.exports = Events;
