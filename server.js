var express     =   require('express');
var bodyParser  =   require("body-parser");
var mongoose    =   require("mongoose");
var jwt         =   require('jsonwebtoken');
var morgan      =   require('morgan');
var router      =   require('./routes/index');
var port        =   process.env.port || 8081;
var app         =   express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);
app.use(morgan('dev'));
app.listen(port);

mongoose.connect('mongodb://localhost:27017/mongooseLogin');
console.log('magic happens on port : ',+ port);