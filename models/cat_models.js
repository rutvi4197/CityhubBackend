var db=require('../dbconnection');

var Cat={
    getAllCat:function(callback)
    {
      return  db.query("Select * from cat_tbl",callback);
    },
    getCatById:function(id,callback)
    {
       return db.query("Select * from cat_tbl where pk_cat_id=?",[id],callback);
    },
    addCat:function(Cat,callback)
    {
      return db.query("Insert into cat_tbl(cat_name) values(?)",[Cat.cat_name],callback);
    },
    updateCat:function(id,Cat,callback)
    {
      return db.query("update cat_tbl set cat_name=? where pk_cat_id=? ",[Cat.cat_name,id],callback);
    },
    deleteCat:function(id,callback)
    {
      return db.query("delete from cat_tbl where pk_cat_id=?",[id],callback);
    }



};
module.exports=Cat;