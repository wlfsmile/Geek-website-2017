//成果展示
var express = require('express');
var router = express.Router();
var dbHandle = require('../dbbase/dbHandle');

//成果展示页
router.get('/getWorks',(req,res,next)=>{
    let works = dbHandle.getModel('work');
    works.find({},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取毕业成员失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'workData':resData
            })
        }
    })
});

//成果具体信息页
router.get('/getWorks/:workId',(req,res,next)=>{
    let work = dbHandle.getModel('work');
    let workId = req.params.workId;
    console.log(workId);
    work.find({_id : wordId},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取毕业成员失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'workData':resData
            })
        }
    })
})

module.exports = router;