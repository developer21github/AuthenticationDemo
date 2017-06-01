var express     =   require('express');
var router      =   express.Router();

var login     =   require('./login.routes');

router.use('/authentication',login);

module.exports=router;