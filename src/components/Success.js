import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation';


class Success extends Component {


    continue =  (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back =  (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

sayOhNo=()=> {
    var msg = new SpeechSynthesisUtterance(`Why didn't   you save the story I made for you? Is it because you said ${this.props.questionOne} when I asked how you were feeling?`);

    // Might change this so it only says it once
    msg.lang = 'en-IE'

    window.speechSynthesis.speak(msg)
}

render() {
    
    var msg = new SpeechSynthesisUtterance(`Once upon a time, there was a person called ${this.props.questionThree} who liked to browse the internet. ${this.props.questionThree} was casually browsing said internet until BOOM! Out of nowhere, a mid-tier web application suddenly appears.

    “Are you okay?” Asks an unfamiliar voice. 

    
    “I am, erm, ${this.props.questionOne}, replies ${this.props.questionThree}. “Why do you ask?”

    
    “Because I was programmed to”, says the robot. 

    "${this.props.questionFour}", asks ${this.props.questionThree} 
 
    “No”, answers the robot.

    “Why?” ponders ${this.props.questionThree}”

    “Because I am a robot with minimal to 0 intelligence, not like ${this.props.questionFive} that you seem to love so much” says the robot

    The End.`);
    
    msg.lang = this.props.questionTwo 
    {window.speechSynthesis.speak(msg)}

    return (
        <>
        <div className="myBox">
        <Typing speed = {18}>
        <h3> Once upon a time, there was a person called {this.props.questionThree} who liked to browse the internet. {this.props.questionThree} was casually browsing said internet until BOOM! Out of nowhere, a mid-tier web application suddenly appears.
<br />

“Are you okay?” Asks an unfamiliar voice. 
<br />

“I am, erm, {this.props.questionOne}, replies {this.props.questionThree}. “Why do you ask?”
<br />

“Because I was programmed to”, says the robot. 
<br />
{this.props.questionFour} asks {this.props.questionThree} 
<br />
“No”, answers the robot.
<br />
“Why?” ponders {this.props.questionThree}”
<br />
“Because I am a robot with minimal to 0 intelligence, not like {this.props.questionFive} that you seem to love so much” says the robot
<br />
The End.
 </h3>
        </Typing>

    <button className="myOtherHomeButton" onClick={this.props.saveStory}>save this story</button>

    <Link exact to="/home/" className="active">  
    <button className="myOtherHomeButton" onClick={this.sayOhNo}>go home</button>
    </Link>

    </div>
    </>

    )}
}



export default Success;