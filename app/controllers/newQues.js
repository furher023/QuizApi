var db = require('../../modules/dbconnect');

function newQues(req,res,next){
 let data ={
  question: req.body.question,
  type: req.body.type,
  option1: req.body.option1,
  option2: req.body.option2,
  option3: req.body.option3,
  option4: req.body.option4,
  correctans: req.body.correctans
 };
 let name = 'quiz'+req.body.id;
 let sql = "INSERT INTO `"+ name +"` SET ?";
 db.query(sql,data,(err)=>{
  if(err) throw err;
  res.send("Inserted");
 });
};

module.exports = newQues;