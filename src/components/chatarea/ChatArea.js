import React, { Component } from 'react'
import Composer from '../composer/Composer'
import MessageList from '../message/MessageList'
import Navbar from '../navbar/Navbar'



class ChatArea extends Component {
  componentWillMount () {
    const { socket } = this.props
    const { spaceId } = this.props.params
    this.channel = socket.channel(`channel:${spaceId}`)
    this.channel.join()
  }
  render() {
    return(
           <div>
           <Navbar {...this.props} />
           <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h3 className="page-header">Welcome on Devolio!</h3>
                <p>Ask a question or start a chat in one of the spaces on the left.</p>
                    <MessageList channel={this.channel} {...this.props} />
                    <Composer channel={this.channel} {...this.props}/>
           </div>
           </div>
           )
  }
}

export default ChatArea