var express = require('express');
 var router = express.Router();
 var Offer=require('../models/offer_model');
 
router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      Offer.getOfferById(req.params.id,function(err,rows){

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

  Offer.getAllOffer(function(err,rows){

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

router.post('/',function(req,res,next){
 
Offer.addOffer(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 or 0
  }
  });
 });
 router.post('/:id',function(req,res,next){
 
Offer.deleteAllOffer(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 or 0
  }
  });
 });
 router.delete('/:id',function(req,res,next){
 
Offer.deleteOffer(req.params.id,function(err,count){
 
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
 router.put('/:id',function(req,res,next){
 
Offer.updateOffer(req.params.id,req.body,function(err,rows){
 
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