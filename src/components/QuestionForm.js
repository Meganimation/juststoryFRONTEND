import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'
import {Link} from 'react-router-dom'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import QuestionFive from './QuestionFive'
import QuestionSix from './QuestionSix'
import Success from './Success'
import Dashboard from './Dashboard'

class QuestionForm extends Component {


    state = {
        step: 1,
        questionOne: "",
        questionTwo: "",
        questionThree: "",
        questionFour: "",
        questionFive: "", 
        questionSix: "",
        id: "",
        guest_id: 1
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
              questionThree: this.state.questionThree,
              questionFour: this.state.questionFour,
              questionFive: this.state.questionFive,
              questionSix: this.state.questionSix,
              user_id: 1
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
              <QuestionOne 
              nextStep={this.nextStep} 
              handleChange={this.handleChange} 
              values={values} 
              questionOne={this.state.questionOne}/>
    )

    case 2:
            return (
              <QuestionTwo 
              nextStep={this.nextStep} 
              previousStep={this.previousStep}
              handleChange={this.handleChange} 
              values={values} 
              questionTwo={this.state.questionTwo}  questionOne={this.state.questionOne} />
            )

    case 3:
              return (
                <QuestionThree 
                nextStep={this.nextStep} 
                previousStep={this.previousStep} 
                handleChange={this.handleChange} 
                values={values} 
                guestID={this.state.guest_id}
                questionThree={this.state.questionThree}/>
              )


    case 4:
      return (
        <QuestionFour
        nextStep={this.nextStep} 
        previousStep={this.previousStep} 
        handleChange={this.handleChange}
        values={values} 
        questionFour={this.state.questionFour}  />
      )


      case 5:
        return (
          <QuestionFive
          nextStep={this.nextStep} 
          previousStep={this.previousStep} 
          handleChange={this.handleChange}
          questionFive={this.state.questionFive} 
          values={values}  />
        )

        
        case 6:
          return (
            <QuestionSix
            nextStep={this.nextStep} 
            previousStep={this.previousStep} 
            handleChange={this.handleChange}
            questionSix={this.state.questionSix} 
            values={values}  />
          )
    
    case 7:
              return (
                <Success 
                questionOne={this.state.questionOne}
                questionTwo={this.state.questionTwo} 
                questionThree={this.state.questionThree} 
                questionFour={this.state.questionFour} 
                questionFive={this.state.questionFive} 
                questionSix={this.state.questionSix}
                saveStory={this.saveStory}/>
              )

              case 0:
                return (
                  <Dashboard />
                )
            
          }
      }
}

export default QuestionForm