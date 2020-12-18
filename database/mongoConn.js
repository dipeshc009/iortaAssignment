'use strict'

const mongoose = require('mongoose');
var { MyDB } = require('../config/db');

//----------------------------------------------------------------------------------------------------------------------

var MyDbConn = mongoose.createConnection(MyDB, {
    useNewUrlParser: true
});


MyDbConn.on('error', console.error.bind(console, 'Connection error: '));
MyDbConn.once('open', function (callback) {
    console.log('Successfully connected to Localhost MongoDB /.');
});

//----------------------------------------------------------------------------------------------------------------------

module.exports = { MyDbConn };