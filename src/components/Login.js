import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import MainContainer from './MainContainer'
import {Link} from 'react-router-dom'


class Login extends Component {

    
render() {
    return ( 
    <>
    <form> 
    <div className="form-group"> 
    <br/>
        <label> email: </label> 
        <br/>
        <input 
        onChange={this.props.handleChange} autoComplete='off' 
        type='text' 
        name='name' 
        placeholder="enter your name here..."
        value={this.props.name} 
        className="field" />

        <br/>
        <label> username: </label> 
        <br/>
        <input 
        onChange={this.props.handleChange} autoComplete='off' 
        type='text' name='name' 
        placeholder="enter your name here..." 
        value={this.props.name} 
        className="field" />
        <br/>

        <label> password: </label>
        <br/>
        <input 
        onChange={this.props.handleChange} autoComplete='off' type='text' name='name' placeholder="enter your password here..." 
        value={this.props.name} 
        className="field" />
        <br/>

        <label> re-enter password: </label>
        <br/>
        <input 
        onChange={this.props.handleChange} autoComplete='off' 
        type='text' 
        name='name' 
        placeholder="enter your password here..." 
        value={this.props.name} 
        className="field" />
    
    </div>
    <div>  
    </div>
    <br/>
    <button className="myButton" onClick={this.props.doSomething}>I already have an account</button>


</form>

</>

    
    );
  }}


export default Login;