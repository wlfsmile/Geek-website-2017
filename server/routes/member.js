// 成员页
var express = require('express');
var router = express.Router();
var dbHandle = require('../dbbase/dbHandle');

// GET member page
//oldmember
router.get('/getAllOldMembers',(req,res,next)=>{
  let oldMembers = dbHandle.getModel('oldMember');
  oldMembers.find({},(err,resData)=>{
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
});

//nowmember
router.get('/getAllNowMembers',(req,res,next)=>{
  let nowMembers = dbHandle.getModel('nowMember');
  nowMembers.find({},(err,resData)=>{
    if(err){
      res.json({
        'status':0,
        'message':'获取数据失败'
      })
    }else{
      res.json({
        'status':1,
        'message':'获取成功',
        'memberData':resData
      })
    }
  })
});

module.exports = router;