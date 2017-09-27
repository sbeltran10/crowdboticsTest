var mongoose = require('mongoose');

var entity = new mongoose.Schema({
    name: String
});
module.exports = mongoose.model('RandomName', entity);
