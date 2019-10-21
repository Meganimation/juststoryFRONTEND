import React from 'react';
import logo from './logo.svg';
import MainContainer from './components/MainContainer'
import './App.css';
import Login from  './components/Login'
import Logged from  './components/Logged'
import GenreContainer from  './components/GenreContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class LoginSignup extends React.Component {

state = {
  name: "",
  logged_in: false
}


  doSomething=(e)=>{
    e.preventDefault()
    console.log('clicked')
    if (this.state.logged_in === false) {
    this.setState({
      logged_in: true
    })
  }
  if (this.state.logged_in === true) {
    this.setState({
      logged_in: false
    })
  }
}



goToHome=(e)=>{
  e.preventDefault()
  console.log('hello')
 
}

render() {

  const LoggedInorNot = this.state.logged_in ? 
  <Login doSomething={this.doSomething} goToHome={this.goToHome}/> :
  <Logged doSomething={this.doSomething} goToHome={this.goToHome} />

  return (
    <Router>
    <Switch>
    <Route exact path="/home" component={MainContainer}  />
    </Switch>
    
  
    <div className="App-header">
    {LoggedInorNot} 


    {/* <MainContainer /> */}

  

      </div>
   
    </Router>
  );
}
}

export default LoginSignup;

