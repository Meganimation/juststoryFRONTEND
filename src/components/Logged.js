import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'


class Logged extends Component {

    
    render() {
    return ( 
        <div className="form-group">
<h1 className="header-one">Login</h1>
< br/>
<form> 
    <div className="form-group">
        <label> Please enter your email </label> <br/>
        <input onChange={this.props.handleChange} autoComplete='off' type='text' name='name' placeholder="Eg. Simoleans, Pokecoins, etc." value={this.props.name} className="field" />
    </div>

  
    <br/> 
    <button onClick={this.props.doSomething}className="currency-list">I don't have an account!</button>
</form>
</div>
    
    );
  }}


export default Logged;