import React,{Component} from 'react';
import './styles/login.css'
import {Link, Route} from 'react-router-dom';
// import FrontPage from './frontPage'


class Login extends Component {
    constructor(){
        super()

        this.state = {
            results:[]
        }

    }


    render(){
        return (
            <div className="App">
            
            
            <div className="button-container-div">
            </div>
            <Route>
           <Link to="/store"> <button className="login-button">Login</button> </Link>
            </Route>
           
            </div>
        )
    }
}
export default Login