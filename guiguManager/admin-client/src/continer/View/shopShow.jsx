import React ,{Component} from 'react'
import {getshops} from '../../api/index'
import {deleteshop,updateshop} from '../../api/index'
import '../../assests/css/shopShow.less'

export default class ShopShow extends Component{
    state={
        shoplist:[],
        flag_u:true, //附页面是否隐藏
        flag_d:true, 
        
        _id:'',
        shopname:'',
        shopcost:'',
        shopimg:'0',
    }

    updatebtn= ()=>{
        let flag_u= this.state.flag_u;
        flag_u = ! flag_u
        this.setState({ flag_u})
    }

    deletebtn= ()=>{
        let flag_d = this.state.flag_d;
        flag_d = ! flag_d
        this.setState({flag_d})
    }

    selectid= (e)=>{
        const id = e.target.value;
        const {shoplist} = this.state
        shoplist.map(shop => {
            if(shop._id === id){
                this.setState({
                    shopname:shop.shopname,
                    shopcost:shop.shopcost,
                    shopimg:shop.shopimg,
                    _id:shop._id
                })
            }
            return true
        })
    }

    updatename =(e) =>{
        const shopname = e.target.value
        this.setState({shopname})

    }

    updatecost =(e) =>{
        const shopcost = e.target.value
        this.setState({shopcost})

    }

    updateShopImg =(e) =>{
        const shopimg = e.target.value
        this.setState({shopimg})
    }
    componentWillMount(){
        const shops = getshops()
        // console.log
        shops.then(re=>{
            // console.log(re.data.data)
            this.setState({shoplist:re.data.data})
        })
        // console.log(shops)
    }

    // 提交修改
    updateshop= ()=>{
        const {_id,shopname,shopcost,shopimg} = this.state
        if(shopname === '' ||shopcost === '' || shopimg === '' ){
            // return addShopError('不能有信息为空')
            alert('不能有数据为空')       
            return
        }
        const pattern = /^[0-9]*$/;                                 //正则表达式判断是否为数字
        if(!pattern.test(shopcost)){
            // return addShopError('商品价格必须是数字')
            alert('商品价格必须是数字')
            return
        }
        updateshop({_id,shopname,shopcost,shopimg})
        alert('修改成功');
        window.location.reload()
    }

    // 提交删除
    deleteshop= ()=>{
        const {_id} = this.state;
        // console.log(_id)
        deleteshop(_id);
        alert('删除成功');
        window.location.reload()
    }

    render(){
        const { flag_u,flag_d} = this.state
        const shoplist = this.state.shoplist
        const {shopname, shopcost} = this.state
        return(
            <div>
                <div className="show-update">
                    <button className='btn btn-outline-success' onClick={this.updatebtn}>&nbsp;&nbsp;修改&nbsp;&nbsp;</button>
                    <button className='btn btn-outline-success' onClick={this.deletebtn}>&nbsp;&nbsp;删除&nbsp;&nbsp;</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">商品ID</th>
                        <th scope="col">商品名称</th>
                        <th scope="col">商品价格</th>
                        <th scope="col">商品简介</th>
                        <th scope="col">商品销售量</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shoplist.map(shop=>{
                                return (
                                    <tr key={shop._id}>
                                        <td>{shop._id}</td>
                                        <td>{shop.shopname}</td>
                                        <td>{shop.shopcost}</td>
                                        <td>{shop.shopbrief}</td>
                                        <td>{shop.shoporder}</td> 
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
                <div className='btn-update' hidden={ flag_u}>
                    <div className='container'>
                        <select className="form-control form-select" onChange={this.selectid}>
                            {
                                shoplist.map(shop=>{
                                    return (
                                        <option key={shop._id}>{shop._id}</option>
                                    )
                                })
                            }
                           
                        </select>
                        <div><input type="text" className='form-control' placeholder='商品名称' value={shopname} onChange={this.updatename }/></div>
                        <div><input type="text" className='form-control' placeholder='商品价格' value={shopcost} onChange={this.updatecost}/></div>
                        <div className="form-group">
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" ref='files' accept="image/jpeg,image/x-png" onChange={this.updateShopImg}/>
                        </div>
                        <div><button className='btn btn-outline-success btn-block' onClick={this.updateshop}>&nbsp;&nbsp;确认修改&nbsp;&nbsp;</button></div>
                    </div>
                </div>

                <div className='btn-update' hidden={ flag_d}>
                    <div className='container'>
                        <select className="form-control form-select" onChange={this.selectid}>
                            {
                                shoplist.map(shop=>{
                                    return (
                                        <option key={shop._id}>{shop._id}</option>
                                    )
                                })
                            }
                           
                        </select>
                        <div><input type="text" className='form-control' placeholder='商品名称' value={shopname}/></div>
                        <div><input type="text" className='form-control' placeholder='商品价格' value={shopcost}/></div>
                        <div>
                            <img src='' alt="宣传图片"/>
                        </div>
                        <div><button className='btn btn-outline-success btn-block' onClick={this.deleteshop}>&nbsp;&nbsp;确认删除&nbsp;&nbsp;</button></div>
                    </div>
                </div>
            </div>
        )
    }
}