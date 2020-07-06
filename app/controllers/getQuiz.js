var db = require('../../modules/dbconnect');

function getQuiz(req,res,next,id){
 let name = "quiz"+id;
 let sql = "SELECT quesid,question,type,option1,option2,option3,option4 FROM `" + name +"`";
 db.query(sql,(err,result)=>{
  if(err) throw err;
  res.send(result);
 });
};

module.exports = getQuiz;
