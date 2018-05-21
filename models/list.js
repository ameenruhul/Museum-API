
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var listSchema = new mongoose.Schema({
    name: String,
    pos: String,
    mob: Number
});

// Return model
module.exports = restful.model('Lists', listSchema);
