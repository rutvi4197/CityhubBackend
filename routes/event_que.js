var express = require('express');
var router = express.Router();
var Event_Que=require('../models/event_que_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        Event_Que.getEventQueById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    Event_Que.getAllEventQue(function(err,rows){

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
    Event_Que.addQueEvent(req.body,function(err,rows)
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
    Event_Que.deleteAlQue(req.body,function(err,rows)
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
    Event_Que.deleteEventQue(req.params.id,function(err,rows)
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
    Event_Que.updateEventQue(req.params.id,req.body,function(err,rows)
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