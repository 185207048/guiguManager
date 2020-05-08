import React,{Component} from 'react'
import { getcustomers } from '../../api/index'

export default class UserAdd extends Component{
    state = {
        customers:[],
       
    }

    componentWillMount(){
        const result = getcustomers()
        result.then(re => {
            const customers = re.data.data
            console.log(re)
            this.setState({customers})
        })
        
    }

    render(){
        const {customers} = this.state
       
        return(
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">用户ID</th>
                            <th scope="col">用户名称</th>
                            <th scope="col">用户购买内容</th>
                            <th scope="col">用户联系方式</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                customers.map(customer=>{
                                    return (
                                        <tr key={customer._id}>
                                            <td>{customer._id}</td>
                                            <td>{customer.customername}</td>
                                            <td>{customer.customercon}</td>
                                            <td>{customer.customerphone}</td>
                                        </tr>
                                    )
                                })
                           }
                        </tbody>
                    </table>
                </div>
                   
            )
    }
}