import React, { Component } from 'react'
import Typing from 'react-typing-animation';


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
        <h1 className="header-one">question one</h1>
        <form> 

        <label> how are you feeling today?</label>

            <br/>

        <input className="textBox"
        onChange={handleChange('questionOne')} autoComplete='off'
        type='text' 
        placeholder="Eg. Things." 
        defaultValue={values.questionOne}
        className="field" />

            <br/> 
            <br/>

        <button className="myOtherHomeButton"
        label="Continue"
        primary="true"
        onClick={this.continue}> next </button>
        </form>
        </div>
    )
}}


export default QuestionOne