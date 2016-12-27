var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={

getAllUsers:function(callback){
 
return db.query("Select * from user_tbl",callback);
 
},
 getUserById:function(id,callback){
 
return db.query("select * from user_tbl where pk_email_id=?",[id],callback);
 },
 addUser:function(User,callback){
 return db.query("Insert into user_tbl values(?,?,?,?,?,?)",[User.pk_email_id,User.user_password,User.user_mobile_no,User.user_name,User.fk_city_id,User.user_type],callback);
 },
 deleteUser:function(id,callback){
  return db.query("delete from user_tbl where pk_email_id=?",[id],callback);
 },
 updateUser:function(id,User,callback){
  return db.query("update user_tbl set user_name=?,user_mobile_no=?,fk_city_id=? where pk_email_id=?",[User.user_name,User.user_mobile_no,User.fk_city_id,id],callback);
 }
 
};
 module.exports=User;