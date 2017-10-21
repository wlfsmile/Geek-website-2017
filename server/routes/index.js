//var express = require('express');
//var router = express.Router();
//var dbHandle = require('../dbbase/dbHandle');
//var app = express();
// var oldMembers = require('../dbbase/dbHandle').oldMember;


module.exports = function(app){
  /* GET home page. */
  app.get('/', (req, res, next)=>{
    res.render('index.html');
  });

  // app.use('/member',require('./member'));

  // app.use('/work',require('./work'));

  // app.use('/join',require('./join'));

};
