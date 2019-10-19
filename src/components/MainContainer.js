import React, { Component } from 'react'
import QuestionForm from './QuestionForm'
import NavBar from  './NavBar'
import GenreCard from './GenreCard'
import Stories from './Stories'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'




class MainContainer extends Component {

state = {
  step: 1,
words: ""
}



handlesubmit=(e, newThing) => { 
  console.log('anything')
  this.setState({
  words: [newThing]})
  debugger
  }


handlechange = input => e => { 
this.setState({[input]: e.target.value})
  }
 


  render() {

  return ( 
    <>
    <Router>
    <NavBar /> 
    <div> Hello and  Welcome to the MAIN container<div />
    <Switch>
    <Route exact path="/stories" component={Stories} />
    <Route exact path="/home" component={GenreCard}  />
    <Route exact path="/home/question" component={QuestionForm} />
    </Switch>
    <Link to="/home/question" > Click me </Link>
      </div>
    </Router>
    </>  
  );
}}


export default MainContainer;
