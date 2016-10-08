import React, { Component } from 'react'

class Shit extends Component {
  render() {
    if (this.props.err) {
      return <div className="alert alert-warning" role="alert">{this.props.err}</div>
    } else {
      return null
    } 
  }
}
class Signup extends Component {
  componentWillMount() {
    if (this.props.user.loggedin) {
      this.context.router.push('/spaces/general/')
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    var { username, email, password } = this.refs
    if (username.value !== '' & password.value !== '' & email.value !== '') {

      var username = username.value
      var email = email.value
      var password = password.value

      if (/\S+@\S+\.\S+/.test(email)) {
        const { users } = this.props.actions
        users.signUp(username, email, password) 

        if (!this.props.err.error) {
          this.context.router.push('/spaces/general/')
        }
      
      } else {
        this.props.actions.errs.authError('Invalid email')
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
Signup.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Signup