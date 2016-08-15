import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import ChatArea from '../chatarea/ChatArea'


class DevChat extends Component {
  render() {
    return (
            <div>
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

export default DevChat