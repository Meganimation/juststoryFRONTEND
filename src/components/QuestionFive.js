import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Typing from 'react-typing-animation';


class QuestionFive extends Component {


continue =  (e) => {
    e.preventDefault();
    if (this.props.questionFive === '')
    alert('Please enter something!')
    else
    this.props.nextStep();
}

back =  (e) => {
    e.preventDefault();
    this.props.previousStep();
}


containsWord=()=>{


    if  (this.props.guestID === 1) {
    return (
        <>
        i see you're logged in as a guest.
        <br/>
        mind telling me what your name is?
        </>) 
    }

    else return 'what would you like to call your main character?.'
}


render(){
    

const {values, handleChange } = this.props; 

    return (
        <div className="myForm">
        <h1 className="header-one">question five</h1>
        <form> 
        <label>  what is your favorite invention? </label>

            <br/>

        <input 
        onChange={handleChange('questionFive')} autoComplete='off'
        type='text' 
        placeholder="Eg. The LightBulb" 
        defaultValue={values.questionFive}
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



export default QuestionFive