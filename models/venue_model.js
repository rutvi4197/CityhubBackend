 var db=require('../dbconnection');

var Venue={
    getAllVenue:function(callback)
    {
      return  db.query("Select * from venue_tbl",callback);
    },
    getVenueById:function(id,callback)
    {
       return db.query("Select * from venue_tbl where pk_venue_id=?",[id],callback);
    },
    addVenue:function(Venue,callback)
    {
      return db.query("Insert into venue_tbl(venue_name,venue_address,fk_city_id,pincode) values(?,?,?,?)",[Venue.venue_name,Venue.venue_address,Venue.fk_city_id,Venue.pincode],callback);
    },
    updateVenue:function(id,Venue,callback)
    {
      return db.query("update venue_tbl set venue_name=?,venue_address=?,fk_city_id=?,pincode=? where pk_venue_id=? ",[Venue.venue_name,Venue.venue_address,Venue.fk_city_id,Venue.pincode,id],callback);
    },
    deleteVenue:function(id,callback)
    {
      return db.query("delete from venue_tbl where pk_venue_id=?",[id],callback);
    },
    venuedetails:function(callback)
    {
      return db.query("select v.*,c.* from venue_tbl as v,city_tbl as c where c.pk_city_id=v.fk_city_id",callback);
    }

};
module.exports=Venue;