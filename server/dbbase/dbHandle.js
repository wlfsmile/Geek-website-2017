var mongoose = require('mongoose');

var url = 'mongodb://localhost/geek';
var db = mongoose.connect(url,function(err,db){
    console.log('success connent');
});

var Schema = mongoose.Schema;
var oldMemberScheMa = new Schema({
    memberImg: {type:String},
    memberName: {type:String},
    memberJob: {type:String},
    memberIntro: {type:String}
}); //定义一个新的模型

exports.oldMember = db.model('oldmembers',oldMemberScheMa); //与user集合关联