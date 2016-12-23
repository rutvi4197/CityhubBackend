var express = require('express');
 var router = express.Router();
 var Like=require('../models/like_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        Like.getLikeById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    Like.getAllLike(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
});
router.put('/:id',function(req,res,next)
{
    Like.updateLike(req.body,req.params.id,function(err,rows)
    {
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
router.post('/',function(req,res,next)
{
    Like.addLike(req.body,function(err,rows)
    {
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