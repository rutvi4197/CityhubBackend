var db=require('../dbconnection'); //reference of dbconnection.js
 
var Like={
getAllLike:function(callback){
 
return db.query("Select * from like_tbl",callback);
 
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
}

};
 module.exports=Like;