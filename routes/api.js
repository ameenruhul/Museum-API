
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Hists = require('../models/hist');

// Routes
Hists.methods(['get', 'put', 'post', 'delete']);
Hists.register(router, '/museums/history');

// Return router
module.exports = router;
