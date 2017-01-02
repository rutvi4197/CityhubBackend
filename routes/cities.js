var express = require('express');
 var router = express.Router();
 var City=require('../models/city_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        City.getCityById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    City.getAllCity(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
});
router.post('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        City.deleteAllCity(req.body,function(err,rows)
    {
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
        
    City.addCity(req.body,function(err,rows)
    {
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

router.put('/:id',function(req,res,next)
{
    City.updateCity(req.params.id,req.body,function(err,rows)
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
    City.deleteCity(req.params.id,function(err,rows)
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