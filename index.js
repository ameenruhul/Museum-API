const express = require('express');
//const routes = require('/api');

//Setting up an express app

const app = express();
//app.use(routes);

//Listening for Requests

app.get('/mesuems/schedules',function(req,res){
    
    res.send({type:'GET'});
});

app.post('/mesuems/schedules',function(req,res){
    
    res.send({type:'POST'});
});

app.put('/mesuems/schedules',function(req,res){
    
    res.send({type:'PUT'});
});

app.delete('/mesuems/schedules',function(req,res){
    
    res.send({type:'DELETE'});
});

app.listen(process.env.port||4000,function(){

    console.log('Connecting to localhost.....');
});