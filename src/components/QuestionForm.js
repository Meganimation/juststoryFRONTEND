import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'
import {Link} from 'react-router-dom'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import Success from './Success'

class QuestionForm extends Component {


    state = {
        step: 1,
        questionOne: "",
        questionTwo: ""
      }

      nextStep=()=> {
        const {step} = this.state;
        this.setState({
          step: step + 1
        })
      }
     
      previousStep=()=> {
        const {step} = this.state;
        this.setState({
          step: step - 1
        })
      }
   


      handleChange= input => e  =>{ 
          this.setState({
            [input]: e.target.value
          })
        }

render(){
    const {step} = this.state
    const {questionOne} = this.state
    const values = {questionOne}

    switch(step) {
        case 1:
            return (
                <QuestionOne nextStep={this.nextStep} handleChange={this.handleChange} values={values} questionOne={this.state.questionOne}/>
//         <div className="form-group">
// <h1 className="header-one">Question 1</h1>
// < br/>
// <form onSubmit={(e)=>this.handlesubmit(e, this.state)}> 
//     <div className="form-group">
//         <label> What thing do you like? </label> <br/>
//         <input onChange={this.handleChange} autoComplete='off' type='text' name='name' placeholder="Eg. Things." value={this.state.questionOne} className="field" />
//     </div>
//     <Link to="/home" className="currency-list"><button onClick={(e)=>this.props.handlesubmit(e, this.state)}>submit</button></Link>
// </form>
// </div>
    )

    case 2:
            return (
              <QuestionTwo nextStep={this.nextStep} previousStep={this.previousStep} handleChange={this.handleChange} values={values} questionTwo={this.state.questionTwo}/>
            )

            case 3:
              return (
                <Success questionOne={this.state.questionOne}
                questionTwo={this.state.questionTwo}/>
              )
            
}}
}

export default QuestionForm