const express = require('express');
var router = express.Router();
const auth = require('../modules/auth');
const jwt = require('jsonwebtoken');
const { response } = require('express');


<<<<<<< HEAD
router.post('/',(req,res)=>{
    const apiToken =jwt.sign({'_id':'apiToken'},'this is secret')
    console.log(apiToken+'"""""""""""""""""')
    res.header('APIauth-token',apiToken).send(apiToken)
})
=======

>>>>>>> bebf0425d584a9d377bebdbc6d1c88c08920d5ea
router.post('/register',(req,res,next)=>{
 /* user registeration for the quiz */
 let controller = require('./controllers/register');
 controller(req,res,next);
});

router.post('/createQuiz',(req,res,next)=>{
 /* New table for the quiz would be created here*/
<<<<<<< HEAD
 auth.verifyUser(req,res,(err,response)=>{
     res.send('done')
 })
res.send('done',)
=======
 let controller = require('./controllers/createQuiz');
 controller(req,res,next);
>>>>>>> bebf0425d584a9d377bebdbc6d1c88c08920d5ea
});

router.post('/newQues',(req,res,next)=>{
/*New questions for quiz wil be inserted*/
 let controller = require('./controllers/newQues');
 controller(req, res, next);
});

router.get('/quiz/:id',(req,res,next)=>{
/*Fetching the quiz questions*/
 let controller = require('./controllers/getQuiz');
 controller(req, res, next,req.params.id);
});


module.exports = router;