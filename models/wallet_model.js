 var db=require('../dbconnection');

var Wallet={
    
    getWalletById:function(id,callback)
    {
       return db.query("Select * from wallet_tbl where pk_wallet_id=?",[id],callback);
    },
   
    addWallet:function(id,wallet,callback)
    {
      return db.query("update wallet_tbl set wallet_amnt=?,wallet_date=? where pk_wallet_id=? ",[wallet.wallet_amnt,wallet.wallet_date,id],callback);
    },
    minusWallet:function(id,wallet,callback)
    {
      return db.query("update wallet_tbl set wallet_amnt=wallet_amnt-?,wallet_date=? where pk_wallet_id=? ",[wallet.wallet_amnt,wallet.wallet_date,id],callback);
    }
    

};
module.exports=Wallet;