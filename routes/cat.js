var express = require('express');
 var router = express.Router();
 var Cat=require('../models/cat_models');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        Cat.getCatById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    Cat.getAllCat(function(err,rows){

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
    Cat.addCat(req.body,function(err,rows)
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

router.put('/:id',function(req,res,next)
{
    Cat.updateCat(req.params.id,req.body,function(err,rows)
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
router.delete('/:id',function(req,res,next)
{
    Cat.deleteCat(req.params.id,function(err,rows)
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