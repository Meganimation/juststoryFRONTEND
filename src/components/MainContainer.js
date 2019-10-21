import React, { Component } from 'react'
import QuestionForm from './QuestionForm'
import NavBar from  './NavBar'
import GenreContainer from './GenreContainer'
import StoryContainer from './StoryContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import YourStory from './YourStory'



class MainContainer extends Component {

state = {
  step: 1,
  stories: [],
  users: [],
  genres: []
}


componentDidMount(){
  fetch('http://localhost:3000/stories')
  .then(res => res.json())
  .then(data => this.setState({stories: data}))
}

componentDidMount(){
  fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(data => this.setState({users: data}))
}

componentDidMount(){
  fetch('http://localhost:3000/genres')
  .then(res => res.json())
  .then(data => this.setState({genres: data}))
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
 

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
  return ( 
    <>

    <Router>
    <NavBar />  
    <Switch>
    <Route exact path="/home" component={GenreContainer}  />
    <Route exact path="/home/stories" component={StoryContainer} />
    <Route exact path="/home/question" component={QuestionForm} />
    <Route exact path="/home/stories/yourstory" component={YourStory} />
    </Switch>
    </Router>
    </>  
  );
}}


export default MainContainer;
