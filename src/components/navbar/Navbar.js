import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return(
    <nav className="navbar navbar-fixed-top">
    <div className="container-fluid">
    <div className="navbar-header">
    <a className="navbar-brand" href="#">Devolio</a>
    </div>
    <div>
      <ul className="nav navbar-nav">
        <li><a className="nav-link nav-link-active" href="#">#devchat</a></li>
        <li><a className="nav-link" href="#">Blackboard</a></li>
        <li><a className="nav-link" href="#">Campus</a></li>
        <li><a className="nav-link" href="#">Profile</a></li>
      </ul>
      </div>
      
    </div>
    </nav>
           )
  }
}

export default Navbar
