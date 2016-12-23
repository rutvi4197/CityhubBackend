var express = require('express');
 var router = express.Router();
 var Payment=require('../models/payment_model');
 
router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      Payment.getPaymentById(req.params.id,function(err,rows){

        if(err)
        {
          res.json(err);
        }
        else{
          res.json(rows);
        }
      });
  }
  else{

  Payment.getAllPayment(function(err,rows){

    if(err)
    {
      res.json(err);
    }
    else{
      res.json(rows);
    }

  });

  }
});

 router.delete('/:id',function(req,res,next){
 
Payment.deletePayment(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });

 
router.post('/',function(req,res,next){
 
Payment.addPayment(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 or 0
  }
  });
 });
 
 module.exports=router;