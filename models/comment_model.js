var db=require('../dbconnection');

var Comment={
    getAllComment:function(callback)
    {
      return db.query("Select u.user_name,u.user_photo,e.event_name,c.* from user_tbl as u,event_tbl as e,comment_tbl as c where u.pk_email_id=c.fk_email_id and e.pk_event_id=c.fk_event_id",callback);
    },
    getCommentById:function(id,callback)
    {
       return db.query("Select u.user_name,e.event_name,c.* from comment_tbl as c,user_tbl as u,event_tbl as e where c.fk_event_id=e.pk_event_id and c.fk_email_id=u.pk_email_id and c.fk_event_id=?",[id],callback);
    },
    deleteAllComment:function(Comment,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<Comment.length;i++)
    {
        delarr[i]=Comment[i].pk_comment_id;
    }
    return db.query("delete from comment_tbl where pk_comment_id in (?)",[delarr],callback);
},
    addComment:function(Comment,callback)
    {
        

    return db.query("Insert into comment_tbl(fk_event_id,fk_email_id,comment_desc,comment_date) values(?,?,?,?)",[Comment.fk_event_id,Comment.fk_email_id,Comment.comment_desc,Comment.comment_date],callback);
    },
    deleteComment:function(id,callback)
    {
     
      return db.query("delete from comment_tbl where pk_comment_id=?",[id],callback);
    },
    updateComment:function(id,Comment,callback)
    {
      return db.query("update comment_tbl set comment_desc=?,comment_date=? where pk_comment_id=? ",[Comment.comment_desc,Comment.comment_date,id],callback);
    }
};
module.exports=Comment;