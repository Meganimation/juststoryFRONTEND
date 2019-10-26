import React from 'react'
import GenreCard from './GenreCard'
import {Link} from 'react-router-dom'


class GenreContainer extends React.Component {


  state = {
    user: [],
    stories: []
  }



  componentDidMount() {
    fetch(`http://localhost:3000/stories`)
    .then(res => res.json())
    .then(data => this.setState({stories: [data] }) 
    )
  }

 

  allGenres=()=>{
    return this.props.genres.map((genre) => {
    return <GenreCard genre={genre}/>})
  } 



  render() {

  return ( 
    <div className='fixBox'>

    <Link exact to={{pathname: "/home/question" }} > <button className="myButton">create a story</button></ Link> 
    <br />
    <br />
    <Link exact to={{ pathname: "/home/stories"}}> <button className="myButton">view stories</button></Link> 
    <br />
    <br />


    <Link exact to={{ pathname: "/home/profile", 
        state: { stories: this.state.stories}}}> 
   <button className="myButton">  view profile </button>
   </ Link> 

  
    </div>
  // look up exact render

  );
}}

export default GenreContainer ;
