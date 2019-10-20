import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Dashboard extends Component {

   
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
    <h1> Done! </h1>
    <Link to="./stories"> View Story </Link >
    
  
    </>
    )}
}



export default Dashboard;