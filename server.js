const express = require('express');
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || '4000';
=======
var bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000';
>>>>>>> bebf0425d584a9d377bebdbc6d1c88c08920d5ea

app.use(bodyParser.urlencoded({ extended: true }));

var indexrouter = require('./app/routes');
app.use('/',indexrouter);


app.listen(PORT,(err)=>{
 if(err) throw err;
 console.log('Server  at port '+PORT);
});