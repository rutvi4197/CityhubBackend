var express = require('express');
var router = express.Router();
var test=require('../models/testimonial_model');

router.get('/',function(req,res,next){
        test.testdetails(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;