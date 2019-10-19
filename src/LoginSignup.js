import React from 'react';
import logo from './logo.svg';
import MainContainer from './components/MainContainer'
import './App.css';
import Login from  './components/Login'
import Logged from  './components/Logged'
import NavBar from  './components/NavBar'
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

    <div className="App">
  
    <header className="App-header">
    {LoggedInorNot} 


    {/* <MainContainer /> */}

  

      </header>
    </div>
    </Router>
  );
}
}

export default LoginSignup;

