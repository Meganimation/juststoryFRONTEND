import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'


class Logged extends Component {





    
render() {
    return ( 
    <>
    <div className="form-group">
    <form> 

        <br/>
        <label > email: </label> 
        <br/>
        <input 
        onChange={this.props.handleChange} autoComplete='off' 
        type='text' 
        name='name' 
        placeholder="enter your username here." 
        value={this.props.name} 
        className="field" />

        <br/>
        <label> password: </label> 
        <br/>
        <input 
        onChange={this.props.handleChange} autoComplete='off' 
        type='text' 
        name='name' 
        placeholder="enter your password here." 
        value={this.props.name} 
        className="field" />
        <br/>
        <br/>

    <button className="myButton" 
    onClick={this.props.doSomething}>I don't have an account!</button>
</form>
</div>
</>  

    );
}}


export default Logged;