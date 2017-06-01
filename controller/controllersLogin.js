var Product     =   require('../models/modelsLogin');
var jwt         =   require('jsonwebtoken');
var express     =   require('express');
var app         =   express();

exports.select=function (req,res) {
    Product.find(function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    });
}

exports.verify=function (req,res) {
    Product.findOne({name: req.body.name, password: req.body.password,}, function (err, user) {
        if (err)
            res.json(err);
        if(!user)
            res.send({message:'Authentication Failed, Either User Not Found Or Wrong Password.'})
        else
            //res.json({message:'Login Successfully'},user);
            res.json({message:'Login Successfully',user});
    });
}

exports.create=function (req,res) {
    var product = new Product(req.body);

    product.save(function (err) {
        if(err)
            res.send(err);
        res.json({message:'Insert Successfully'});
    });
}

exports.update=function (req,res) {
    Product.findById({_id:req.body._id},function (err,product) {
        if(err)
            res.send(err);
        product.name=req.body.name || product.name;
        product.password=req.body.password || product.password;

        product.save(function (err) {
            if(err)
                res.send(err);
            res.json({message:'Updated Successfully'});
        });
    });
}

exports.remove=function (req,res) {
    Product.remove({_id:req.body._id},function (err) {
        if(err)
            res.send(err);
        res.json({message:'Remove Successfully'});
    });
}