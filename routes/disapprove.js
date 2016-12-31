var express = require('express');
 var router = express.Router();
 var Event=require('../models/event_model');
 router.get('/',function(req,res,next){
 
Event.getDisEvent(function(err,rows){
 
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });

 
 module.exports=router;
