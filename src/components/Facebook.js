import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import MainContainer from './MainContainer';
import GenreContainer from './GenreContainer';
import HomePage from './HomePage';
import ls from 'local-storage';


export default class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        id: 0
    }





    responseFacebook = response => {
    this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email
    })

    ls.set('userID', response.userID);
    ls.set('name', response.name);
    ls.set('email', response.email);




    }
    
    
    render() {



        let fbContent;
     
        if(this.state.isLoggedIn) {
   
        
            fbContent = 
            <div> 
            <HomePage id={window.localStorage.id} name={window.localStorage.name} email={this.state.email} facebook_id={this.state.userID}     />      
            </div>;
        } 
        
        
        else {
            fbContent = ( 
            <div className = "myMainBox" >
                

            <br/><br/>
        
            
            <FacebookLogin
            appId="1378656285636593"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} /> 
            

            <br/>
            <br/>
        
             <Link exact to="/home"><button className="myOtherHomeButton">login as guest</button></Link>
             <br/>
            <br/>
          

            </div>
            );





        }



        return (
            <div >
      <Link exact to="/home">{fbContent}</Link>
        
            </div>
        )
    }
}


