var express = require('express');
var router = express.Router();
var que=require('../models/event_que_model');

router.get('/',function(req,res,next){

   
        que.quedetails(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;