var db=require('../dbconnection');

var EventQue={
    getAllEventQue:function(callback)
    {
      return db.query("Select * from event_que_tbl",callback);
    },
    getEventQueById:function(id,callback)
    {
       return db.query("Select u.user_name,e.event_name,q.* from event_que_tbl as q,user_tbl as u,event_tbl as e where q.fk_event_id=e.pk_event_id and q.fk_email_id=u.pk_email_id and pk_que_id=?",[id],callback);
    },
    deleteAlQue:function(EventQue,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<EventQue.length;i++)
    {
        delarr[i]=EventQue[i].pk_que_id;
    }
    return db.query("delete from event_que_tbl where pk_que_id in (?)",[delarr],callback);
},
    addQueEvent:function(EventQue,callback)
    {
    return db.query("Insert into event_que_tbl(fk_email_id,fk_event_id,que_desc,que_date) values(?,?,?,?)",[EventQue.fk_email_id,EventQue.fk_event_id,EventQue.que_desc,EventQue.que_date],callback);
    },
    deleteEventQue:function(id,callback)
    {
     // db.query("delete from ans_tbl where fk_que_id=?",[id],callback);
      return db.query("delete from event_que_tbl where pk_que_id=?",[id],callback);
    },
    updateEventQue:function(id,EventQue,callback)
    {
      return db.query("update event_que_tbl set que_desc=?,que_date=? where pk_que_id=? ",[EventQue.que_desc,EventQue.que_date,id],callback);
    },
    quedetails:function(callback)
    {
      return db.query("select q.*,u.*,e.event_name from event_que_tbl as q,user_tbl as u,event_tbl as e where e.pk_event_id=q.fk_event_id and q.fk_email_id=u.pk_email_id ",callback);
    }
};
module.exports=EventQue;