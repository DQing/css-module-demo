var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    telephone: String,
    sex: String
});
var UserModel = mongoose.model('User', UserSchema, 'note', false);//将该Schema发布为Model

module.exports = UserModel;