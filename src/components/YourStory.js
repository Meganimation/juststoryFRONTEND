import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class YourStory extends Component {


state = {
    voice: true
}

    deleteStory = () => { 
    var answer = window.confirm('are you sure?')
    if (answer) {
    this.deleteStoryy()
    }

    else {
    //some code
    }}




    deleteStoryy = () => { 
    if (this.props.location.state.story[0].user_id !== 1) {
    alert('People who are logged in as a guest can only delete other guests work!')
    }

    else
        
        fetch(`http://localhost:3000/stories/${this.props.location.state.story[0].id}`, {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            },
            })
            .then(resp => resp.json)
            .then(this.setState({deleted: true}))
    } 


    toggleSpeech=()=>{
    if (this.state.voice === true) {
    return this.setState({ voice: false})
    }
    if (this.state.voice === false) {
    return this.setState({ voice: true})
    }
    }


sayVoice=()=> {

    var msg = new SpeechSynthesisUtterance(`Once upon a time there was a person who hated ${this.props.location.state.story[0].questionOne}. After generating a story on some low-tier web app, they named it ${this.props.location.state.story[0].questionThree}. The End `);
    msg.lang = 'en-IE'
    

    var nomsg = new SpeechSynthesisUtterance(`.`);

    if (this.state.voice === true) {
    return  (
    window.speechSynthesis.speak(msg)
    )}    
    if (this.state.voice === false) 
    return  (window.speechSynthesis.speak(nomsg))
}
                


render() {
    return (
    <> 
    <div className="myBox">
    {
    this.state.deleted === true ? <p> <h3>this story has been deleted </h3></p>
    :
    <div>
        
        {this.sayVoice}
    <h1><u>{this.props.location.state.story[0].questionThree}</u></h1>

    <h3> Once upon a time, there was a person called {this.props.questionThree} who liked to browse the internet. {this.props.questionThree} was casually browsing said internet until BOOM! Out of nowhere, a mid-tier web application suddenly appears.
<br />

“Are you okay?” Asks an unfamiliar voice. 
<br />

“I am, erm, {this.props.location.state.story[0].questionOne}, replies {this.props.location.state.story[0].questionThree}. “Why do you ask?”
<br />

“Because I was programmed to”, says the robot. 
<br />
{this.props.location.state.story[0].questionFour} asks {this.props.location.state.story[0].questionFour} 
<br />
“No”, answers the robot.
<br />
“Why?” ponders {this.props.location.state.story[0].questionFour}”
<br />
“Because I am a robot with minimal to 0 intelligence, not like {this.props.location.state.story[0].questionFive} that you seem to love so much” says the robot
<br />
The End.
 </h3>     <button  onClick={this.deleteStory}className="myOtherHomeButton"> delete</button> <br/> <br/>  </div> 
    }

    <Link exact to="/home"> 
    <button  className="myOtherHomeButton">go home </button>
    </Link>


    <br/>
    <br/>
    
    <Link exact to="/home/stories"> 
    <button  className="myOtherHomeButton">go back to stories </button></Link> 

    </div>
    </>
    )}
}



export default YourStory;







