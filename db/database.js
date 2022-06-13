'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/testdeliveryDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to Mongodb......')
    }, (err) => { console.log(err); });
}