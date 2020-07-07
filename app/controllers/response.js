var db = require('../../modules/dbconnect');

function response(req,res,next){
 let data={
  username: req.body.username,
  response: req.body.response,
  quesid: req.body.quesid,
  timetaken: req.body.time,
 }
 let name = req.body.quizid;
 let sql = "INSERT INTO `resquiz" + name + "` SET ? "
 db.query(sql,data,(err)=>{
  if(err) throw err;
  res.send("Answer Submitted");
  let sql2 = "SELECT correctans FROM `quiz" + name + "` WHERE quesid = ?";
  db.query(sql2,data.quesid,(err,result)=>{
   if(err) throw err;
   if(result.length > 0){
    if(result[0].correctans == data.response){
     let sql3 = "UPDATE `resquiz" + name + "` SET ? WHERE username =? AND quesid = ? "
     db.query(sql3,[{correct: 1},req.body.username,req.body.quesid],(err)=>{
      if(err) throw err;
      console.log("Checked");
     })
    }
   }
  })
 });
};

module.exports = response;