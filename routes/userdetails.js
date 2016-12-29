var express = require('express');
var router = express.Router();
var userjoin=require('../models/user_model');

router.get('/',function(req,res,next){
        userjoin.userdetails(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;