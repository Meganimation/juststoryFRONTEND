import React, { Component } from 'react'
import QuestionForm from './QuestionForm'
import NavBar from  './NavBar'
import GenreCard from './GenreCard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'




class MainContainer extends Component {
  render() {
  return ( 
    
    <>
<Router>
    <div> Hello and  Welcome to the MAIN container<div />
    <Route exact path="/home" component={GenreCard} />

    
    <Route exact path="/home/question" component={QuestionForm}  />
    <Link to="/home/question"> Click me </Link>

  </div>
  </Router>
   </>
  
  );
}}

export default MainContainer;
