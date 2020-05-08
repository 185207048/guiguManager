import React ,{Component} from 'react'
import {getusers} from '../../api/index'
import '../../assests/css/shopShow.less'

export default class UserAdd extends Component{
    state={
        users:[],
        flag_u:true, //附页面是否隐藏
        flag_d:true,

        _id:'',
        username:'',
        type:'',
    }
    componentWillMount(){
        const result = getusers();
        result.then(re=>{
            const users = re.data.data
            this.setState({users})
        })
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

    selectid=(e)=>{
        const _id = e.target.value;
        const {users} = this.state
        console.log(users)
        users.map(user=>{
            if(user._id === _id){
                this.setState({_id,username:user.username,type:user.type})
            }
        })
    }

    changename=(e) =>{
        const username = e.target.value
        this.setState({username})
    }

    changetype=(e) =>{
        const type = e.target.value
        this.setState({type})
    }
    submit=() =>{
        
    }
    render(){
       const {users,flag_u,flag_d,username,type} = this.state
        return(
            <div>
                <div className="show-update">
                    <button className='btn btn-outline-success btn-self' onClick={this.updatebtn}>&nbsp;&nbsp;修改&nbsp;&nbsp;</button>
                    <button className='btn btn-outline-success btn-self' onClick={this.deletebtn}>&nbsp;&nbsp;删除&nbsp;&nbsp;</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">管理员ID</th>
                        <th scope="col">管理员名称</th>
                        <th scope="col">管理员级别</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=>{
                                return (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.type}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
                <div className='btn-update' hidden={ flag_u}>
                    <div className='container form-container'>
                        <select className="form-control form-select" onChange={this.selectid}>
                            {
                                users.map(user=>{
                                    return (
                                        <option key={user._id}>{user._id}</option>
                                    )
                                })
                            }
                           
                        </select>
                        <div><input type="text" className='form-control form-control-self' placeholder='管理员名称' value={username} onChange={this.changename}/></div>
                        {/* <div><input type="text" className='form-control form-control-self' placeholder='管理员级别' value={type}/></div> */}
                        <div>
                            <select className='form-control form-select' value={type} onChange={this.changetype}>
                                <option value="1">超级管理员</option>
                                <option value="0">普通管理员</option>
                            </select>
                        </div>
                        <div><button className='btn btn-outline-success btn-block' >&nbsp;&nbsp;确认修改&nbsp;&nbsp;</button></div>
                    </div>
                </div>

                <div className='btn-update' hidden={ flag_d}>
                    <div className='container'>
                        <select className="form-control form-select" onChange={this.selectid}>
                            {
                                users.map(user=>{
                                    return (
                                        <option key={user._id}>{user._id}</option>
                                    )
                                })
                            }
                           
                        </select>
                        <div><input type="text" className='form-control form-select form-control-self' /></div>
                        <div><input type="text" className='form-control form-select form-control-self' /></div>
                        <div>
                            <img src='' alt="宣传图片"/>
                        </div>
                        <div><button className='btn btn-outline-success btn-block' >&nbsp;&nbsp;确认删除&nbsp;&nbsp;</button></div>
                    </div>
                </div>
            </div>
        )
    }
}