import React from 'react'
import { render } from 'react-dom'
import Main from './components/main'
import { Router, Route, browserHistory } from 'react-router'
import './css/style.scss'
import { Provider, connect } from 'react-redux'
import store, { history } from './store'
import { bindActionCreators } from 'redux'
import * as messagesActions from './actions/messages'
import * as channelsActions from './actions/channels'



function mapStateToProps(state) {
  console.log(state)
  return {
    messages : state.messages.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    messagesActions: bindActionCreators(messagesActions, dispatch),
    channelsActions: bindActionCreators(channelsActions, dispatch)
  }
}
var App = connect(mapStateToProps, mapDispatchToProps)(Main)

const root = document.getElementById('app-root')
render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}/>
        </Router>
      </Provider>, root)

