import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import ChatArea from './chatarea/ChatArea'


class Main extends Component {
  render() {
    return (
            <div>
            <Navbar/>
              <div className="container-fluid">
                <div className="row">
                  <Sidebar {...this.props}/>
                  <ChatArea {...this.props}/>
                </div>
              </div>
            </div>
            )
  }
}

export default Main