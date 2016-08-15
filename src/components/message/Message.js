import React, { Component } from 'react'

class Message extends Component {
    render() {
        return ( 
                <div className="media-body">
                    <h4 className="media-heading">{this.props.username}</h4>
                    <p>{this.props.payload}</p>
                </div>
  )
    }
}

export default Message