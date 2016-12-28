var db=require('../dbconnection');

var Book={
    getAllBook:function(callback)
    {
      return  db.query("Select * from book_tbl",callback);
    },
    getBookById:function(id,callback)
    {
       return db.query("Select * from book_tbl where pk_book_id=?",[id],callback);
    },
    addBook:function(Book,callback)
    {
      return db.query("Insert into book_tbl(fk_email_id,fk_event_id,ticket_cnt,ticket_amnt) values(?,?,?,?)",[Book.fk_email_id,Book.fk_event_id,Book.ticket_cnt,Book.ticket_amnt],callback);
    },
    deleteBook:function(id,callback)
    {
      return db.query("delete from book_tbl where pk_book_id=?",[id],callback);
    },
    getticketcnt(callback)
 {
     return db.query('select sum(b.ticket_cnt)"cnt",e.event_name,b.fk_event_id from event_tbl as e,book_tbl as b  where e.pk_event_id=b.fk_event_id ',callback);
 }



};
module.exports=Book;