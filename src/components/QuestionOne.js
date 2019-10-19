import React, { Component } from 'react'

import {Link} from 'react-router-dom'
{/* <Link to="/home" className="currency-list">submit</Link> */}

class QuestionOne extends Component {



continue =  (e) => {
    e.preventDefault();
    //process form
    this.props.nextStep();
}


render(){

const {values, handleChange } = this.props; 

            return (
        <div className="form-group">
        <h1 className="header-one">Question 1</h1>
        < br/>
            <form> 
            <div className="form-group">
            <label> What thing do you like? </label> <br/>
            <input 
            onChange={handleChange('questionOne')} autoComplete='off'
            type='text' 
            placeholder="Eg. Things." 
            defaultValue={values.questionOne}
         className="field" />
    </div>
    <button 
label="Continue"
primary="true"
onClick={this.continue}> Next </button>
</form>
 
</div>

    )

            
}}


export default QuestionOne