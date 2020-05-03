var express = require('express');
var router = express.Router();
var md5 = require('blueimp-md5');
const {MangModel,ShopModel} = require('../db/models');
const filter = {password:0} ; //指定过滤

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//用户登录
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

//用户注册
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

//商品信息注册
router.post('/addshop',function(req,res){
  const {shopName,shopBrief,shopCost,shopImg} = req.body
  ShopModel.find({shopname:shopName,shopcost:shopCost,shopbrief:shopBrief},function(err,shop){
    if(shop.shopname){
      // console.log()
      res.send({code:1,msg:'此商品已存在'});
    }else{
      new ShopModel({shopname:shopName,shopcost:shopCost,shopbrief:shopBrief,shopimg:shopImg,shoporder:0}).save(function(err,shop){
        res.send({code:0,data:{shopName,shopCost,shopBrief}});
      })
    }
  })
})

//获取商品信息列表
router.post('/getshop',function(req,res){
  ShopModel.find({},function(err,shops){
    res.send({code:0,data:shops});
  })
})

//通过id删除商品信息
router.post('/deleteshop',function(req,res){
  console.log(req.body)
  const _id = req.body._id
  console.log(_id);
  ShopModel.deleteOne({_id},function(err,result){
    res.send({code:0,data:result}); //0是删除成功
  })
})

//通过id修改商品信息
router.post('/updateshop', function(req,res){
  const {_id,shopname,shopcost,shopimg} = req.body
  console.log({_id,shopname,shopcost,shopimg})
  ShopModel.updateOne({_id},{$set:{shopname,shopcost,shopimg}}, function(err,result){
    res.send({code:0,data:result})
  })
})

module.exports = router;