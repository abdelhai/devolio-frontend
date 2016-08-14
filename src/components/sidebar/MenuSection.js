import React, { Component } from 'react'
import SpaceMenu from './SpaceMenu'

class MenuSection extends Component {
  render() {
    const spaces = this.props.actions.channels.getSpaces().payload
    return(
           <div>
           <h5>Channels</h5>
             <ul className="nav nav-sidebar sidebar-left">
             {spaces.map((space, i) => {
                return <SpaceMenu key={i} spaceName={space.name} {...this.props}/>
             })}

             </ul>
           </div>
           )
  }
}

export default MenuSection
