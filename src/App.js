import React, { Component } from 'react';
import './App.css';
import FrontPage from './frontPage'
import {Route, Switch} from 'react-router-dom';
import Login from './Login'
import Checkout from './Checkout'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/store" component={FrontPage}/>
        <Route path="/Checkout"component={Checkout}/> 
      </Switch>
      
        );
  }
}

export default App;
