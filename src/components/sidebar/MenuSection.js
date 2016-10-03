import React, { Component } from 'react'

class MenuSection extends Component {
  componentWillMount() {
    this.props.actions.spaces.fetchSpaces()
  }   

  render() {
    const { spaces } = this.props.spaces
    return(
           <div>
           <h5>Spaces</h5>
             <ul className="nav nav-sidebar sidebar-left">
             {spaces.map((space, i) => {
                return (<li key={i}>
                          <a href={`/spaces/${space.name}`} >$ {space.name}</a>
                        </li>)
             })}

             </ul>
           </div>
           )
  }
}

export default MenuSection
