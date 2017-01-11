var express = require('express');
var router = express.Router();
var comment=require('../models/comment_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        comment.getCommentById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    comment.getAllComment(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
});
router.post('/',function(req,res,next)
{
    comment.addComment(req.body,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/:id',function(req,res,next)
{
    comment.deleteAllComment(req.body,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next)
{
    comment.deleteComment(req.params.id,function(err,rows)
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
 
 
router.put('/:id',function(req,res,next)
{
    comment.updateComment(req.params.id,req.body,function(err,rows)
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