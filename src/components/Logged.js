import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import MainContainer from './MainContainer'


class Logged extends Component {


state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
}
responseFacebook = response => {
    console.log(response)
}

componentClicked = () => {
    console.log('clicked!')
}
    
render() {


let fbContent;

if(this.state.isLoggedIn) {
   
        
    fbContent = 
    <div> 
    <MainContainer id={window.localStorage.id} name={window.localStorage.name} email={this.state.email} facebook_id={this.state.userID}     />      
    

    </div>;

} else {
    fbContent = ( 
    <div className = "myMainBox" >
        

    <br/><br/>

    
    <FacebookLogin
    appId="1378656285636593"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} /> 
    

    <br/>
    <br/>


    </div> )}





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

    {/* <button className="myButton" 
    onClick={this.props.doSomething}>I don't have an account!</button> */}
    
     {fbContent} 
    {/* the button for facebook login */}
</form>
</div>
</>  

    );
}}


export default Logged;