var db=require('../dbconnection');

var EventQue={
    getAllEventQue:function(callback)
    {
      return db.query("Select * from event_que_tbl",callback);
    },
    getEventQueById:function(id,callback)
    {
       return db.query("Select * from event_que_tbl where pk_que_id=?",[id],callback);
    },
    addQueEvent:function(EventQue,callback)
    {
    return db.query("Insert into event_que_tbl(fk_email_id,fk_event_id,que_desc,que_date) values(?,?,?,?)",[EventQue.fk_email_id,EventQue.fk_event_id,EventQue.que_desc,EventQue.que_date],callback);
    },
    deleteEventQue:function(id,callback)
    {
      return db.query("delete from event_que_tbl where pk_que_id=?",[id],callback);
    },
    updateEventQue:function(id,EventQue,callback)
    {
      return db.query("update event_que_tbl set que_desc=?,que_date=? where pk_que_id=? ",[EventQue.que_desc,EventQue.que_date,id],callback);
    },
    quedetails(callback)
    {
      return db.query("select q.*,u.* from event_que_tbl as q,user_tbl as u where q.fk_email_id=u.pk_email_id ",callback);
    }
};
module.exports=EventQue;