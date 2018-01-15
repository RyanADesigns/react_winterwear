import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPage from './frontPage'
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/store" component={FrontPage}/> 
      </Switch>
      
        );
  }
}

export default App;
