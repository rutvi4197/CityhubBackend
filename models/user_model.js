var db=require('../dbconnection'); //reference of dbconnection.js
var fs=require('fs');
 
var User={

getAllUsers:function(callback){
 
return db.query("Select * from user_tbl",callback);
 
},
 getUserById:function(id,callback){
 
return db.query("select * from user_tbl where pk_email_id=?",[id],callback);
 },
 addUser:function(User,callback){
     var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
     var pos=User.user_photo.indexOf(",");
     var base64d=User.user_photo.substring(pos+1);
    var path="./public/images/profilepic/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/profilepic/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
fs.writeFile(path,base64d,'base64',function(err){
 if(err) {
        return console.log(err);
    }
   console.log("The file was saved!");
 });
 return db.query("Insert into user_tbl values(?,?,?,?,?,?,?)",[User.pk_email_id,User.user_password,User.user_mobile_no,User.user_name,User.fk_city_id,User.user_type,path1],callback);
 },
 deleteUser:function(id,User,callback){
     var path='./public'+User.user_photo;
        fs.unlink(path,function(err){
            if(err){
            console.log(err);
            }
            console.log('Deleted successfuly')});
  return db.query("delete from user_tbl where pk_email_id=?",[id],callback);
 },
 updateUser:function(id,User,callback){
        
  return db.query("update user_tbl set user_name=?,user_mobile_no=?,fk_city_id=? where pk_email_id=?",[User.user_name,User.user_mobile_no,User.fk_city_id,id],callback);
 },
 userdetails:function(callback)
 {
    return db.query("select c.*,u.* from city_tbl as c,user_tbl as u where c.pk_city_id=u.fk_city_id",callback);
 },
 deleteAllUser:function(User,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<User.length;i++)
    {
        delarr[i]=User[i].pk_email_id;
    }
    return db.query("delete from user_tbl where pk_email_id in (?)",[delarr],callback);
}
 
};
 module.exports=User;