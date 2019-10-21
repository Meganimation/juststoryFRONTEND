import React, { Component } from 'react'

import {Link} from 'react-router-dom'
{/* <Link to="/home" className="currency-list">submit</Link> */}

class QuestionOne extends Component {



continue =  (e) => {
   
    e.preventDefault();
    if (this.props.questionOne === '')
    alert('Please answer the question!')
    else
    //process form
    this.props.nextStep();
}


render(){

const {values, handleChange } = this.props; 

            return (
        <div className="myForm">
        <h1 className="header-one">let's begin</h1>
       
            <form> 
            <label> how are you? </label>
           <br/>
            <input 
            onChange={handleChange('questionOne')} autoComplete='off'
            type='text' 
            placeholder="Eg. Things." 
            defaultValue={values.questionOne}
         className="field" />
  <br/>  <br/>
  <button className="myOtherHomeButton"
label="Continue"
primary="true"
onClick={this.continue}> next </button>
</form>
 
</div>

    )

            
}}


export default QuestionOne