var express = require('express');
 var router = express.Router();
 var Book=require('../models/book_model');
 
router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        Book.getBookById(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

    }
    else{
    Book.getAllBook(function(err,rows){

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
    Book.addBook(req.body,function(err,rows)
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
    Book.deleteBook(req.params.id,function(err,rows)
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