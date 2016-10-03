import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'
import ChatArea from './chatarea/ChatArea'


class Main extends Component {
  render() {
    return (
            <div>
            
            { React.cloneElement(this.props.children, this.props) }
            </div>
            )
  }
}

export default Main