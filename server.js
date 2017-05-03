var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/pta';
port = process.env.PORT || 3000;

app.use(bodyParser.json());

var seedController = require('./controllers/seedController');
app.use('/seed', seedController);

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("public"));

var ptaController = require('./controllers/pta.js');
app.use('/pta', ptaController);

var eventsController = require('./controllers/events.js');
app.use('/events', ptaController);





mongoose.connect(mongoUri);

mongoose.connection.once('open', function(){
    console.log('connected to mongo');
});

app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
