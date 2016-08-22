import React, { Component } from 'react'

class Navbar extends Component {
  logOut(event) {
    const { users } = this.props.actions
    users.logOut()

  }
  componentWillMount() {
    const { user } = this.props
    this.username = JSON.parse(user.username)
    this.loggedin = user.loggedin
  }
  renderAuth() {
    if (this.loggedin) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><p className="navbar-text">Hello, @{this.username}</p></li>
          <li><a onClick={this.logOut.bind(this)} className="nav-link" href="#">Logout</a></li>
        </ul>)
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a className="nav-link" href="/signup">Signup</a></li>
          <li><a className="nav-link" href="/login">Login</a></li>
        </ul>)
    }
  }
  render() {
    return(
    <nav className="navbar navbar-fixed-top">
    <div className="container-fluid">
    <div className="navbar-header">
    <a className="navbar-brand" href="/">Devolio</a>
    </div>
    <div>
      <ul className="nav navbar-nav">
        <li><a className="nav-link nav-link-active" href="/">#devchat</a></li>
        <li><a className="nav-link" href="#">Blackboard</a></li>
        <li><a className="nav-link" href="#">Campus</a></li>
        <li><a className="nav-link" href="#">Profile</a></li>
      </ul>
      {this.renderAuth()}
      </div>
      
    </div>
    </nav>
           )
  }
}

export default Navbar
