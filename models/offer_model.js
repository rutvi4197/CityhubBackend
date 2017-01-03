var db=require('../dbconnection');

var Offer={
    getAllOffer:function(callback)
    {
      return  db.query("Select o.*,u.user_name,e.event_name from offer_tbl as o,user_tbl as u,event_tbl as e where o.fk_email_id=u.pk_email_id and o.fk_event_id=e.pk_event_id",callback);
    },
    getOfferById:function(id,callback)
    {
       return db.query("Select * from offer_tbl where pk_offer_id=?",[id],callback);
    },
    deleteAllOffer:function(Offer,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<Offer.length;i++)
    {
        delarr[i]=Offer[i].pk_offer_id;
    }
    return db.query("delete from offer_tbl where pk_offer_id in (?)",[delarr],callback);
},
    addOffer:function(Offer,callback)
    {
      return db.query("Insert into offer_tbl(fk_email_id,offer_price,offer_promocode,offer_photo,fk_event_id,offer_name) values(?,?,?,?,?,?)",[Offer.fk_email_id,Offer.offer_price,Offer.offer_promocode,Offer.offer_photo,Offer.fk_event_id,Offer.offer_name],callback);
    },
     updateOffer:function(id,Offer,callback)
     {
        return db.query("update offer_tbl set offer_name=?,offer_price=?,offer_promocode=?,offer_photo=?,fk_event_id=? where pk_offer_id=? ",[Offer.offer_name,Offer.offer_price,Offer.offer_promocode,Offer.offer_photo,Offer.fk_event_id,id],callback);
    },
    deleteOffer:function(id,callback)
    {
      return db.query("delete from offer_tbl where pk_offer_id=?",[id],callback);
    }
};
module.exports=Offer;