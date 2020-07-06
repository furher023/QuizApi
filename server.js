const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000';

app.use(bodyParser.urlencoded({ extended: true }));

var indexrouter = require('./app/routes');
app.use('/',indexrouter);


app.listen(PORT,(err)=>{
 if(err) throw err;
 console.log('Server  at port '+PORT);
});