import React, { Component } from 'react'



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
return (
    <>
    <h1> Once upon a time there a person who hated {this.props.questionOne}, because he dreams of {this.props.questionTwo}. The End </h1>
    </>
    )}
}



export default Success;