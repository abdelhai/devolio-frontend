import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
    render() {
        const messages = this.props.actions.messages.getMessages().payload
        return ( 
                <div className="media">
                {console.log()}
                 {messages.map((msg,i) => {
                    return <Message key={i} payload={msg.payload} username={msg.username} />
                 })}
                </div>
  )
    }
}

export default MessageList
