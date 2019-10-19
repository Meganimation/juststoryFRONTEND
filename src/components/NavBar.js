import React from 'react'


class NavBar extends React.Component {

render() {

return (
<div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">Profile</a>
  <a href="#contact">Saved Stories</a>
  <a href="#about">About</a>
</div>
)

}}

export default NavBar