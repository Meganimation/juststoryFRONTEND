import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'


class Login extends Component {

    
    render() {
    return ( 
        <div className="form-group">
<h1 className="header-one">Oh. </h1>
<form> 
    <div className="form-group">
        <label> It's okay. There is a first time for everything. </label> 
        <input onChange={this.props.handleChange} autoComplete='off' type='text' name='name' placeholder="Eg. Simoleans, Pokecoins, etc." value={this.props.name} className="field" />
    </div>
    <div>
    
    </div>
   
    <br/>
    <button onClick={this.props.doSomething}className="currency-list">I already have an account</button>
</form>

</div>

    
    );
  }}


export default Login;