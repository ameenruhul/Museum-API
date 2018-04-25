const express = require('express');
const router = express.Router();


//get the list of museums form DB

router.get('/museums/list_officers',function(req,res){
    res.send({type:'GET'});

});

//add a new museums in DB

router.post('/museums/list_officers',function(req,res){
    res.send({type:'POST'});

});

//update a museum in the DB

router.put('/museums/list_officers/:id',function(req,res){
    res.send({type:'PUT'});

});

//delete a museum form the DB

router.delete('/museums/list_officers/:id',function(req,res){
    res.send({type:'DELETE'});

});

module.exports = router;


