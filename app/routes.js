const express = require('express');
var router = express.Router();
const auth = require('../modules/auth');
const jwt = require('jsonwebtoken');


router.post('/', (req, res) => {
    const apiToken = jwt.sign({ '_id': 'apiToken' }, 'this is secret')
    res.header('APIauth-token', apiToken).send(apiToken)
})

router.post('/register', (req, res, next) => {
    /* user registeration for the quiz */
    let controller = require('./controllers/register');
    controller(req, res, next);
});

router.post('/createQuiz', (req, res, next) => {
    /* New table for the quiz would be created here*/
    auth.verifyUser(req, res, (err, response) => {
        let controller = require('./controllers/createQuiz');
        controller(req, res, next);
        res.send('done')

    })
});

router.post('/newQues', (req, res, next) => {
    /*New questions for quiz wil be inserted*/
    let controller = require('./controllers/newQues');
    controller(req, res, next);
});

router.get('/quiz/:id', (req, res, next) => {
    /*Fetching the quiz questions*/
    let controller = require('./controllers/getQuiz');
    controller(req, res, next, req.params.id);
});

router.post('/response', (req, res, next) => {
 /*Insert response*/
 let controller = require('./controllers/response');
 controller(req, res, next);
});
module.exports = router;