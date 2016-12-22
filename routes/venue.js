var express = require('express');
 var router = express.Router();
 var Venue=require('../models/venue_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        Venue.getVenueById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    Venue.getAllVenue(function(err,rows){

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
    Venue.addVenue(req.body,function(err,rows)
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
    Venue.updateVenue(req.params.id,req.body,function(err,rows)
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
    Venue.deleteVenue(req.params.id,function(err,rows)
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