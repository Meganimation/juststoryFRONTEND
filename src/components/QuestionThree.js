import React, { Component } from 'react'

import {Link} from 'react-router-dom'


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


render(){

const {values, handleChange } = this.props; 

            return (
        <div className="myForm">
        <h1 className="header-one">question three</h1>
            <form> 
            <label> what do you want to call this story? </label> 
            <br/>
            <input 
            onChange={handleChange('questionThree')} autoComplete='off'
            type='text' 
            placeholder="Eg. Other thingsThings." 
            defaultValue={values.questionThree}
         className="field" />
    <br/>  <br/>
    <button className="myOtherHomeButton"
label="Continue"
primary="true"
onClick={this.continue}> next </button>

    <button className="myOtherHomeButton"
label="Back"
primary="true"
onClick={this.back}> back </button>

    
</form>
 
</div>

    )     
}}


export default QuestionThree