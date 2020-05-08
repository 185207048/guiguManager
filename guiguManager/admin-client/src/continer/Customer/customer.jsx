import React ,{Component} from 'react'
import '../../assests/css/shop.less'
import MyNavLink from '../MyNavLink/myNavLink'
import {Switch, Route, Redirect} from 'react-router-dom'
import Time from '../../component/time'
import CustomerShow from '../View/customerShow'

export default class User extends Component{

    render(){
        return(
            <div className = 'shop'>
                <div className='shop-head'>
                    <div className='shop-title'>用户管理</div>
                   <Time></Time>
                </div>
                <div className='shop-body'>
                    <div className='shop-main'>
                        <div className='shop-item container'>
                            <div className='shop-item-body'>
                                <div className='shop-add'>
                                    <ul className="nav nav-tabs">
                                        <li className="shop-li"><MyNavLink to='/admin/user/customershow'>查看用户</MyNavLink></li>
                                    </ul>
                                </div>
                                <div className='shop-contain'>
                                <Switch>
                                    <Route path='/admin/user/customershow' component={CustomerShow}/>
                                    <Redirect to='/admin/user/customershow'></Redirect>
                                </Switch>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}