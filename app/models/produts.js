const mongoose = require('mongoose');
const {
    MyDbConn
} = require('../../database/mongoConn');

let productSchema = mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = MyDbConn.model('iortaProducts', productSchema, 'iortaProducts');