var mongoose = require('mongoose');
require('../connect');
var User = require('./schema.js');
mongoose.Promise = global.Promise;

var user = new User({
    name: 'douqing',
    password: '111111',
    telephone: '15819258737',
    sex: '女'
});

user.save(function (err) {
    console.log('save status:', err ? 'failed' : 'success');
});