
const express = require('express');
const routes = require('./routes/api');

//Setting up an express app

const app = express();
app.use(routes);

//Listening for Requests

app.listen(process.env.port||4000,function(){

    console.log('Now Listening for Request in Server Localhost 4000');
});