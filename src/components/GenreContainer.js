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
    <div> Hello and  Welcome to the Genre Container<div />
<p> Select a Genre </p>
< Link to="/home/question">xx</Link> 
  </div>
  );
}}

export default GenreContainer ;
