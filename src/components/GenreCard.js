import React from 'react'



class GenreCard extends React.Component {

  
  renderFunction=(event)=>{

    if (event.target.name === "Horror"){
    console.log('It equals Horror!')
    }
    else console.log(this.props)
  }


 

  render() {
  return ( 
    <div> 
  This is the Genre Card, Please Select a Genre: <li onClick={this.renderFunction}>{this.props.genre}<br /></li>
</div>
   
  
  );
}}

export default GenreCard ;
