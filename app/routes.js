const express = require('express');
var router = express.Router();


router.post('/register',(req,res,next)=>{
 /* user registeration for the quiz */
});

router.post('/createQuiz',(req,res,next)=>{
 /* New table for the quiz would be created here*/
});

router.post('/newques',(req,res,next)=>{
/*New questions for quiz wil bw inserted*/
});

router.get('quiz/:id',(req,res,next)=>{
/*Fetching the quiz questions*/
});


module.exports = router;