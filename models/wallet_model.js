 var db=require('../dbconnection');

var Wallet={
    
    getAllWallet:function(callback)
    {
       return db.query("Select * from wallet_tbl ",callback);
    },
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
    },
    walletdetails:function(callback)
    {
      return db.query("select w.*,u.* from wallet_tbl as w,user_tbl as u where w.fk_email_id=u.pk_email_id",callback);
    },
    deleteWallet(id,callback)
{
    return db.query("delete from wallet_tbl where pk_wallet_id=?",[id],callback);
},
updateWallet:function(id,Wallet,callback)
{
    return db.query("update wallet_tbl set wallet_amnt=?,wallet_date=? where pk_wallet_id=?",[Wallet.wallet_amnt,Wallet.wallet_date,id],callback)
},
addWallet:function(Wallet,callback)
{
    return db.query("Insert into wallet_tbl(fk_email_id,wallet_amnt,wallet_date) values(?,?,?)",[Wallet.fk_email_id,Wallet.wallet_amnt,Wallet.wallet_date],callback);
},
deleteAllWallet:function(Wallet,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<Wallet.length;i++)
    {
        delarr[i]=Wallet[i].pk_wallet_id;
    }
    return db.query("delete from wallet_tbl where pk_wallet_id in (?)",[delarr],callback);
},
};
module.exports=Wallet;