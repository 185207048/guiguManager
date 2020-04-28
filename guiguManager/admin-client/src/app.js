import React ,{Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './continer/Login/login'
import Admin from './continer/Admin/admin'

export default class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route component={Login}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}