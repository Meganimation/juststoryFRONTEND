import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

render() {

return (
<div className="topnav">
  <Link exact to="/home/stories" className="active">Stories</Link>
  <br/>
  <a href="#news">Profile</a>
  <br/>
  <a href="#contact">Saved Stories</a>
  <br/>
  <a href="#about">About</a>
</div>
)

}}

export default NavBar