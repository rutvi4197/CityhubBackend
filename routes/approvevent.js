var express = require('express');
 var router = express.Router();
 var Event=require('../models/event_model');
 router.get('/',function(req,res,next){
 
Event.getEvent(function(err,rows){
 
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

  router.put('/:id',function(req,res,next){
 
Event.approvevent(req.params.id,req.body,function(err,rows){
 
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
  router.post('/:id',function(req,res,next){
 
Event.updateAllEvent(req.body,function(err,rows){
 
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