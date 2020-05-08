import React ,{Component} from 'react'
import '../../assests/css/shop.less'
import MyNavLink from '../MyNavLink/myNavLink'
import {Switch, Route, Redirect} from 'react-router-dom'
import Time from '../../component/time'
import UserShow from '../View/userShow'
import UserAdd from '../View/userAdd'


export default class Roles extends Component{

    render(){
        return(
            <div className = 'shop'>
                <div className='shop-head'>
                    <div className='shop-title'>管理员管理</div>
                   <Time></Time>
                </div>
                <div className='shop-body'>
                    <div className='shop-main'>
                        <div className='shop-item container'>
                            <div className='shop-item-body'>
                                <div className='shop-add'>
                                    <ul className="nav nav-tabs">
                                        <li className="shop-li"><MyNavLink to='/admin/roles/usershow'>查看管理员</MyNavLink></li>
                                        <li className="shop-li"><MyNavLink to='/admin/roles/useradd'>添加管理员</MyNavLink></li>
                                    </ul>
                                </div>
                                <div className='shop-contain'>
                                <Switch>
                                    <Route path='/admin/roles/usershow' component={UserShow}/>
                                    <Route path='/admin/roles/useradd' component={UserAdd}/>
                                    <Redirect to='/admin/roles/usershow'></Redirect>
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