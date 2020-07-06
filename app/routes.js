const express = require('express');
var router = express.Router();
const auth = require('../modules/auth');
const jwt = require('jsonwebtoken');
const { response } = require('express');


router.post('/',(req,res)=>{
    const apiToken =jwt.sign({'_id':'apiToken'},'this is secret')
    console.log(apiToken+'"""""""""""""""""')
    res.header('APIauth-token',apiToken).send(apiToken)
})
router.post('/register',(req,res,next)=>{
 /* user registeration for the quiz */
});

router.post('/createQuiz',(req,res,next)=>{
 /* New table for the quiz would be created here*/
 auth.verifyUser(req,res,(err,response)=>{
     res.send('done')
 })
res.send('done',)
});

router.post('/newques',(req,res,next)=>{
/*New questions for quiz wil bw inserted*/
});

router.get('quiz/:id',(req,res,next)=>{
/*Fetching the quiz questions*/
});


module.exports = router;