import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import {Link} from 'react-router-dom'


class NavBar extends React.Component {

render() {

return (
<div className="topnav">
  <Link to="/stories" className="active">Stories</Link>

  <a href="#news">Profile</a>

  <a href="#contact">Saved Stories</a>

  <a href="#about">About</a>
</div>
)

}}

export default NavBar