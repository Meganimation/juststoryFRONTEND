import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'


class Login extends Component {

    
    render() {
    return ( 
        <div className="form-group">
<h1 className="header-one">Sign up</h1>
< br/>
<form> 
    <div className="form-group">
        <label> Whats your name? </label> <br/>
        <input onChange={this.props.handleChange} autoComplete='off' type='text' name='name' placeholder="Eg. Simoleans, Pokecoins, etc." value={this.props.name} className="field" />
    </div>
    <div>
    <Router>
        
    <Route exact path="/home" component={HomePage}  />
    <Link exact to="home"> Sign up and log in </Link>
    </Router>
    </div>
   
    <br/>
    <button onClick={this.props.doSomething}className="currency-list">I already have an account</button>
</form>

</div>

    
    );
  }}


export default Login;