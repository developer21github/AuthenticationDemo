var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');


var Schema      =   mongoose.Schema;
var loginSchema   =   new Schema({
    name:{type:String,required:true},
    password:{type:String,required:true}});
module.exports  =   mongoose.model('Login',loginSchema);
