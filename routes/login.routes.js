var express     =   require('express');
var router      =   express.Router();
var catControl  =   require("../controller/controllersLogin");




router.route('/login')
    .get(catControl.select)
    .post(catControl.create)
    .delete(catControl.remove)
    .put(catControl.update);

router.route('/check')
    .post(catControl.verify);

module.exports=router;