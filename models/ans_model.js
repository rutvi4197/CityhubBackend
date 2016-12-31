var db=require('../dbconnection'); //reference of dbconnection.js
 
var Ans={

getAllAns:function(callback){
 
return db.query("select * from ans_tbl",callback);
 
},
 getAnsById:function(id,callback){
 
return db.query("select * from ans_tbl where pk_ans_id=?",[id],callback);
 },
 addAns:function(Ans,callback){
 return db.query("Insert into ans_tbl(fk_que_id,fk_event_id,fk_email_id,ans_desc,ans_date) values(?,?,?,?,?)",[Ans.fk_que_id,Ans.fk_event_id,Ans.fk_email_id,Ans.ans_desc,Ans.ans_date],callback);
 },
 deleteAns:function(id,callback){
  return db.query("delete from ans_tbl where pk_ans_id=?",[id],callback);
 },
 getquedetails:function(callback)
 {
     return db.query("select q.*,a.*,u.*,e.* from event_que_tbl as q,ans_tbl as a,user_tbl as u,event_tbl as e where a.fk_que_id=q.pk_que_id and a.fk_email_id=u.pk_email_id and a.fk_event_id=e.pk_event_id",callback);
 },
 deleteAllAns:function(id,callback){
  return db.query("delete from ans_tbl where fk_que_id=?",[id],callback);
 }
};
 module.exports=Ans;