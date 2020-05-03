import React, {Component} from 'react'

export default class Time extends Component{
    state={
        shop_day:'',
        shop_hour:''
    }

    getTime= ()=>{
        let year,mouth,day = ''
        let hour,minute,second = ''
        let myDate = new Date()
        year = myDate.getFullYear()
        mouth = myDate.getMonth()+1
        day = myDate.getDate()
        hour = myDate.getHours()
        minute = myDate.getMinutes()
        second = myDate.getSeconds()
        
        let shop_day = year+'-'+mouth+'-'+day
        let shop_hour = hour+ ':' + minute + ':' + second
        
        this.setState({shop_hour,shop_day})

    }

    componentDidMount(){
        this.timeId= setInterval(()=>{
            this.getTime()
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeId)
    }

    render(){
        const {shop_hour,shop_day} = this.state
        return(
            <div className='shop-ti'>
                <div className='shop-time'>{shop_day}</div>
                <div className='shop-time'>{shop_hour}</div>
                <div className='shop-time'>晴</div>
            </div>
        )
    }
}