import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import ChatArea from './chatarea/ChatArea'


class Main extends Component {
  render() {
    return (
            <div>
            <Navbar {...this.props} />
            { React.cloneElement(this.props.children, this.props) }
            </div>
            )
  }
}

export default Main