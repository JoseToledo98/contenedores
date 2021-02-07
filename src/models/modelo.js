const mongoose = require('mongoose');
const {Schema} = mongoose;

const collection = new Schema({
    name : String
})

module.exports = mongoose.model('users', colecction);