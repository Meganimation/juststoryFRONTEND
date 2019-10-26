import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Typing from 'react-typing-animation';


class QuestionFour extends Component {


continue =  (e) => {
    e.preventDefault();
    if (this.props.questionFour === '')
    alert('Please enter something!')
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
        <h1 className="header-one">question four</h1>
        <form> 
        <label> what does the world need more of? </label>

            <br/>  <br/>
            <label>
            <input 
            onChange={handleChange('questionFour')}
            name="sort"
            type="radio"
            defaultValue="You were programmed to? So you're not human?" 
            checked={null}/>
            education
            </label>
            <br />
            <br />

            <label>
            <input 
            onChange={handleChange('questionFour')}
            name="sort"
            type="radio" 
            value="Look, I don't care right now, do you know where I can find a place to sleep?"
            checked={null}/>
            sleep
            </label>
            <br />
            <br />

            <label>
            <input 
            onChange={handleChange('questionFour')}
            name="sort"
            type="radio" 
            value="Interesting... Does your programmer make good money?"
            checked={null}/>
            money
            </label>
            <br />
            <br />

            <label>
            <input 
            onChange={handleChange('questionFour')}
            name="sort"
            type="radio" 
            value="Interesting... Did that take a lot of time? "
            checked={null}/>
            time
            </label>

            <br/>
            <br/>

        <button className="myOtherHomeButton" label="Continue" primary="true" onClick={this.continue}>
        next </button>

        <button className="myOtherHomeButton" label="Back" primary="true" onClick={this.back}> back </button>    
</form>
</div>

    )     
}}



export default QuestionFour