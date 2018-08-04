
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Schs = require('../models/sch');

// Routes
Schs.methods(['get', 'put', 'post', 'delete']);
Schs.register(router, '/museums/schedules');

// Return router
module.exports = router;
