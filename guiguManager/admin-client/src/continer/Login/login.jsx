import React ,{Component} from 'react'
import '../../assests/css/login.less'
import logo from '../../assests/images/logo.png'
import {connect} from 'react-redux'
import {login} from '../../redux/actions'
import {Redirect} from 'react-router-dom'

class Login extends Component{
    state = {
        username:'',
        password:''
    }
    userChange = (e) => {
        const username = e.target.value
        this.setState({username})
        // console.log(name,value)
    }
    passChange = (e) => {
        const password = e.target.value
        this.setState({password})
        // console.log(name,value)
    }
    submit = () => {
        // console.log(this.state)
        const {username,password} = this.state
        this.props.login({username,password})
        // console.log(this.props.user)
        
    }
    
    render(){
        const username_p = this.props.user.username
        const errmsg = this.props.user.errormsg
        if(username_p){
            return <Redirect to="./admin"></Redirect>
        }
       
        return(
            <div className='container login-body'>
                <div className='login-header'>
                    <img src={logo} alt="logo" className='logo-img'></img>
                    <div className='login-font'><h1 className='logo-title'>React项目:后台管理系统</h1></div>
                </div>
                <div className='login-container'>
                    <div className='login-card'>
                        <h2>用户登录</h2>
                        <div className='login-input'>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='输入用户名' onChange = {this.userChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1"  placeholder='输入登录密码' onChange = {this.passChange}/>
                            </div>
                            <div>
                                {
                                     errmsg ? <div className="alert alert-danger" role="alert">{errmsg}</div> : null
                                }
                            </div>
                            <button type="submit" className="btn btn-success btn-block" onClick={this.submit}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({user:state.user}),{login})(Login)