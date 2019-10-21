import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'
import {Link} from 'react-router-dom'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import Success from './Success'

import Dashboard from './Dashboard'

class QuestionForm extends Component {


    state = {
        step: 1,
        questionOne: "",
        questionTwo: "",
        questionThree: "",
        id: ""
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


      saveStory = () => { 
        fetch('http://localhost:3000/stories', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              questionOne: this.state.questionOne,
              questionTwo: this.state.questionTwo,
              questionThree: this.state.questionThree
            })
          })
          .then(this.setState({step: 0}))
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
    )

    case 2:
            return (
              <QuestionTwo nextStep={this.nextStep} previousStep={this.previousStep} handleChange={this.handleChange} values={values} questionTwo={this.state.questionTwo}/>
            )

    case 3:
              return (
                <QuestionThree nextStep={this.nextStep} previousStep={this.previousStep}  handleChange={this.handleChange} values={values} questionThree={this.state.questionThree} />
              )

   case 4:
              return (
                <Success questionOne={this.state.questionOne}
                questionTwo={this.state.questionTwo} questionThree={this.state.questionThree} saveStory={this.saveStory}/>
              )

             

              case 0:
                return (
                  <Dashboard />
                )
            
}}
}

export default QuestionForm