const express = require('express');
const app = express();
const PORT = process.env.PORT || '3000';

app.listen(PORT,(err)=>{
 if(err) throw err;
 console.log('Server running');
});