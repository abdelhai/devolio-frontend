import React, { Component } from 'react'
import Message from './Message'
import ReactEmoji from 'react-emoji'

class MessageList extends Component {
  componentDidMount() {
    const { channel } = this.props
    const { messages } = this.props.actions
    channel.on("new_msg", payload => {
      messages.newMessage(payload)
    })
  }
  componentDidUpdate() {
    let container = this.refs.media
    container.scrollTop = container.scrollHeight
  }
  render() {
    const { messages } = this.props
    return ( 
            <div ref="media" className="media">
            {console.log(this)}
             {messages.map((msg,i) => {
                return <Message key={i} payload={ReactEmoji.emojify(msg.body, {emojiType:'emojione'})} username={msg.user} />
             })}
            </div>
            )
  }
}

export default MessageList
