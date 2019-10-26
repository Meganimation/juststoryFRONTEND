import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Typing from 'react-typing-animation';


class QuestionSix extends Component {


continue =  (e) => {
    e.preventDefault();
    if (this.props.questionSix === '')
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
        <h1 className="header-one">question six</h1>
        <form> 
        <label> what would you like to call the story? </label>

            <br/>

        <input 
        onChange={handleChange('questionSix')} autoComplete='off'
        type='text' 
        placeholder="Eg. Bob" 
        defaultValue={values.questionSix}
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



export default QuestionSix