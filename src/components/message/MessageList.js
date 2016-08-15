import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  componentDidMount() {
    const { channel } = this.props
    const { messages } = this.props.actions
    channel.on("new_msg", payload => {
      messages.newMessage(payload)
    })
  }
  render() {
    console.log(this)

    const { messages } = this.props
    return ( 
            <div className="media">
            {console.log()}
             {messages.map((msg,i) => {
                return <Message key={i} payload={msg.body} username={msg.user} />
             })}
            </div>
            )
  }
}

export default MessageList
