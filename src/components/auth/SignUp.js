import React, { Component } from 'react'

class Signup extends Component {
  handleSubmit(event) {
    event.preventDefault()
    var { username, email, password } = this.refs
    if (username.value !== '' & password.value !== '' & email.value !== '') {
      var username = JSON.stringify(username.value)
      var email = JSON.stringify(email.value)
      var password = JSON.stringify(password.value)

      const { users } = this.props.actions
      users.signUp(username, email, password)
    } else {
      console.log('fields are empty')
    }
  }
  render() {
    return ( 
      <div className="col-xs-6">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <input ref="username" type="text" className="form-control" id="username" placeholder="username"/>
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input ref="email" type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
            <input ref="password" type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-success">Sign up</button>
              </div>
          </div>
        </form>
      </div>
  )
    }
}

export default Signup