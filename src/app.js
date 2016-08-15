import React from 'react'
import { render } from 'react-dom'
import Main from './components/main'
import { Router, Route, IndexRoute } from 'react-router'
import './css/style.scss'
import { Provider, connect } from 'react-redux'
import store, { history } from './store'
import { bindActionCreators } from 'redux'
import * as messagesActions from './actions/messages'
import socket from './socket'
import DevChat from './components/pages/DevChat'
import SignUp from './components/auth/SignUp'


// make state available as props
const mapStateToProps = (state) => ({
  socket: socket,
  messages: state.messages.messages,
  channels: state.channels
})

// make actions available as props
const mapDispatchToProps = (dispatch) => ({
  actions: {
    messages: bindActionCreators(messagesActions, dispatch),
  }
})
var App = connect(mapStateToProps, mapDispatchToProps)(Main)

const root = document.getElementById('app-root')
render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={DevChat}/>
            <Route path="signup" component={SignUp}/>
          </Route>
        </Router>
      </Provider>, root)

