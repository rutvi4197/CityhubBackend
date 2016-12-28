var express = require('express');
var router = express.Router();
var Ans=require('../models/book_model');

router.get('/',function(req,res,next){

   
        Ans.getticketcnt(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;