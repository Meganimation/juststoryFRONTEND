import React, { Component } from 'react'

import {Link} from 'react-router-dom'
{/* <Link to="/home" className="currency-list">submit</Link> */}

class QuestionTwo extends Component {



continue =  (e) => {
    e.preventDefault();
    if (this.props.questionTwo === '')
    alert('Please answer the question!')
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
        <h1 className="header-one">question two</h1>
            <form> 
            <label> whats your favorite meal? </label> <br/>
            <input 
            onChange={handleChange('questionTwo')} autoComplete='off'
            type='text' 
            placeholder="Eg. Other thingsThings." 
            defaultValue={values.questionTwo}
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


export default QuestionTwo