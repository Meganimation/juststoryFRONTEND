import React, { Component } from 'react'

import {Link} from 'react-router-dom'
{/* <Link to="/home" className="currency-list">submit</Link> */}

class QuestionTwo extends Component {



continue =  (e) => {
    e.preventDefault();
    this.props.nextStep();
}

back =  (e) => {
    e.preventDefault();
    this.props.previousStep();
}


render(){

const {values, handleChange } = this.props; 

            return (
        <div className="form-group">
        <h1 className="header-one">Question 2</h1>
        < br/>
            <form> 
            <div className="form-group">
            <label> What other things do you like? </label> <br/>
            <input 
            onChange={handleChange('questionTwo')} autoComplete='off'
            type='text' 
            placeholder="Eg. Other thingsThings." 
            defaultValue={values.questionTwo}
         className="field" />
    </div>

    <button 
label="Back"
primary="true"
onClick={this.back}> Back </button>

    <button 
label="Continue"
primary="true"
onClick={this.continue}> Next </button>

</form>
 
</div>

    )

            
}}


export default QuestionTwo