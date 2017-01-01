var db=require('../dbconnection'); //reference of dbconnection.js
 
var City={
getAllCity:function(callback){
 
return db.query("Select * from city_tbl",callback);
 
},
getCityById:function(id,callback)
{
    return db.query("Select * from city_tbl where pk_city_id=?",[id],callback);
},
deleteAllCity:function(City,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<City.length;i++)
    {
        delarr[i]=City[i].pk_city_id;
    }
    return db.query("delete from city_tbl where pk_city_id in (?)",[delarr],callback);
},
deleteCity(id,callback)
{
    return db.query("deleter from city_tbl where pk_city_id=?",[id],callback);
},
updateCity:function(id,City,callback)
{
    return db.query("update city_tbl set city_name=? where pk_city_id=?",[City.city_name,id],callback)
},
addCity:function(City,callback)
{
    return db.query("Insert into city_tbl(city_name) values(?)",[City.city_name],callback);
}
};
 module.exports=City;