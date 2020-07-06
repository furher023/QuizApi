var db = require('../../modules/dbconnect');

function register(req,res,next){
 var date = new Date();
 let data={
  username: "Prakhar",
  quizid: 12,
  remind: 1
 };
 let sql ="INSERT INTO `registration` SET ?";
 db.query(sql,data,(err,result)=>{
  if(err) throw err;
  res.send('Registered');

  let sql2 ="UPDATE quizzes SET noofregistrations = noofregistrations + 1 WHERE quizid = ?"
  db.query(sql2,data.quizid,(err)=>{
   if(err) throw err;
   console.log('Registered');
   });
  
 });
};

module.exports = register;