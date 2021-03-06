var db=require('../dbconnection'); //reference of dbconnection.js
 
var Like={
getAllLike:function(callback){
 
return db.query("select e.*,l.* from event_tbl as e,like_tbl as l where l.fk_event_id=e.pk_event_id ",callback);
 
},
getLikeById:function(id,callback)
{
    return db.query("Select * from like_tbl where fk_event_id=?",[id],callback);
},
addLike:function(Like,callback)
{
    return db.query("Insert into like_tbl values(?,?,?,?)",[Like.fk_event_id,Like.fk_email_id,Like.like,Like.dislike],callback) 
},
updateLike:function(Like,id,callback)
{
    return db.query("update like_tbl set likecnt=?,dislikecnt=? where fk_event_id=?",[Like.likecnt,Like.dislikecnt,id],callback);
},
deleteAllLike:function(Like,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<Like.length;i++)
    {
        delarr[i]=Like[i].fk_event_id;
    }
    return db.query("delete from like_tbl where fk_event_id in (?)",[delarr],callback);
}

};
 module.exports=Like;