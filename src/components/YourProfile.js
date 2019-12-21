
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


// (NOTE: Some of the things that need updating include fixing the props and localstorage issue, and making sure the right info is being shown... It might be a good idea to rewrite most of this... (Include name, stories webkitConvertPointFromPageToNode, latest story? email? picture?))

class YourProfile extends Component {


// state = {
//     name: this.props.location.state.stories[0][0].user.name
// }







    updateUserName=()=>{

     var updateName = prompt('Please enter the new name', 'name')


     if (updateName == null || updateName == "")  {
      const  txt = ''
      return txt
      } 

      
         else {
            fetch(`http://localhost:3000/users/${this.props.location.state.stories[0][0].user.id}`, {
                method: 'PATCH', 
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                
                body: JSON.stringify({
                    name: updateName
                })
            })
                .then(resp => resp.json()) 
                .then(this.setState({name: updateName}))
        }


        const   txt = `Your new name is now ${updateName}.`;
        

        return alert(txt)


          
      }
   

    
 


      

findUser=()=>{ 
    const newArr = []
    if  (this.props.location.state.stories.length < 2) {
        return 'no stories'
    }
    else 

    this.props.location.state.stories[0].map((user) => {
        if (user.user.id === 1)    {    
            newArr.push(user.user.name)
            }
        })
    return newArr.length
}



   findThing=()=>{
    const filterThing = this.state.thing.filter((thing)=>{
    return thing.name.includes(this.state.searchTerm)})
    return this.setState({
    searchedThing: filterThing
    })}

render() {

    return(
        <>
     
        <div className="myBox">
        
     <b>name:</b> {localStorage.name} 
     <br/>
     
 

       <b> stories saved: </b>{this.findUser()} 
       <br/>
       {/* <b> latest story name: </b>{this.props.location.state.stories[0].slice(-1)[0].questionSix} */}
       <br/>
       <br/>

        <button onClick={this.updateUserName} className="myHomeButton"> change name </button>
        <br/>
        <Link exact to="/home" > 
        <button className="myHomeButton">home</button>
        </Link>
        </div >
        </>
    )



}
}



export default YourProfile
