import React, { Component } from 'react'
import { push } from 'react-router-redux';

class Shit extends Component {
  render() {
    if (this.props.err) {
      return <div className="alert alert-warning" role="alert">{this.props.err}</div>
    } else {
      return null
    }
    
  }
}
class SignIn extends Component {
  componentWillMount() {
    if (this.props.user.loggedin) {
      this.context.router.push('/spaces/general/')
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    
    var { username, password } = this.refs
    if (username.value !== '' & password.value !== '') {
      var username = username.value
      var password = password.value

      const userActions = this.props.actions.users
      userActions.logIn(username, password)
    
      if (!this.props.err.error) {
        this.context.router.push('/spaces/general/')
      } else {
        this.props.actions.errs.authError('Username or password are wrong')
      }
    } else {
      this.props.actions.errs.authError('Some/all fields are empty')
    }
  }
  render() {
    return ( 
      <div className="col-xs-6">
      <Shit err={this.props.err.message} />
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

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SignIn