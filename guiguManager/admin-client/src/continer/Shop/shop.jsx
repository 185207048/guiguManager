import React ,{Component} from 'react'
import '../../assests/css/shop.less'

export default class Shop extends Component{

    render(){
        return(
            <div className = 'shop'>
                <div className='shop-head'>
                    <div className='shop-title'>商品管理</div>
                    <div className='shop-ti'>
                        <div className='shop-time'>2019-5-14</div>
                        <div className='shop-time'>07:02:56</div>
                        <div className='shop-time'>晴</div>
                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}