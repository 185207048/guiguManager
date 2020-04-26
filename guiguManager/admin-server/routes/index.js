var express = require('express');
var router = express.Router();
var md5 = require('blueimp-md5');
const {MangModel} = require('../db/models');
const filter = {password:0} ; //指定过滤

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',function(req,res){
  const {username,password} = req.body
  console.log({username,password})
  MangModel.find({username,password:md5(password)},filter,function(err,user){
    console.log(user)
    if(user){
      res.cookie('userid',user._id,{maxAge:1000*60*60*24*7});
      res.send({code:0,data:user});
    }else{
      res.send({code:1,msg:'用户不存在'});
    }
  })
})

router.post('/register',function(req,res){
  const {username,password,type,header} = req.body
  console.log( {username,password,type,header} )
  MangModel.find({username,password:md5(password)},filter,function(err,user){
    if(user.username){
      console.log( user.username)
      res.send({code:1,msg:'此用户已存在'});
    }else{
      new MangModel({username,password:md5(password),type,header}).save(function(err,user){
        res.cookie('userid',user._id,{maxAge:1000*60*60*24*7});
        res.send({code:0,data:{_id:user._id,username,type,header}});
      })
    }
  })
})
module.exports = router;