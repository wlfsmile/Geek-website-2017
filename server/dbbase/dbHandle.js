var mongoose = require('mongoose');
var models = require('./model.js');

var db = mongoose.connect('mongodb://localhost/geek');

mongoose.connection.on("open",function(){
    console.log('success connent');
});

mongoose.connection.on("error",function(){
    console.log('fail connent'+error);
});

var Schema = mongoose.Schema;

for(var modelName in models){
    if(!db.modelName){
        mongoose.model(modelName,new Schema(models[modelName]));
    }
}

module.exports = {
    getModel: function(modelName){
        return _getModel(modelName);
    }
}

var _getModel = function(modelName){
    return mongoose.model(modelName)
}

// var oldMemberScheMa = new Schema({
//     memberImg: {type:String},
//     memberName: {type:String},
//     memberJob: {type:String},
//     memberIntro: {type:String}
// }); //定义一个新的模型

// exports.oldMember = db.model('oldmembers',oldMemberScheMa); //与user集合关联