import React, { Component } from 'react'
import {Link} from 'react-router-dom'




class YourStory extends Component {


state={
    deleted: false
}


    deleteStory = () => { 
 var answer = window.confirm('are you sure?')
 if (answer) {
    this.deleteStoryy()
}
else {
    //some code
}
    }




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
  

render() {
    debugger
return (
    <> {this.state.deleted === true ? <p> This story has been deleted! </p> :
    <h1> Once upon a time there a person who hated {this.props.location.state.story[0].questionOne} , because he dreams of {this.props.location.state.story[0].questionTwo}.   <button onClick={this.deleteStory}>Delete this</button></h1> }
    <Link exact to="/home"> go Home </Link>
  
    </>
    )}
}



export default YourStory;