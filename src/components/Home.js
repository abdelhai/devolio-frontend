import React, { Component } from 'react'



class Home extends Component {
  render() {
    return(
           <div>
           <h1>Hello and welcome to <strong>Devolio</strong> :)</h1>
           <p>Devolio is a a friendly community for developers.<br /> Join to meet talented developers, ask them a question or just hang out and chat about coding.</p>
           <br />
           <a className="btn btn-success" href="/signup">Join us!</a> Or if you're already a member then: <a className="btn btn-primary" href="/login">Login!</a>
           <p>See ya there :)</p>
           </div>
           )
  }
}

export default Home