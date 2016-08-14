import React, { Component } from 'react'
import MenuSection from './MenuSection'

class Sidebar extends Component {
  render() {
    return(
           <div className="col-md-2 sidebar">
               <MenuSection {...this.props} />
           </div>
           )
  }
}

export default Sidebar