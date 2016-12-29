var express = require('express');
var router = express.Router();
var walletjoin=require('../models/wallet_model');

router.get('/',function(req,res,next){
        walletjoin.walletdetails(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;