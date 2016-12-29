var db=require('../dbconnection');

var Testimonial={
    getAllTestimonial:function(callback)
    {
      return db.query("Select * from testimonial_tbl",callback);
    },
    getTestimonialById:function(id,callback)
    {
       return db.query("Select * from testimonial_tbl where pk_review_id=?",[id],callback);
    },
    addTestimonial:function(Testimonial,callback)
    {
    return db.query("Insert into testimonial_tbl(fk_email_id,review_desc,review_like) values(?,?,?)",[Testimonial.fk_email_id,Testimonial.review_desc,Testimonial.review_like],callback);
    },
    deleteTestimonial:function(id,callback)
    {
      return db.query("delete from testimonial_tbl where pk_review_id=?",[id],callback);
    },
    testdetails:function(callback)
    {
      return db.query("select t.*,u.* from testimonial_tbl as t,user_tbl as u where t.fk_email_id=u.pk_email_id ",callback);
    }
};
module.exports=Testimonial;