import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

render() {

return (
<div className="topnav">
  <Link exact to="/home/stories" className="active">Stories</Link>
  <br/>
  <br/>
  <br/>
  <Link exact to="/home" className="active">Home</Link>
  <br/>

</div>
)

}}

export default NavBar