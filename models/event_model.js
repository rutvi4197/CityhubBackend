var db=require('../dbconnection'); //reference of dbconnection.js
 
var Event={

getEvent:function(callback){
 
return db.query("Select * from event_tbl where flag=0",callback);
 
},
getAllEvent:function(callback)
{
    return db.query("Select * from event_tbl where flag=1",callback);
},
 getEventById:function(id,callback){
 
return db.query("select * from event_tbl where pk_event_id=?",[id],callback);
 },
 addEvent:function(Event,callback){
 return db.query("Insert into event_tbl(event_name,event_logo,event_slogan,event_des,fk_venue_id,event_date,event_time,event_ticket,event_price,fk_cat_id,fk_email_id,fk_offer_id,event_cnt) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
 [Event.event_name,Event.event_logo,Event.event_slogan,Event.event_des,Event.fk_veue_id,
 Event.event_date,Event.event_time,Event.event_ticket,Event.event_price,
 Event.fk_cat_id,Event.fk_email_id,Event.fk_offer_id,Event.event_cnt,Event.flag],callback);
},
 deleteEvent:function(id,callback){
  return db.query("delete from event_tbl where pk_event_id=?",[id],callback);
 },
 updateEvent:function(id,Event,callback){
  return db.query("update event_tbl set event_name=?,event_logo=?,event_slogan=?,event_des=?,event_date=?,event_time=?,event_ticket=?,event_price=? where pk_event_id=?",
  [Event.event_name,Event.event_logo,Event.event_slogan,Event.event_des,Event.event_date,Event.event_time,Event.event_ticket,Event.event_price,id],callback);
 },
 approvevent(id,Event,callback)
 {
     return db.query("update event_tbl set flag=? where pk_event_id=?",[Event.flag,id],callback);
 }
 
};
 module.exports=Event;