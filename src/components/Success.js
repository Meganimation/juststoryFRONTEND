import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class Success extends Component {

   
    continue =  (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back =  (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

render() {

    var msg = new SpeechSynthesisUtterance(`Once upon a time there was a person who hated ${this.props.questionOne}, because he dreams of ${this.props.questionTwo}. The End`);


    {window.speechSynthesis.speak(msg)}

return (
    <>
       <div className="myBox">
    <h1> Once upon a time there was a person who hated {this.props.questionOne}, because he dreams of {this.props.questionTwo}. The End </h1>
    <button className="myOtherHomeButton" onClick={this.props.saveStory}>save this story</button>
    <Link exact to="/home/" className="active">  <button className="myOtherHomeButton" onClick={this.props.saveStory}>go home</button></Link>
    </div>
    </>
    )}
}



export default Success;