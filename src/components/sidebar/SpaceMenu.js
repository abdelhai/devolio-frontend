import React, { Component } from 'react'

class SpaceMenu extends Component {
  render() {
    const channels = this.props.actions.channels.getChannels().payload
    return(
           <div className="space-group">
           <li>
           <a className="space-name" href="#">{this.props.spaceName}</a>
           <ul className="nav">
             {channels.map((chan,i) => {
              return <li key={i} ><a href="#">{chan.name}</a></li>
             })}
           </ul>
           </li>
           </div>
           )
  }
}

export default SpaceMenu
