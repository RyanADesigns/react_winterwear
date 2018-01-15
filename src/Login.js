import React,{Component} from 'react';
import './styles/login.css'
import {Link, Route} from 'react-router-dom';
import FrontPage from './frontPage'


class Login extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return (
            <div className="App">
            <h1>Home</h1>
            <Route>
           <Link to="/store"> <button className="login-button">Login</button> </Link>
           </Route>
            </div>
        )
    }
}
export default Login