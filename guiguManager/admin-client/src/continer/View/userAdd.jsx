import React ,{Component} from 'react'
import '../../assests/css/shopAdd.less'
import {insertshop} from '../../redux/actions'
import { connect } from 'react-redux'


class ShopAdd extends Component{
    state={
        shopName:'',  //商品名称
        shopCost:'',  //商品费用
        shopBrief:'', //商品信息
        shopImg:'',  //商品
        imgs:'1.jpg'
    }

    // 获取信息
    getShopName =(e) =>{
        const shopName = e.target.value;
        this.setState({shopName});
    }

    getShopCost =(e) =>{
        const shopCost = e.target.value;
        this.setState({shopCost});
    }

    getShopBrief =(e) =>{
        const shopBrief = e.target.value;
        this.setState({shopBrief});
    }
    getShopImg =(e) =>{
        const shopImg = e.target.files[0];
        this.setState({shopImg});
    }
    // 提交操作
    submit =() =>{
        const {shopName,shopBrief,shopCost,shopImg} = this.state
        // console.log({shopName,shopBrief,shopCost,shopImg})
        this.props.insertshop({shopName,shopBrief,shopCost,shopImg});
        alert('添加成功')
        window.location.reload()
    }

    //计时器操作
    componentDidMount(){
        this.timeId= setInterval(()=>{
             this.tick()
         },5000);
     }
     tick(){
         let img = this.state.imgs
         let r_img = img === '1.jpg' ? '2.jpg' : '1.jpg'
         this.setState({
             imgs: r_img
         })
     }
     componentWillUnmount(){
         clearInterval(this.timeId)
     }

    render(){
        let campass = this.state.imgs
        return(
            <div className='shopAdd-main'>
                <h1>这是USERADD页面</h1>
                <div className='shopAdd-body container'>
                    <div className='shopAdd-form'><input type="text" className='form-control' placeholder='商品名称' onChange={this.getShopName}/></div>
                    <div className='shopAdd-form'><input type="text" className='form-control' placeholder='商品价格' onChange={this.getShopCost}/></div>
                    <div className='shopAdd-form'><textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='商品描述' onChange={this.getShopBrief}></textarea></div>
                    <div className='shopAdd-form'>
                    <div className="form-group">
                        <label >请上传图片</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" ref='files' accept="image/jpeg,image/x-png" onChange={this.getShopImg}/>
                    </div>
                    <div>
                        <button className='btn btn-outline-success btn-block' onClick={this.submit}>保存</button>
                    </div>
                </div>
            </div>
            <div className='shop-imgcont'>
                <img className='shop-images' src={require(`../../assests/images/img`+campass)} alt="轮播图图片"/>
            </div>
                
            </div>
        )
    }
}

export default connect(state =>({shop:state.shop}),{insertshop})(ShopAdd)
// export default connect(state => ({user:state.user}),{login})(Login)