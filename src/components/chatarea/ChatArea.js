import React, { Component } from 'react'
import Composer from '../composer/Composer'
import MessageList from '../message/MessageList'


class ChatArea extends Component {
  componentWillMount () {
    const { socket } = this.props
    this.channel = socket.channel('channel:general')
    this.channel.join()
  }
  render() {
    return(
           <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h3 className="page-header">Welcome in DevChat</h3>
                    <MessageList channel={this.channel} {...this.props} />
                    <Composer channel={this.channel} {...this.props}/>
           </div>
           )
  }
}

export default ChatArea