import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LoginSignup from  './LoginSignup'
// import NavBar from  './components/NavBar'
import HomePage from  './components/HomePage'


import { Link } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';

class App extends React.Component {




goToHome=(e)=>{
  e.preventDefault()


}

render() {



  return (
    
    <BrowserRouter>  
    <div className="App">
      
    {/* <NavBar /> */}
    <header className="App-header">
    <Route exact path="/" component={LoginSignup} />
   
  
    hello
   
      </header>
    </div>
    </BrowserRouter>
  );
}
}

export default App;

