const mongoose = require('mongoose');
const {
    MyDbConn
} = require('../../database/mongoConn');

let filesSchema = mongoose.Schema({}, {
    strict: false,
});

module.exports = MyDbConn.model('Files', filesSchema, 'Files');