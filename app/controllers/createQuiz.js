var db = require('../../modules/dbconnect');


function createQuiz(req,res,next){
 let name ="quiz"+req.body.id;
 var sql1 = "CREATE TABLE `" + name + "` (`quesid` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,`question` TEXT NOT NULL,`type` VARCHAR(10) NOT NULL,`option1` TEXT NOT NULL,`option2` TEXT NOT NULL,`option3` TEXT NOT NULL,`option4` TEXT NOT NULL,`correctans` CHAR(1) NOT NULL);";

 var sql2 = "CREATE TABLE `res" + name + "`(`id`  INT AUTO_INCREMENT PRIMARY KEY,`username` VARCHAR(50)NOT NULL,`response` CHAR(1) NOT NULL,`result` CHAR(1) NOT NULL,`timetaken` INT NOT NULL);"

 db.query(sql1,(err,result)=>{
 if(err) res.send('Quiz exists');
 console.log(result);
 res.send('Quiz Created');
});

 db.query(sql2, (err) => {
  if (err) console.log('Response table exists');
  console.log("Res table created");
 });

};

module.exports={
 createQuiz : createQuiz
};