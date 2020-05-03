import React ,{Component} from 'react'
import '../../assests/css/shop.less'
import MyNavLink from '../MyNavLink/myNavLink'
import {Switch, Route, Redirect} from 'react-router-dom'
import ShopAd from '../View/shopAd'
import ShopAdd from '../View/shopAdd'
import ShopShow from '../View/shopShow'
import Time from '../../component/time'

export default class Shop extends Component{


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
                                        <li className="shop-li"><MyNavLink to='/admin/shop/shopad'>商品</MyNavLink></li>
                                        <li className="shop-li"><MyNavLink to='/admin/shop/shopshow'>查看商品</MyNavLink></li>
                                        <li className="shop-li"><MyNavLink to='/admin/shop/shopadd'>添加商品</MyNavLink></li>
                                    </ul>
                                </div>
                                <div className='shop-contain'>
                                <Switch>
                                    <Route path='/admin/shop/shopad' component={ShopAd}/>
                                    <Route path='/admin/shop/shopshow' component={ShopShow}/>
                                    <Route path='/admin/shop/shopadd' component={ShopAdd}/>
                                    <Redirect to='/admin/shop/shopad'></Redirect>
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