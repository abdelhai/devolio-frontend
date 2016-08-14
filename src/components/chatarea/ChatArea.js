import React, { Component } from 'react'
import MsgInput from '../msginput/MsgInput'
import MessageList from '../message/MessageList'


class ChatArea extends Component {
  render() {
    return(
           <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h3 className="page-header">Welcome in DevChat</h3>
                    <MessageList {...this.props} />
                    <MsgInput/>

           </div>
           )
  }
}

export default ChatArea