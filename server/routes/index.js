var express = require('express');
var router = express.Router();
var oldMembers = require('../dbbase/dbHandle').oldMember;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/getAllOldMembers',function(req,res,next){
  console.log(111);
  return oldMembers.find({}).populate({path:'memberName',model:'oldMembers'});
})


module.exports = router;
