import React ,{Component} from 'react'
import '../../assests/css/shopAd.less'
import shopground from '../../assests/images/shopground.jpg'

export default class ShopAd extends Component{
    state = {
        imgArray:[

        ]
    }

    render(){
        return(
            <div>
                <div className='ad-title'>
                    <img src={shopground} alt='' className='ad-back'></img>
                </div>
            </div>
        )
    }
}