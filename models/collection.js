
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var collectionSchema = new mongoose.Schema({
    name: String,
    adress: String,
    

});

// Return model
module.exports = restful.model('Collection', collectionSchema);
