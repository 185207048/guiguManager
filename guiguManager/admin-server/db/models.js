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

