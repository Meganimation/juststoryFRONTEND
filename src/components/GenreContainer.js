import React from 'react'
import GenreCard from './GenreCard'
import {Link} from 'react-router-dom'


class GenreContainer extends React.Component {

  allGenres=()=>{
   return this.props.genres.map((genre) => {
      return <GenreCard genre={genre}/>})
  } 

  render() {
  
  return ( 
  <div className='fixBox'>
<Link to="/home/question"> <button className="myButton">create a story</button></Link> 
  <br />
  <br />
  < Link to="/home/stories"> <button className="myButton">view stories</button></Link> 
  </div>

  );
}}

export default GenreContainer ;
