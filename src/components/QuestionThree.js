import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Typing from 'react-typing-animation';


class QuestionThree extends Component {


continue =  (e) => {
    e.preventDefault();
    if (this.props.questionThree === '')
    alert('Please enter a title!')
    else
    this.props.nextStep();
}

back =  (e) => {
    e.preventDefault();
    this.props.previousStep();
}


containsWord=()=>{
debugger

    if  (localStorage.userID.length <= 3) {
    return (
        <>
        i see you're logged in as a guest.
        <br/>
        mind telling me what your name is?
        </>) 
    }

    else return `what would you like to call your main character, ${localStorage.name}?`
}


render(){


const {values, handleChange } = this.props; 

    return (
        <div className="myForm">
        <h1 className="header-one">question three</h1>
        <form> 
        <label> {this.containsWord()} </label>

            <br/>

        <input className="myBox"
        onChange={handleChange('questionThree')} autoComplete='off'
        type='text' 
        placeholder="Eg. Bob" 
        defaultValue={values.questionThree}
        className="field" />

            <br/>
            <br/>

        <button className="myOtherHomeButton" label="Continue" primary="true" onClick={this.continue}>
        next </button>

        <button className="myOtherHomeButton" label="Back" primary="true" onClick={this.back}> back </button>    
</form>
</div>

    )     
}}



export default QuestionThree