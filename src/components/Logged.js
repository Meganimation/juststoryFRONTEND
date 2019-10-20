import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'


class Logged extends Component {

    
    render() {
    return ( 
        <div className="form-group">
<form> 
    <div className="form-group">
    <h2 className="header-one">hello. would you like to log in?</h2>
        <label> e m a i l </label> 
        <input onChange={this.props.handleChange} autoComplete='off' type='text' name='name' placeholder="enter your email here." value={this.props.name} className="field" />
    </div>
    <button onClick={this.props.doSomething}className="currency-list">I don't have an account!</button>
</form>
</div>
    
    );
  }}


export default Logged;