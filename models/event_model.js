var db=require('../dbconnection'); //reference of dbconnection.js
var fs=require('fs');

var Event={

getEvent:function(callback){
 
return db.query("Select * from event_tbl where flag=0",callback);
 
},
getDisEvent:function(callback){
 
return db.query("Select * from event_tbl where flag=2",callback);
 
},
getByEventId:function(id,callback)
{
       return db.query("select b.*,e.* from event_tbl as e,book_tbl as b where e.pk_event_id=b.fk_event_id where ",[id],callback);
},
deleteAllEvent:function(Event,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<Event.length;i++)
    {
        delarr[i]=Event[i].pk_event_id;
    }
    return db.query("delete from event_tbl where pk_event_id in (?)",[delarr],callback);
},
updateAllEvent:function(Event,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<Event.length;i++)
    {
        delarr[i]=Event[i].pk_event_id;
    }
    return db.query("update event_tbl set flag=1 where pk_event_id in (?)",[delarr],callback);
},
getAllEvent:function(callback)
{
    return db.query("Select * from event_tbl where flag=1",callback);
},
 getEventById:function(id,callback){
 
return db.query("select * from event_tbl where pk_event_id=?",[id],callback);
 },
 addEvent:function(Event,callback){
      var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
     var pos=Event.event_logo.indexOf(",");
     var base64d=Event.event_logo.substring(pos+1);
     var path="./public/images/event/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
     var path1="/images/event/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
     fs.writeFile(path,base64d,'base64',function(err){
 if(err) {
        return console.log(err);
    }
   console.log("The file was saved!");
 });

 return db.query("Insert into event_tbl(event_name,event_logo,event_slogan,event_des,fk_venue_id,event_date,event_time,event_ticket,event_price,fk_cat_id,fk_email_id,fk_offer_id,event_cnt,flag) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
 [Event.event_name,path1,Event.event_slogan,Event.event_des,Event.fk_venue_id,
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
 approvevent:function(id,Event,callback)
 {
     return db.query("update event_tbl set flag=? where pk_event_id=?",[Event.flag,id],callback);
 }
 
};
 module.exports=Event;