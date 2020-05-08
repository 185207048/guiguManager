/*
    包含n个能操作mongodb数据库集合的model的模块
    
*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/guiguhoutai',{useNewUrlParser: true,useUnifiedTopology: true});
const conn = mongoose.connection;
conn.on('connected',function(){
    console.log('数据库连接成功')
});
// 管理员表
const mangSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型: 1是全权限管理员，0是普通管理员
    header: {type: String}, // 头像名称 --> 上传
});
const MangModel = mongoose.model('user',mangSchema);
exports.MangModel = MangModel;

//  商品表
const shopSchema = mongoose.Schema({
    shopname:{type:String, require:true}, //商品名
    shopcost:{type:String, require:true}, //商品价格
    shopbrief:{type:String, require:true}, //商品简介
    shopimg:{type:String}, //商品图片
    shoporder:{type:String, require:true} //商品数量
})
const ShopModel = mongoose.model('shop',shopSchema);
exports.ShopModel = ShopModel;

//  用户表
const customerSchema = mongoose.Schema({
    customername: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    customercon: {type: String}, // 用户购买的内容
    customerphone: {type: String}, // 用户联系方式
    header: {type: String}, // 头像名称 --> 上传
})
const CustomerModel = mongoose.model('customer', customerSchema);
exports.CustomerModel = CustomerModel;

