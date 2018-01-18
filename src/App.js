import React, { Component } from 'react';
import './App.css';
import FrontPage from './frontPage'
import {Route, Switch} from 'react-router-dom';
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
