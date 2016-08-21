import React, { Component } from 'react'

class SignIn extends Component {
  handleSubmit(event) {
    event.preventDefault()
    var { username, password } = this.refs
    if (username.value !== '' & password.value !== '') {
      var username = JSON.stringify(username.value)
      var password = JSON.stringify(password.value)

      const { users } = this.props.actions
      users.logIn(username, password)
    } else {
      console.log('fields are empty')
    }
  }
  render() {
    return ( 
      <div className="col-xs-6">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="username" className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <input ref="username" type="text" className="form-control" id="username" placeholder="Username"/>
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
                <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-success">Sign in</button>
              </div>
          </div>
        </form>
      </div>
  )
    }
}

export default SignIn