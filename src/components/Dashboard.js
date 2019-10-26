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
    <h1 className="headerStyle"> saved! </h1>

    <Link to="./stories"> <button  className="myOtherHomeButton"> view Story </button></Link >

    <br/>

    <Link exact to="./"> <button  className="myOtherHomeButton"> go home </button></Link >
    </>
    )}
}



export default Dashboard;