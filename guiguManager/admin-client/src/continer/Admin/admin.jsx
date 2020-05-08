import React ,{Component} from 'react'
import logo from '../../assests/images/logo.png'
import '../../assests/css/admin.less'
import MyNavLink from '../MyNavLink/myNavLink'
import {Switch,Route,Redirect} from 'react-router-dom'

import Chart from '../Chart/chart'
import Pages from '../Pages/pages'
import Roles from '../Roles/roles'
import Shop from '../Shop/shop'
import Customer from '../Customer/customer'

export default class Admin extends Component{

    render(){
        return(
            <div>
                <div className='admin-head'>
                    <div className='admin-box'>
                        <span><img src={logo} className='admin-header' alt=''></img></span>
                        <span className='admin-name'><h5>尚硅谷后台</h5></span>
                    </div>
                    <div className='admin-side'>
                        <div className='admin-sidebar'>
                            <ul>
                                <li><div className='admin-div'><MyNavLink to='/admin/pages'>首页</MyNavLink></div></li>
                                <li><div className='admin-div'><MyNavLink to='/admin/shop'>商品</MyNavLink></div></li>
                                <li><div className='admin-div'><MyNavLink to='/admin/user'>用户管理</MyNavLink></div></li>
                                <li><div className='admin-div'><MyNavLink to='/admin/roles'>角色管理</MyNavLink></div></li>
                                <li><div className='admin-div'><MyNavLink to='/admin/chart'>图形图表</MyNavLink></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='admin-body'>
                    <div className='wel-head'>
                        <span>欢迎</span>
                        <span><a href=''>退出</a></span>
                    </div>
                    
                    <Switch>
                        <Route path='/admin/pages' component={Pages}></Route>
                        <Route path='/admin/shop' component={Shop}></Route>
                        <Route path='/admin/user' component={Customer}></Route>
                        <Route path='/admin/roles' component={Roles}></Route>
                        <Route path='/admin/chart' component={Chart}></Route>
                        <Redirect to='/admin/pages'></Redirect>
                    </Switch>
                </div>
                
            </div>
        )
    }
}