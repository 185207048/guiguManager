import React ,{Component} from 'react'
import '../../assests/css/shop.less'
import MyNavLink from '../MyNavLink/myNavLink'
import {Switch, Route, Redirect} from 'react-router-dom'
import Time from '../../component/time'
import UserAdd from '../View/userAdd'
import UserShow from '../View/userShow'

export default class User extends Component{

    render(){
        return(
            <div className = 'shop'>
                <div className='shop-head'>
                    <div className='shop-title'>商品管理</div>
                   <Time></Time>
                </div>
                <div className='shop-body'>
                    <div className='shop-main'>
                        <div className='shop-item container'>
                            {/* 
                                商品字段:
                                    ID
                                    名字
                                    图片
                                    简介
                                    价格
                                    
                                对商品操作：
                                    增删改查

                                排板：
                                    增加
                                    ID     名字     图片       简介     价格        修改        删除
                            */}
                            <div className='shop-item-body'>
                                <div className='shop-add'>
                                    <ul className="nav nav-tabs">
                                        <li className="shop-li"><MyNavLink to='/admin/user/usershow'>查看商品</MyNavLink></li>
                                        <li className="shop-li"><MyNavLink to='/admin/user/useradd'>添加商品</MyNavLink></li>
                                    </ul>
                                </div>
                                <div className='shop-contain'>
                                <Switch>
                                    <Route path='/admin/user/usershow' component={UserShow}/>
                                    <Route path='/admin/user/useradd' component={UserAdd}/>
                                    <Redirect to='/admin/user/usershow'></Redirect>
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