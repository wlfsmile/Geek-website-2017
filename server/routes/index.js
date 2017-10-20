var express = require('express');
var router = express.Router();
var dbHandle = require('../dbbase/dbHandle');
// var oldMembers = require('../dbbase/dbHandle').oldMember;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/getAllOldMembers',function(req,res,next){
  var oldMembers = dbHandle.getModel('oldMember');
  oldMembers.find({},function(err,resData){
    if(err){
      res.json({
        'status':0,
        'message':'获取毕业成员失败'
      })
    }else{
      res.json({
        'status':1,
        'message':'获取成功',
        'memberData':resData
      })
    }
  });
})


module.exports = router;
