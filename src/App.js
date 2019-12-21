import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import './App.css';
import LoginSignup from  './LoginSignup'
// import NavBar from  './components/NavBar'
import HomePage from  './components/HomePage'
import Stories from  './components/Story'
import { Link } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import Facebook from './components/Facebook';

class App extends React.Component {


  state = {
    user: []
  }



goToHome=(e)=>{
  e.preventDefault()
}

render() {
  return (
    
    <BrowserRouter>  
    <div className="App">
    <header className="App-header">
    <Switch>
    <Route exact path="/" component={Facebook} />
    <Route exact path="/home" component={HomePage}/>
    </Switch>
    {/* <Link exact to={{ pathname: "/home", state: {user: this.state.user} }}><button onClick={this.loadUser}className="myButton">login as guest</button></Link> */}
   
      </header>
    </div>
    </BrowserRouter>
  );
}
}

export default App;

