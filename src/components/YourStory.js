import React, { Component } from 'react'
import {Link} from 'react-router-dom'




class YourStory extends Component {


state={
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
    var msg = new SpeechSynthesisUtterance(`Once upon a time there was a person who hated ${this.props.location.state.story[0].questionOne}, because he dreams of ${this.props.location.state.story[0].questionTwo}. The End`);

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
    {this.state.deleted === true ? <p> <h3>this story has been deleted </h3></p>
    :
    <div>
        {this.sayVoice()}
    <h1><u>{this.props.location.state.story[0].questionThree}</u></h1>
    <h3> Once upon a time there was a person who hated {this.props.location.state.story[0].questionOne} , because he dreams of {this.props.location.state.story[0].questionTwo}. The End.  <br/>  <br/>  <button  className="myOtherHomeButton" onClick={this.deleteStory}>delete</button> </h3></div> }

    <Link exact to="/home"> <button  className="myOtherHomeButton">go home </button></Link>
    <br/>
    <br/>
    
    <Link exact to="/home/stories"> <button  className="myOtherHomeButton">go back to stories </button></Link> 

    </div>
    </>
    )}
}



export default YourStory;