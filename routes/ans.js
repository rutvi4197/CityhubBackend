var express = require('express');
var router = express.Router();
var Ans=require('../models/ans_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        Ans.getAnsById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    Ans.getAllAns(function(err,rows){

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
    Ans.addAns(req.body,function(err,rows)
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
    Ans.deleteAns(req.params.id,function(err,rows)
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