var express = require('express');
var router = express.Router();
var paymentjoin=require('../models/payment_model');

router.get('/',function(req,res,next){
        paymentjoin.paymentdetails(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;