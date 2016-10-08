import React, { Component } from 'react'



class Home extends Component {
  componentWillMount() {
    if (this.props.user.loggedin) {
      this.context.router.push('/spaces/general/')
    }
  }
  render() {
    return(
           <div>
           <h1>Hello and welcome to <strong>Devolio</strong> :)</h1>
           <p>Devolio is a a friendly community for developers.<br /> Join now and meet talented developers, ask them a question or just hang out and chat about coding.</p>
           <br />
           <a className="btn btn-success" href="/signup">Join us!</a><br />If you're already a member then: <a className="btn btn-primary" href="/login">Login!</a>
           </div>
           )
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home