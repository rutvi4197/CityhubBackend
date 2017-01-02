var express = require('express');
 var router = express.Router();
 var Wallet=require('../models/wallet_model');
 
router.get('/:id?',function(req,res,next){

  if(req.params.id)
  {
      Wallet.getWalletById(req.params.id,function(err,rows){

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

  Wallet.getAllWallet(function(err,rows){

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
router.delete('/:id',function(req,res,next)
{
    Wallet.deleteWallet(req.params.id,function(err,rows)
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
    Wallet.updateWallet(req.params.id,req.body,function(err,rows)
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
Wallet.addWallet(req.body,function(err,rows)
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
    
        Wallet.deleteAllWallet(req.body,function(err,rows)
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

 module.exports=router;