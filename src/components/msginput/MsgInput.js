import React, { Component } from 'react'

class MsgInput extends Component {
  _onKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      let text = this.refs.message.value.trim()
      if (text) {
        this.props.channel.push("new_msg", {body: text})
      }
      this.refs.message.value = ''
    }
  }
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
                  autoFocus="true"
                  ref="message"
                  onKeyDown={this._onKeyDown.bind(this)}
                  />
              </div>
            </form>
          </div>
           )
  }

}

export default MsgInput