var express = require('express');
 var router = express.Router();
 var Testimonial=require('../models/testimonial_model');
 
router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      Testimonial.getTestimonialById(req.params.id,function(err,rows){

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

  Testimonial.getAllTestimonial(function(err,rows){

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
 
Testimonial.addTestimonial(req.body,function(err,count){
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
 
Testimonial.deleteTestimonial(req.params.id,function(err,count){
 
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
 module.exports=router;