const md5 = require('blueimp-md5')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/guigu_test',{useNewUrlParser: true,useUnifiedTopology: true})
const conn = mongoose.connection
conn.on('connected',function(){
    console.log('数据库连接成功')
})
const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true} // 用户类型: dashen/laoban
  
});

const UserModel = mongoose.model('user',userSchema)

function testSave(){
    const userModel =  new UserModel({username:'TOM',password:md5('123'),type:'DDD'})
    userModel.save(function(error,user){
        console.log('save()',error,user)
    })
}
testSave()
