var express = require('express');
var router = express.Router();
var venuejoin=require('../models/venue_model');

router.get('/',function(req,res,next){
        venuejoin.venuedetails(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;