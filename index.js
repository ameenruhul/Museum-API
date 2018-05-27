const express = require('express');
const bodyParser = require('body-parser');


//set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

app.get('/api',function(req,res){
  console.log('Get request');
  res.send({name : 'Mou'});

});

//listen for requests
app.listen(process.env.port||4000,function(){
console.log('now listening for requests');

});
