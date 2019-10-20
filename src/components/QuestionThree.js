import React, { Component } from 'react'

import {Link} from 'react-router-dom'


class QuestionThree extends Component {



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
        <h1 className="header-one">Question 3</h1>
        < br/>
            <form> 
            <div className="form-group">
            <label> What do you want to call this Story? </label> <br/>
            <input 
            onChange={handleChange('questionThree')} autoComplete='off'
            type='text' 
            placeholder="Eg. Other thingsThings." 
            defaultValue={values.questionThree}
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


export default QuestionThree