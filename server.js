const express = require('express');
const app = express();
const PORT = process.env.PORT || '3000';



var indexrouter = require('./app/routes');
app.use('/',indexrouter);


app.listen(PORT,(err)=>{
 if(err) throw err;
 console.log('Server  at port '+PORT);
});