import React, { Component } from 'react'

class MsgInput extends Component {
  render() {
    return(
          <div className="col-lg-6">
            <form>
              <div className="input-group msg-input">
                <input 
                  type="text" 
                  className="form-control" 
                  id="msg" 
                  rows="1" 
                  autoComplete="off" 
                  placeholder="What's up?" 
                  autoFocus="true">
                </input>
              </div>
            </form>
          </div>
           )
  }
}

export default MsgInput