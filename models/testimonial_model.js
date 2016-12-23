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
    }
};
module.exports=Testimonial;